import axios from "axios";
export default class EmployeesService{
getEmployeess(){
    return axios.get("http://localhost:8080/api/employees/getAll")
}

}