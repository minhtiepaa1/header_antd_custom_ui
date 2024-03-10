import React from "react";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";
import { DataLeftMenuItems } from "../../../../RootRouter";

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
  basePath?: string;
}

const Routes: React.FC<DataProps> = (props) => {
  return (
    <ReactRoutes>
      {props?.leftMenuItems?.map((item, index) => {
        if (item?.children === undefined || item?.children?.length === 0) {
          return (
            <Route
              path={item?.path}
              element={item?.component}
              key={index}
            ></Route>
          );
        } else {
          return (
            <>
              {item?.children?.map((item, index) => {
                return (
                  <Route
                    path={item?.path}
                    element={item?.component}
                    key={index}
                  ></Route>
                );
              })}
            </>
          );
        }
      })}
      <Route path="/*" element={<Navigate to={props?.basePath || "home"} />} />
    </ReactRoutes>
  );
};

export default Routes;
