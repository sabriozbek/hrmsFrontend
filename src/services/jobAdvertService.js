import axios from "axios";
export default class JobAdvertService{
getJobAdverts(){
    return axios.get("http://localhost:8080/api/jobAdverts/getAll")
}
getByJobAdvertId(jobAdvertId){
    return axios.get("http://localhost:8080/api/jobAdverts/getByJobAdvertId?jobAdvertId="+jobAdvertId)
}
addJobAdvert(values){
return axios.get("http://localhost:8080/api/jobAdverts/add",values)
}
}