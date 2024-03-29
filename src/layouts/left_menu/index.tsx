import { Menu } from "antd";
import React from "react";
import { DataLeftMenuItems } from "../../RootRouter";
import { Link } from "react-router-dom";

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
}

const LeftMenu: React.FC<DataProps> = (props) => {
  return (
    <Menu
      theme="light"
      mode="inline"
      items={props?.leftMenuItems?.map((item, index) => {
        let temp = item;

        if (item?.children === undefined || item?.children?.length === 0) {
          temp.label = (
            <Link to={item?.path} key={index}>
              {item?.label}
            </Link>
          );

          return item;
        } else {
          temp?.children?.map((itemChild, index) => {
            let tempChild = itemChild;

            tempChild.label = (
              <Link to={itemChild?.path} key={index}>
                {itemChild?.label}
              </Link>
            );
            return itemChild;
          });

          return item;
        }
      })}
    />
  );
};

export default LeftMenu;
