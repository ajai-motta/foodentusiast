import React from 'react'
import { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealGrid from '@/components/meals/meal-grid'
import {getMeals} from '@/lib/meals'
const Meals=async ()=>{
  const meals=await getMeals()
  return <MealGrid meals={meals}/>
}
const page = async() => {
  
  return (
    <div>
      <header className={classes.header}>
        <h1>Delicus meals created {' '} <span>by you</span></h1>
        <p>Choose you favoriate recipe and cook it your self.</p>
        <p className={classes.cta}><Link href="/meals/share">Share your Most beloved recipe</Link></p>
      </header>
      <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
        <Meals/>
        </Suspense>  
      
      </main>
    </div>
  )
}

export default page