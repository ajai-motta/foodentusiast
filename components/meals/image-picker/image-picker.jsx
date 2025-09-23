'use client'
import { useRef,useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
    const [preview,setPreview]=useState(null)
    const ref=useRef()
    function handleClick(){
        ref.current.click()
    }
    function handleChange(event){
        const file=event.target.files[0]
        if(!file){
            setPreview(null)
            return ;
        }
        const fileReader=new FileReader()
        fileReader.onload=()=>{
            setPreview(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!preview ? <p>No image picked yet</p>:<Image src={preview} alt="Selected image" fill/>}
            
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/jpeg, image/png"
          name={name}
          ref={ref}
          onChange={handleChange}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
            Pick an Image
        </button>
      </div>
    </div>
  );
}
