import React, { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import '../gallery/galley.component.css'
import { getImageGallery, saveImageGallery } from "../../../services/admin/gallery.service";
import { NotificationMessage } from "../../common/notification-message/notification-message.component";

export const ImageGallery = (props) =>{
    const [images, setImages] = React.useState([]);
    const [type , setType] = useState("");
    const [message , setMessage] = useState("");
    const [savedImages , setSavedImages] = useState([])
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
     useEffect(()=>{
       getData()
     },[])

    function saveData(){
        saveImageGallery(images).then((res)=>{
            setType("success")
            setMessage("IMAGE UPLOADED SUCCESSFULLY...!")

        })
    }

    function getData(){
        getImageGallery().then((res)=>{
     setSavedImages(res.data)
        })
    }
    return(
        <div>
            <div className="App">
{props.hidesearch && 
  <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          // onImageUpdate,
          // onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="btn btn-primary"
            >
            UPLOAD IMAGE
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} className="btn btn-danger m-2 p-2">DELETE ALL</button>
            <input type="button" value="SAVE" className="btn btn-primary p-2 m-5" onClick={()=>{saveData()}}></input>
            {imageList.map((image, index) => (
              <div key={index} className="image-item" >
               
                <img src={image.data_url} alt="" className="img-style"  />
             
              
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      </>}
      <NotificationMessage type = {type} message = {message}></NotificationMessage>
   <div className="img-g-flex">
      {
        savedImages && savedImages.map((item)=>{
            return(
            <div>
            <img src={item.data_url}   alt= "" className="rounded-img"></img>
            </div>
            )
        })
      }
      {
        savedImages.length === 0 && <div>NO IMAGES FOUND HERE...!</div>
      }
      </div>
     
    </div>
    
  
        </div>
        
    )
}