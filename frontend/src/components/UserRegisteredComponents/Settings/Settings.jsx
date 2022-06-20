import React from "react";
import { Link } from "react-router-dom";
import { cambiarImagen } from "../../../redux/actions/actionUser";
import { useDispatch, useSelector } from "react-redux";
import profile from "../../../assets/images/avatar.png";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import Loading from "../../CommonComponents/Loading/Loading";

export default function Settings() {
  const dispatch = useDispatch();
  const usuarioAct = useSelector((state) => state.usuarioActual);


  function handleFileImage(image) {
    dispatch(cambiarImagen(image));
  }

  return (
    usuarioAct.length !== 0 ? 
    <div className="contSettings">
      <NavBar/>
        <div className="contSettings-info">
          <div className="contProfile">
          <img src={usuarioAct.image.url ? usuarioAct.image.url : profile} alt="" />
            <span>Extenciones Soportadas: jpg/png</span>
            <div className="contFile">
              <label className="labelmiinput" htmlFor="mifile">
                Change image
              </label>
              <input
                type="file"
                name="image"
                className="file"
                id="mifile"
                onChange={(e) => handleFileImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="enlace">
            <Link to="/olvide-password/">
              <button>Change password</button>
            </Link>
          </div>
        </div>
    </div> : <Loading/>
  ) 
}
