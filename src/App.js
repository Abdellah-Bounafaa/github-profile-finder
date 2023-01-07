import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";

import Users from "./components/Users/Users";
import UserInfo from "./components/Users/User/UserInfo";

function App() {
  return (
    <div className="">
      <div className="App-container">
        {" "}
        <Logo />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="users/:login" element={<UserInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
