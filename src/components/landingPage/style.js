import styled from "styled-components";

export const LandingPageDiv = styled.div`
  background-color: #0d039c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .button-div {
    button {
      margin: 30px;
      background-color: #0d039c;
      border-color: #e61f01;
      :hover {
        background: #e61f01;
      }
    }
    span {
      color: #eeeeee;
    }
  }

  @media (max-width: 400px) {
    .image-div {
      img {
        width: 250px;
      }
    }
  }
`;
