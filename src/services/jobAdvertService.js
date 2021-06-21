import axios from "axios";
export default class JobAdvertService{
getJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdverts/getAll")
}
getByJobAdvertId(jobAdvertId){
    return axios.get("http://localhost:8080/api/jobAdverts/getByJobAdvertId?jobAdvertId="+jobAdvertId)
}
addJobAdvert(values){
return axios.post("http://localhost:8080/api/jobAdverts/add",values)
}
getAllPassiveJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdverts/getByPassive")
}
getAllActiveJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdverts/getByActive")

}
delete(jobAdvertIdDelete){
    return axios.delete("http://localhost:8080/api/jobAdverts/delete?jobAdvertId="+jobAdvertIdDelete)

}
changeStatus(jobAdvertId){
    return axios.post("http://localhost:8080/api/jobAdverts/changeStatus?jobAdvertId="+jobAdvertId)
}
}