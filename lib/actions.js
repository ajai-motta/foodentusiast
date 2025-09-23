'use server'
export async function shareSubmit(formData){
    
    const data={
      title: formData.get('title'),
      instructions:formData.get('instructions'),
      image:formData.get('image'),
      summary:formData.get('summary'),
      creator:formData.get('name'),
      creator_email: formData.get('email')
    }
    console.log(data)
  }