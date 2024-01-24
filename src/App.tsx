import React from "react";
import "./App.css";
import MainLayout from "./layouts/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataLeftMenuItems } from "./RootRouter";

interface DataProps {
  LeftMenuItems?: DataLeftMenuItems[];
  servicePath?: string;
}

const Layout: React.FC<DataProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/${props?.servicePath || "home"}/*`}
          element={<MainLayout leftMenuItems={props?.LeftMenuItems} />}
        />
        <Route path="*" element={"Page not found"} />
        <Route path="/login" element={"Login "} />
        <Route path="/register" element={"Register"} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
