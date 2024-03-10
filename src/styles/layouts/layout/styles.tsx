import { css } from "@emotion/css";
import React from "react";

export const mainLayoutsStyles = {
  container: css`
    height: 100vh;
    overflow: auto;
  `,

  container2: css`
    margin-top: 10px;
    overflow: auto;
  `,

  siderLayout: css`
    &.ant-layout,
    .ant-layout-sider-light,
    .ant-layout-sider-trigger {
      background: #f5f5f5 !important;
    }
    overflow: auto;
    position: sticky;
    top: 0px;
  `,

  contentSpace: css`
    overflow: hidden;
    padding: 20px;
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
    top: 52px;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  `,

  antLayoutContainContent: css`
    width: 100%;
    height: 100vh;
    overflow: hidden;
  `,

  content: css`
    overflow: auto;
  `,

  footer: css`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    bottom: 0;
    height: 0;
  `,

  topMenuSpace: css`
    position: sticky;
    top: 10px;

    background-color: #b0e76f;
    max-height: 52px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  `,
};
