'use client'
import { useFormStatus } from "react-dom"
export default function MealShareButton(){
    const {pending}=useFormStatus()
    return <button disabled={pending}>{pending? <p >Submiting...</p>:<p>Share Meal</p>}</button>
}