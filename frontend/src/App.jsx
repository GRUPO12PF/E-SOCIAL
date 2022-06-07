import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import NewPassword from "./components/NewPassword/NewPassword";
import ConfirmAccount from "./components/ConfirmAccount/ConfirmAccount";
import VerificationUser from "./components/VerificationUser/VerificationUser";
import Home from "./components/Home/Home";
import UpdatePassword from "./components/UpdatePassword/UpdatePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="registrar" element={<Register />} />
        <Route path="olvide-password" element={<ForgotPassword />} />
        <Route path="olvide-password/:token" element={<NewPassword />} />
        <Route path="confirmar/:id" element={<ConfirmAccount />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        
        
        <Route path="/home" element={<VerificationUser />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
