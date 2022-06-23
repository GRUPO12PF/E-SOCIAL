import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconsLogout from "../../../Iconos/IconsLogout";
import Settings from "../../../Iconos/Settings";
import Order from "../../../Iconos/Order";
import Books from "../../../Iconos/Books";
import Admin from "../../../Iconos/Admin";
import Questions from "../Questions/Questions";
import Perfil from "../../../Iconos/Perfil";

export default function ProfileSettings() {
  const navigate = useNavigate();
  const user = useSelector(state => state.usuarioActual)
  const idUser = user._id

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  function logOut() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="profileModal">
      <div className="divModalPerfil">
        <Link to="/profile" >
          <Perfil/>
          <h3>Perfil</h3>
        </Link>
      </div>
      <div className="divModalPerfil">
        <Link to="/user/setting" >
          <Settings />
          <h3>Settings</h3>
        </Link>
      </div>
      <div className="divModalPerfil">
        <Link to="/admin">
          <Admin />
          <h3>ADMIN</h3>
        </Link>
      </div>
      <div className="divModalPerfil" onClick={() => logOut()}>
        <Link to="/">
          <IconsLogout />
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
}
