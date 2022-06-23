import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import {
  login,
  resetErrorLoginUser,
  registroGoogle,
} from "../../../redux/actions/actionUser";
import validarEmail from "../../../middleware/validarEmail";
import validatePassword from "../../../middleware/validarPassword";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import s from './Login.module.css';
import image from '../../../assets/images/login.jpg';
import { FaRegEye,FaRegEyeSlash, FaWindows} from 'react-icons/fa';
import Footer from "../Footer/Footer";


function validate(email, password) {
  let objeto = {};
  if (email === "") objeto = { ...objeto, email: "this field is required" };
  else if (validarEmail(email))
    email.length > 40
      ? (objeto = { ...objeto, email: "invalid length" })
      : (objeto = { ...objeto, email: "invalid format" });

  if (password === "")
    objeto = { ...objeto, password: "this field is required" };
  else if (validatePassword(password))
    objeto = {
      ...objeto,
      password: "Your password must be at least 8 characters",
    };

  return objeto;
}

export default function Login() {
  const errorEmail = useSelector((state) => state.errorEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  const [state,setEstate]= useState(false)
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    
    token? navigate("/"):null
    
  }, [token])
  

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });


  const handleToggle = ()=>{
    setEstate(prevState => !prevState)
  }

  function handleChangeEmail(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      email: "",
    });
  }

  const handleChangePassword = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let val = validate(usuario.email, usuario.password);
    if (Object.keys(val).length === 0) {
      const loginData= await dispatch(login(usuario));
      console.log(loginData.payload)
      setUsuario({
        email: "",
        password: "",
      });
      
      if (errorEmail) {
        e.preventDefault();
      
      } else {
       dispatch(resetErrorLoginUser());
       loginData.payload.token ? navigate("/") : null
      }
    } else setErrors(val);
  };
  function responseGoogle(el) {
    dispatch(registroGoogle(el));
   
    setTimeout(function () {
      window.location.reload(1)
    }, 1500); // After 2,5 secs
  }
  return (



    <div className="fondeAt">
      
    <div className="container-login">
  <div className="screen">
    <div className="screen__content">
      <form className="login-login" onSubmit={handleSubmit}>
        <div className="login__field">
          <i className="login__icon fas fa-user"></i>
          <input id="email"
              className="input-login"
               value={usuario.email}
               type="text"
               name="email"
               onChange={handleChangeEmail}
               placeholder="Your name / email"/>

              {errors.email && (
               <div>
                 <p>{errors.email}</p>
               </div>
             )}
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock"></i>
          <input
           id="password"
           className="input-login"
               type={state ? "text" : "password"}
               value={usuario.password}
               name="password"
               onChange={handleChangePassword}
              placeholder="Password"/>
              {errors.password && (
                   <div>
                     <p>{errors.password}</p>
                   </div>
                 )}
        </div>
        {errorEmail && !usuario.email && !usuario.password ? (
                 <p>{errorEmail} </p>
               ) : null}
        <button className="button login__submit">
          <span className="button__text">Log In Now</span>
          <i className="button__icon fas fa-chevron-right"></i>
        </button>       
      </form>
      <div className="social-login">
        <h3>log in via</h3>
        <div className="social-icons">
        <div className="logg">
        <GoogleOAuthProvider
               clientId={`${import.meta.env.VITE_URL_CLIENT_ID}`}
               >
               <GoogleLogin   login_uri="" onSuccess={responseGoogle}  />
         
             </GoogleOAuthProvider>
        </div>
            <button className="eye" onClick={handleToggle}>{state ? <FaRegEye/> : <FaRegEyeSlash/> }</button>
            <Link to="/olvide-password/" >
               {" "}
               <h4 className="forgett">forget your password?</h4>
             </Link>
        </div>
        
      </div>
    </div>
    <div className="screen__background">
      <span className="screen__background__shape screen__background__shape4"></span>
      <span className="screen__background__shape screen__background__shape3"></span>    
      <span className="screen__background__shape screen__background__shape2"></span>
      <span className="screen__background__shape screen__background__shape1"></span>
    </div>    
  </div>
</div>


    </div>

















    // <div>
    //   <div>
    //     <img className={s.image} src={image} alt='' />
    //     <div>
    //       <Link to="/" className={s.toHome}>
    //     <button className={s.toHome}>Home</button>
    //       </Link>
    //       <div className={s.container}>
    //         <h3 className={s.title}>Login</h3>
    //         <div className={s.formGral}>
    //         <form  onSubmit={handleSubmit}>
    //           <label className={s.label} htmlFor="email">Email</label>
    //           <div>
    //             <input className={s.input}
    //               id="email"
    //               value={usuario.email}
    //               type="text"
    //               name="email"
    //               onChange={handleChangeEmail}
    //               placeholder="Your email"
    //             />
    //             {errors.email && (
    //               <div>
    //                 <p>{errors.email}</p>
    //               </div>
    //             )}
    //           </div>

    //           <label className={s.label} htmlFor="password">Password</label>
    //           <div>
    //             <input className={s.inputt}
    //               id="password"
    //               type={state ? "text" : "password"}
    //               value={usuario.password}
    //               name="password"
    //               onChange={handleChangePassword}
    //               placeholder="Your password"
    //             />
                
    //             {errors.password && (
    //               <div>
    //                 <p>{errors.password}</p>
    //               </div>
    //             )}
    //           </div>

    //           {errorEmail && !usuario.email && !usuario.password ? (
    //             <p>{errorEmail} </p>
    //           ) : null}
    //           <br/>
    //         <div className={s.login}>
    //             <button type="submit"> LOGIN </button>
    //           </div>
    //           </form>

    //           <GoogleOAuthProvider
    //           clientId={`${import.meta.env.VITE_URL_CLIENT_ID}`}
    //           >
    //           <GoogleLogin   login_uri="" onSuccess={responseGoogle}  />
             
    //         </GoogleOAuthProvider>
    //        <button className={s.eye} onClick={handleToggle}>{state ? <FaRegEye/> : <FaRegEyeSlash/> }</button>
    //        </div>
    //         <Link to="/olvide-password/" className={s.link}>
    //           {" "}
    //           <h4>forget your password?</h4>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
