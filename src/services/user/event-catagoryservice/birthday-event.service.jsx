import { getData, saveData } from "../../context.service";

 const url="  http://localhost:3000/birthdayevent/";

export function getBirthdayData(){
    return getData(url);
}

export function saveBirthdayData(data){
    return saveData(url,data)
}