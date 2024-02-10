import React from "react";
import { topMenuStyles as styles } from "../../styles/layouts/top_menu/styles";
import Button from "../../components/customs/buttons";
import { useNavigate } from "react-router-dom";
import { localSetKey } from "../../utils/const_functions";
import { Dropdown, MenuProps } from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Popover from "../../components/customs/popovers";

interface DataProps {
  isOpenLeftmenu: boolean;
  setIsOpenLeftmenu: Function;
}

const TopMenu: React.FC<DataProps> = (props) => {
  const navigate = useNavigate();

  const navigateLogOut = () => {
    localSetKey("isLogin", false);
    navigate("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div onClick={navigateLogOut}>Log out</div>,
    },
  ];

  const contentPopover = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const setIsOpenLeftMenu = () => {
    props?.setIsOpenLeftmenu(!props?.isOpenLeftmenu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <div>
          {props?.isOpenLeftmenu ? (
            <MenuUnfoldOutlined
              style={{ fontSize: 32 }}
              onClick={setIsOpenLeftMenu}
            />
          ) : (
            <MenuFoldOutlined
              style={{ fontSize: 32 }}
              onClick={setIsOpenLeftMenu}
            />
          )}
        </div>
        <div>
          <Popover content={contentPopover} placement="bottomLeft">
            <MenuOutlined style={{ fontSize: 32, cursor: "pointer" }} />
          </Popover>
        </div>
      </div>
      <div>
        <div className={styles.logOutBnt}>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button>
              <PoweroffOutlined style={{ width: "50px" }}></PoweroffOutlined>
              {/* <LoginOutlined /> */}
              {/* <LogoutOutlined /> */}
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
