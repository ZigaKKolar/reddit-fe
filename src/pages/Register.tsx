import axios from 'axios';
import './Login.css';
import {SyntheticEvent, useState} from "react";
import { Navigate } from 'react-router-dom';
const Register = () => {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[password2, setPassword2] = useState("");

    const url = "http://localhost:3000/users"
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            pass: password,
        }
        console.log(data)

        const res = await axios.post(url,data);

        if (res.status === 201){
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="firstNameInput"
                               placeholder="Input youtr first name."
                        onChange={(e)=>setFirstName(e.target.value)}/>
                        <label htmlFor="firstNameInput">First name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="lastNameInput"
                               placeholder="Input youtr last name."
                               onChange={(e)=>setLastName(e.target.value)}/>
                        <label htmlFor="lastNameInput">Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"
                               onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="emailInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword2" placeholder="Repet password"
                               onChange={(e)=>setPassword2(e.target.value)}/>
                        <label htmlFor="floatingPassword2">Repet password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                </form>
            </main>
        </>
    )
}

export default Register;