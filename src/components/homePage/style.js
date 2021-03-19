import styled from "styled-components";

export const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0d039c;
  min-height: 100vh;

  /* mobile responsiveness */
  @media (max-width: 414px) {
    .left-side {
      margin-top: 30px;
      button {
        margin-top: 20px;
      }
    }
    .right-side {
      display: none;
      background-color: green;
      img {
        width: 10px;
      }
    }
  }

  @media (max-width: 540px) {
    .left-side {
      margin-top: 40px;
    }
    .right-side {
      margin-right: 50px;
    }
  }

  .inner-container {
    display: flex;
    align-items: center;
  }
  .left-side {
    text-align: start;
    color: #fff;
    padding-top: 50px;
    button {
      margin-right: 30px;
      background-color: #0d039c;
      border-color: #e61f01;
      :hover {
        background: #e61f01;
      }
    }
  }

  .right-side {
    img {
      width: 600px;
    }
  }
`;
