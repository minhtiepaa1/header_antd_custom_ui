import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { DataLeftMenuItems } from "../../../../RootRouter";

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
}

const Routes: React.FC<DataProps> = (props) => {
  return (
    <ReactRoutes>
      {props?.leftMenuItems?.map((item) => {
        if (item?.children === undefined || item?.children?.length === 0) {
          return <Route path={item?.path} element={item?.component}></Route>;
        } else {
          return (
            <>
              {item?.children?.map((item) => {
                return (
                  <Route path={item?.path} element={item?.component}></Route>
                );
              })}
            </>
          );
        }
      })}
    </ReactRoutes>
  );
};

export default Routes;
