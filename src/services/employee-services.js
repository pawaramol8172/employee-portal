// import axios from "axios";


// const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

// //AWS:Add Debug Configuration|AWS:Edit Debug Configuration 

// export async function getEmployees(){
//     return fetch(API_URL)
//     .then(resp => resp.json());
// }


// export async function getEmployee(locId,ecode){
//     //console.log("Location :" +locId +"  Ecode :" +ecode)
//     //http://localhost:5000/employees/location/MUM/empcode/EMP1
//     let URL = `${API_URL}/location/${locId}/empcode/${ecode}`;
//     return fetch(URL)
//     .then(resp => resp.json());
// }
// export async function addEmployee(employee){

//     return axios.post(API_URL, employee)

// }