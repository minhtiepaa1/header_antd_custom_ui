import { css } from "@emotion/css";

export const topMenuStyles = {
  container: css`
    display: flex;
    justify-content: space-between;
    margin: 10px;
  `,

  logOutBnt: css``,

  boxLeft: css`
    display: flex;
    width: 191px;
    justify-content: space-between;
  `,

  boxRight: css``,

  popoverStyle: css`
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background-color: #e083d1;
    }
  `,

  popoverBox: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
  `,
};
