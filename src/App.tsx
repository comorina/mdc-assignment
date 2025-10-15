import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";
import UserNotFound from "./component/ErroPages/userNotFound";

const Home = React.lazy(() => import("./component/HomePage/Home"));
const Dashboard = React.lazy(
  () => import("./component/dasboardComponent/Dashboard")
);
const UserDetail = React.lazy(
  () => import("./component/userDetailsComponent/UserDetail")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<UserNotFound />} />
          <Route path="user/:id" element={<UserDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
