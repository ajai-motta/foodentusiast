import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealGrid from '@/components/meals/meal-grid'

const page = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Delicus meals created {' '} <span>by you</span></h1>
        <p>Choose you favoriate recipe and cook it your self.</p>
        <p className={classes.cta}><Link href="/meals/share">Share your Most beloved recipe</Link></p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={[]}/>

      </main>
    </div>
  )
}

export default page