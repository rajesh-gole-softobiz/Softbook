import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

function App() {
  return (
     <Router>
      <Switch>

        <Route exact path="/" element={<Home/>}/>

        <Route path="/login" element={<Login/>} />
          
        <Route path="/register" element={<Register/>} />   

        <Route path="/profile/:username" element={<Profile/>} />
          

      </Switch>
     </Router>
  );
}

export default App;
