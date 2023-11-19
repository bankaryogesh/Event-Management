import axios from "axios";


//create data
export function saveData(url,id, data){
    return axios.post(url, id.data,data)

}
//get / read data
export function getData(url){
return axios.get(url)
}

//update data

export function updateData(url,id,data){
    return axios.put(url+id,data)
}

//delate data

export function delateData(){
    return axios.delete()
}