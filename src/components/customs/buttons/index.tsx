import React from "react";
import { Button as AntButton, ButtonProps } from "antd";
const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props}></AntButton>;
};

export default Button;
