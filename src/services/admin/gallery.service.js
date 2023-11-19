import { getData, saveData } from "../context.service"


const  url = "http://localhost:3000/imagegallery/"

export function getImageGallery(){
    return getData(url)
}

export function saveImageGallery(data){
    return saveData(url , data)
}