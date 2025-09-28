import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/HomePage/Home";
import Dashboard from "./component/dasboardComponent/Dashboard";
import UserDetail from "./component/userDetailsComponent/UserDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<UserDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
