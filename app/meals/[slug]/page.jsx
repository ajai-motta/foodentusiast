import { getMealItem } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'
export default async function MealItem({params}){
  const meal=await getMealItem(params.slug)
    return <>
    <header className={classes.header}>
      <div className={classes.image}><Image src={meal.image} alt={meal.title}fill/></div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}><a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
    </header>
    <main>
      <p className={classes.instuctions} dangerouslySetInnerHTML={{
        __html: '...'
      }
     
      }>

      </p>
    </main>
    </>
}