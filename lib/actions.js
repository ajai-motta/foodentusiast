'use server'
import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"
export async function shareSubmit(previousState,formData){
    
    const data={
      title: formData.get('title'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
      summary:formData.get('summary'),
      creator:formData.get('name'),
      creator_email: formData.get('email')
    }
    if(data.title.trim().length===0 ||
     data.instructions.trim().length===0 || 
     data.summary.trim().length===0 ||
      data.creator.trim().length===0 ||
       data.creator_email.trim().length===0 || data.creator_email.includes('@')===false
      || data.image.size===0|| !data.image){
      return {message:'Invalid input - please check your data.'}
    }
  await saveMeal(data)
  revalidatePath('/meals','layout')
  redirect('/meals')
  
  }