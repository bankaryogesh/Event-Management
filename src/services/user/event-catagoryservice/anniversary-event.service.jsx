import { getData, saveData } from "../../context.service";

 const url="  http://localhost:3000/anniversaryEvent/";

export function getAnniversaryData(){
    return getData(url);
}

export function saveAnniversaryData(data){
    return saveData(url,data)
}