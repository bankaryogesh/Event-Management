import { getData, saveData } from "../../context.service";

 const url="http://localhost:3000/weddingEvent/";

export function getWeddingDayData(){
    return getData(url);
}

export function saveWeddingDayData(data){
    return saveData(url,data)
}