import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Notiflix from 'notiflix';
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
            // save the authtoken and redirect
            localStorage.setItem('token',json.authtoken);
            props.setLoginSuccess(true);
            navigate("/");
            Notiflix.Notify.success('Login Succesfull');
          }
          else{
            Notiflix.Notify.failure('Invalid Credentails!');
          }
    }

    const onChange = (e)=>{
        // We are using spread (...) syntax, Spread syntax can be used when all elements from an object
        // or array need to be included in a new array or object
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    
    const [credentials, setCredentials] = useState({email:"",password:""})

  return (
    <div className='container my-5'>
         <form>
        <h2 className="my-4">Login to Shopify</h2>
        <div className="mb-3 my-4">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Log In
        </button>
      </form>        
      <div className="container my-5">
            <h2>Doesn't have an Account?</h2>
            <Link className="btn btn-secondary my-2" to="/signUp">SignUp</Link>
      </div>
    </div>
  )
}

export default Login