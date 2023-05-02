import { useEffect, useState } from "react"
import InputText from "../../components/Form/InputText/InputText"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login () {

    const navigate = useNavigate()
    const[username, setUsername] = useState();
    const[passwordfield, setPassword] = useState();

    var requestObj = {
        "username": username,
        "password": passwordfield
    }

    const handleSubmit = async () => {
        await axios.post('http://localhost:8000/login', requestObj).then((response) => {
            console.log(response)
            if(response.data.status === "Success") {
                sessionStorage.setItem("isLoggedIn", 1)
                sessionStorage.setItem("role", response.data.role)
                navigate('/landing')
            } else {
                sessionStorage.setItem("isLoggedIn", 0)
            }
        })
    }

    // const toDashboard = () => {
    //     navigate('/dashboard')
    // }

    // useEffect(() => {toDashboard();}, [sessionStorage.getItem("isLoggedIn")]);

    return(
        <div>
            <div className="breadcrumb1">
                <div className="breadcrumb__wrapper1">
                    Skill Yatra Login
                </div>
            </div>
        <form className="form">
            <h4 className="form__title">Login</h4>
            <div className="form__row1">
                <InputText value={username} setValue={setUsername} Title="Username" />
            </div>
            <div className="form__row1">
                <InputText value={passwordfield} setValue={setPassword} Title="Password" />
            </div>
        </form>
        <button onClick={handleSubmit} className="submit-btn">
            Login
        </button>
        </div>
    )
}