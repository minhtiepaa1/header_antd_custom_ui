import React from "react";
import { Dropdown as AntDropDown, DropDownProps } from "antd";
const DropsDown: React.FC<DropDownProps> = (props) => {
  return <AntDropDown {...props}>{props?.children}</AntDropDown>;
};

export default DropsDown;
