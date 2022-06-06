import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import NewPassword from "./pages/NewPassword.jsx";
import ConfirmAccount from "./pages/ConfirmAccount.jsx";
import VerificationUser from "./pages/VerificationUser.jsx";
import Home from "./pages/Home.jsx";

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

        <Route path="/home/" element={<VerificationUser />}>
          <Route index element={<Home />} />
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;
