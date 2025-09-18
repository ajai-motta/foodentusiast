import Link from "next/link";
import classes from './page.module.css'
import ImageSlideShow from '@/components/images/image-slideshow'
export default function Home({params}) {
  return (
    <>
    
    <header className={classes.header}>
      <div className={classes.slideshow}>
      <ImageSlideShow/>
      </div>
      <div>
        <div className={classes.hero}>
          <h1>Eat food be Fat</h1>
          <p>Next level food from all over the world except pakistan.</p>
        </div>
        <div className={classes.cta}>
          <Link href="/community" >Join our comminity</Link>
          <Link href="/meals">Explore the profoundness of Food</Link>
        </div>
      </div>
    </header>
        <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
