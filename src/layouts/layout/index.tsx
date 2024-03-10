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
    <AntLayout className={styles.container}>
      {/* <div> */}
      <div className={styles.topMenuSpace}>
        <TopMenu
          isOpenLeftmenu={isOpenLeftMenu}
          setIsOpenLeftmenu={setIsOpenLeftMenu}
        />
      </div>
      {/* <div className={styles.boxLayoutContent}> */}
      <AntLayout className={styles.container2}>
        <div className={styles.siderLayout}>
          {isOpenLeftMenu && (
            <Sider
              theme="light"
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
              // className={styles.siderLayout}
            >
              <LeftMenu leftMenuItems={props?.leftMenuItems} />
            </Sider>
          )}
        </div>

        <AntLayout className={styles.antLayoutContainContent}>
          <div>
            <Content className={styles.content}>
              <div
                className={styles.contentSpace}
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
          </div>
        </AntLayout>
      </AntLayout>
      {/* </div> */}
      {/* </div> */}
    </AntLayout>
  );
};

export default MainLayout;
