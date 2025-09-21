import sql from 'better-sqlite3'
const db=sql('meals.db')

export async function getMeals(){
    await new Promise((resolve)=>setTimeout(()=>{resolve()},5000))
   // throw new Error()
    return db.prepare('SELECT * FROM meals').all() //all from geting and geting more than one
}

export async function getMealItem(slug){
    await new Promise((resolve)=>setTimeout(()=>{resolve()},5000))
    return db.prepare('SELECT * FROM meals WHERE slug= ?').get(slug)
}