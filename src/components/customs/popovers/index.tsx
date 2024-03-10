import React from "react";
import { Popover as AntPopover, PopoverProps } from "antd";
const Popover: React.FC<PopoverProps> = (props) => {
  return <AntPopover {...props}>{props?.children}</AntPopover>;
};

export default Popover;
