import styled from "styled-components";

export const LoginDiv = styled.div`
  background-color: #0d039c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  /* small scrren */
  @media (max-width: 320px) {
    .img-div {
      display: none;
    }
    .inner-container {
      background-color: red;
      padding: 10px;
      margin-top: 20px;
    }
  }

  /* ipad pro  */
  @media (max-width: 1024px) {
    .img-div {
      display: flex;

      img {
        width: 320px;
      }
    }
    .inner-container {
      padding: 10px;
      margin-top: 20px;
    }
  }

  /* surface duo screen */
  @media (max-width: 540px) {
    .img-div {
      display: none;

      img {
        /* width:320px; */
      }
    }
    .inner-container {
      padding: 10px;
      margin-top: 20px;
    }
  }

  /* Laptop screen */
  .inner-container {
    background-color: #fff;
    border-radius: 10px;
  }
  .main-container {
    h2 {
      font-size: 34px;
      line-height: 31px;
      color: #114ebb;
    }
    p {
      color: #114ebb;
    }
  }

  .form-div {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 40px;

      ::placeholder {
        color: #114ebb;
        opacity: 1;
        padding-left: 25px;
      }
      :focus {
        border-style: none;
        border-color: none;
      }
    }
    .form-group {
      p {
        display: flex;
        color: #114ebb;
        justify-content: flex-end;
        font-weight: 600;
        font-size: 12px;
      }
    }
    button {
      background: #e61f01;
      border: none;
      margin-top: 40px;
    }
    .sign-up {
      display: flex;
      margin-top: 30px;
      font-weight: 600;
      font-size: 12px;
      color: #114ebb;
    }
    span {
      color: #e61f01;
    }
  }
`;
