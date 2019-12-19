import axios from 'axios';

const url = 'http://localhost:8000/api/'

function logInRequest(userName, password,success)
{
    console.log(url + "users/signin")
    axios.post(url+"users/signin", {
        username: userName,
        password: password,
    })
        .then(success)
        .catch(function (error) {
            console.log(error);
        });
    


}


function signUpRequest(userName, lastName, firstName, password, email, date,success) {
    console.log()
    axios.post(url + "users/signin", {
        username: userName,
        lastname: lastName,
        firstname: firstName,
        password: password,
        email: email,
        birthdate: date,
    })
        .then(success)
        .catch(function (error) {
            console.log(error);
        });
}


function getAllMoviesRequest( success) {
    console.log(url + "movies/")
    axios.get(url + "movies/")
        .then(success)
        .catch(function (error) {
            console.log(error);
        });



}


export { logInRequest, signUpRequest, getAllMoviesRequest };