import React, { useState } from "react";
import { mainLayoutsStyles as styles } from "../../styles/layouts/layout/styles";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout as AntLayout, Menu, theme } from "antd";
import { DataLeftMenuItems } from "../../RootRouter";
import Routes from "../../components/layouts/layout/routes";
import LeftMenu from "../left_menu";
import { css } from "@emotion/css";

const { Header, Content, Footer, Sider } = AntLayout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

interface DataProps {
  leftMenuItems?: DataLeftMenuItems[];
}

const MainLayout: React.FC<DataProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
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
      <div style={{ position: "fixed", width: "100%", zIndex: 10 }}>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        ></Menu>
      </div>
      <div className={styles.boxLayoutContent}>
        <AntLayout style={{}}>
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={styles.siderLayout}
          >
            <LeftMenu leftMenuItems={props?.leftMenuItems} />
          </Sider>

          {/* <AntLayout className={styles.antLayoutContainContent}> */}
          <Content className={styles.contentFC}>
            <div
              className={styles.contentBody}
              style={{
                background: colorBgContainer,
              }}
            >
              <Routes leftMenuItems={props?.leftMenuItems} />
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
