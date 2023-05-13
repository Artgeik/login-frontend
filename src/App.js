import Login from "./auth/Login"
import {Routes,Route,Navigate} from "react-router-dom"
import Register from "./auth/Register";
import Dashboard from "./dashboard/Dashboard";
import AlertNotification from "./dashboard/AlertNotification";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="*" element={<Navigate to='/register'/>} />
    </Routes>
    <AlertNotification/>
    </>   
  );
}

export default App;
