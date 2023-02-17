import React,{useState} from "react";
import Notiflix from 'notiflix';
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({email:"",password:"",name:"",cpassword:""});

  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(credentials.password.length < 5){
      Notiflix.Notify.warning('Password Must be atleast 5 Charecters!');
      return;
    }
    if(credentials.password !== credentials.cpassword){
      Notiflix.Notify.warning("Password Dosen't Match!!");
      return;
    }

    if(credentials.password === credentials.cpassword){
      const response = await fetch('http://localhost:4000/auth/createuser', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      console.log(json);
      if(json.success === true){
        navigate("/login");
        Notiflix.Notify.success('SignUp Succesfull, please Login');
      }
    }
  }

  return (
    <div className="container my-5">
      <form>
      <h2 className="my-4">SignUp to Continue Shopify</h2>
        <div className="mb-3 my-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
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
            minLength="5"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            minLength="5"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
