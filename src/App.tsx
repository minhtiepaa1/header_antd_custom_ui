import React, { useEffect, useState } from "react";
import "./App.css";
import MainLayout from "./layouts/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DataLeftMenuItems } from "./RootRouter";
import { Button } from "antd";
import { localIsLogin, localSetKey } from "./utils/const_functions";

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
  servicePath?: string;
  basePath?: string;
}

const Layout: React.FC<DataProps> = (props) => {
  // for re-render when login
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const checkIsLogin = () => {
    let isLogin = localIsLogin("isLogin");
    isLogin === "true"
      ? localSetKey("isLogin", false)
      : localSetKey("isLogin", true);
    setIsLogin(!isLogin);
    console.log("re-render1", isLogin);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/${props?.servicePath || "service"}/*`}
          element={
            localIsLogin("isLogin") === "true" ? (
              <MainLayout
                leftMenuItems={props?.leftMenuItems}
                basePath={props?.basePath}
              />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="*" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={"Login "} />
        <Route path="/register" element={"Register"} />
        <Route path="/logout" element={"Logout"} />
      </Routes>
      {/* <Button onClick={() => checkIsLogin()}> click</Button> */}
    </BrowserRouter>
  );
};

export default Layout;
