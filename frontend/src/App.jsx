import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//----------------------------------GUEST---------------------------------------------
import AuthLayout from "./layouts/AuthLayout";
import LandingPage from "./components/CommonComponents/LandingPage/LandingPage.jsx";
import Login from "./components/CommonComponents/Login/Login.jsx";
import Register from "./components/CommonComponents/Register/Register.jsx";
import ForgotPassword from "./components/CommonComponents/ForgotPassword/ForgotPassword.jsx";
import NewPassword from "./components/CommonComponents/NewPassword/NewPassword.jsx";
import ConfirmAccount from "./components/CommonComponents/ConfirmAccount/ConfirmAccount.jsx";
import UpdatePassword from "./components/CommonComponents/UpdatePassword/UpdatePassword.jsx";
import Details from "./components/CommonComponents/Details/Details.jsx";
import GuestAbout from "./components/GuestComponents/GuestAbout/GuestAbout.jsx";
import NotFound from "./components/CommonComponents/NotFound/NotFound.jsx";
import GuestHome from "./components/GuestComponents/GuestHome/GuestHome.jsx";
import Homeout from "./components/CommonComponents/Homeout/Homeout.jsx";
//----------------------------------USER---------------------------------------------
import VerificationUser from "./components/CommonComponents/VerificationUser/VerificationUser.jsx";
import RutaProtegida from "./layouts/RutaProtegida";
import HomeUser from "./components/UserRegisteredComponents/Home/Home.jsx";
import Forms from "./components/UserRegisteredComponents/Form/Forms.jsx";
import Settings from "./components/UserRegisteredComponents/Settings/Settings.jsx";
import UpdateBook from "./components/UserRegisteredComponents/UpdateBook/UpdateBook.jsx";
import About from "./components/UserRegisteredComponents/About/About.jsx";
//----------------------------------ADMIN---------------------------------------------

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<GuestHome />} />
          <Route path="homeout" element={<Homeout />} />
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<Register />} />
          <Route path="olvide-password" element={<ForgotPassword />} />
          <Route path="olvide-password/:token" element={<NewPassword />} />
          <Route path="confirmar/:id" element={<ConfirmAccount />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/aboutUs" element={<GuestAbout />} />
        </Route>

        <Route path="/" element={<VerificationUser />}>
          <Route path="/home" element={<HomeUser />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Forms />} />
          <Route path="/details/update/:id" element={<UpdateBook />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/user/setting" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}