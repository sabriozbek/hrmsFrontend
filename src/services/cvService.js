import axios from "axios";
export default class CvService{
    getCvById(candidateId){
    return axios.get("http://localhost:8080/api/curriculumVitae/getCvById?candidateId="+candidateId)
}

}