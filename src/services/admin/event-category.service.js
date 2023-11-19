import { getData, saveData, updateData } from "../context.service";

const url = "http://localhost:3000/event-category/";


export function getEventCategory(){
    return getData(url);
}
    export function saveEventCategory(data){
      return saveData(url,data);
    }


    export function updateEventCategory(data){
      return updateData(url,data.id ,data);
    }