import { css } from "@emotion/css";
import React from "react";

export const mainLayoutsStyles = {
  container: css`
    padding: 0px;
  `,

  siderLayout: css`
    &.ant-layout,
    .ant-layout-sider-light,
    .ant-layout-sider-trigger {
      background: #f5f5f5 !important;
    }
    overflow: auto;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  `,

  contentBody: css`
    height: 100vh;
    overflow-y: hidden;
    padding-bottom: 20px;
  `,

  contentBackImage: css`
    background-image: url(https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png),
      url(https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png),
      url(https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png);
    background-repeat: repeat;
    background-position: center bottom;
    background-size: 500px 150px;
  `,

  boxLayoutContent: css`
    position: fixed;
    top: 46px;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  `,

  antLayoutContainContent: css`
    width: 100%;
    height: 100vh;
    overflow: hidden;
  `,

  contentFC: css``,

  footerFC: css`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    bottom: 0;
    height: 0;
  `,
};
