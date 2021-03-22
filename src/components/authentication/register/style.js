import styled from "styled-components";

export const RegisterDiv = styled.div`
  background-color: #0d039c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  /* small scrren */
  @media (max-width: 370px) {
    .img-div {
      display: none;
    }

    .main-container {
        min-height:70vh;

      .h3 {
        font-size: 14px;
        font-weight: bold;
        color: #114ebb;
      }
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
    h3 {
      font-size: 25px;
      font-weight: bold;
      color: #114ebb;
      padding-top: 10px;
    }
    p {
      color: #114ebb;
    }
  }

  .form-div {
    display: flex;
    flex-direction: column;
    input {
      margin-top: 20px;

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
        justify-content: start;
        font-weight: 600;
        font-size: 12px;
      }
    }
    button {
      background: #e61f01;
      border: none;
    }
    .sign-up {
      display: flex;
      margin-top: 20px;
      font-weight: 600;
      font-size: 12px;
      color: #114ebb;
    }
    span {
      color: #e61f01;
    }
  }
`;
