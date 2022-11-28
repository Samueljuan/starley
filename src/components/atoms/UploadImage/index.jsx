import React, {useCallback} from 'react';
import { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { ImageUploadPlaceholder } from "../../../assets/images";

function MyDropzone() {
  const [images, setImages] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    var objectURL = URL.createObjectURL(acceptedFiles[0]);
    setImages(objectURL);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className='w-[176px] h-[176px] rounded-md' {...getRootProps()}>
      <input {...getInputProps()} />
      <img src={images ? images : ImageUploadPlaceholder} className={`${images && "bg-[#e5e5e5]"} w-full h-full rounded-md object-contain shadow-md`} alt='image-drop' />
    </div>
  )
}

export default MyDropzone;