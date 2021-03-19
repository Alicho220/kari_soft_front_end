import styled from "styled-components";

export const VerificationDiv = styled.div`
  background-color: #0d039c;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 400px) {
    .left-side-div {
      display: none;
    }
  }

  .main-content {
    background-color: #fff;
  }
  .left-side-div {
    img {
      width: 500px;
    }
  }

  .right-side-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    h3 {
      text-align: start;
      color: #114ebb;
      font-size: 27px;
      line-height: 40px;
      margin-bottom: 40px;
    }
    button {
      margin-bottom: 20px;
      background: #e61f01;
    }
   
    span {
      color: #e61f01;
    }
  }

  .otp-div{
        p {
      text-align: start;
      color: #114ebb;
      font-weight: bold;
    }
    }
`;
