import React, { useState } from "react";
import { mainLayoutsStyles as styles } from "../../styles/layouts/layout/styles";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout as AntLayout, Menu, theme, Button } from "antd";
import { DataLeftMenuItems } from "../../RootRouter";
import Routes from "../../components/layouts/layout/routes";
import LeftMenu from "../left_menu";
import { css } from "@emotion/css";
import { Navigate, useNavigate } from "react-router-dom";
import { localSetKey } from "../../utils/const_functions";
import TopMenu from "../top_menu";

const { Header, Content, Footer, Sider } = AntLayout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
  basePath?: string;
}

const MainLayout: React.FC<DataProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isOpenLeftMenu, setIsOpenLeftMenu] = useState<boolean>(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div
      className={css`
        overflow-y: "auto";
        height: 100vh;
      `}
    >
      <div className={styles.topMenuBox}>
        {/* <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        ></Menu> */}
        <TopMenu
          isOpenLeftmenu={isOpenLeftMenu}
          setIsOpenLeftmenu={setIsOpenLeftMenu}
        />
      </div>
      <div className={styles.boxLayoutContent}>
        <AntLayout style={{}}>
          {isOpenLeftMenu && (
            <Sider
              theme="light"
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              className={styles.siderLayout}
            >
              <LeftMenu leftMenuItems={props?.leftMenuItems} />
            </Sider>
          )}

          {/* <AntLayout className={styles.antLayoutContainContent}> */}
          <Content className={styles.contentFC}>
            <div
              className={styles.contentBody}
              style={{
                background: colorBgContainer,
              }}
            >
              <Routes
                leftMenuItems={props?.leftMenuItems}
                basePath={props?.basePath}
              />
              {/* <Footer
                  className={`${styles.contentBackImage}, ${styles.footerFC}`}
                >
                  Future social ©2023 Created by tiep.quang
                </Footer> */}
            </div>
          </Content>
          {/* </AntLayout> */}
        </AntLayout>
      </div>
    </div>
  );
};

export default MainLayout;
