import styled from "styled-components";

export const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0d039c;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 320px) {
    h2 {
      font-weight: 500;
      font-size: 30px;
    }
    .dp {
      width: 100px;
      background: none;
    }
    .image-div {
      display: none;
    }
  }

  .inner-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .dp {
    background-color: #0d039c;
    width: 250px;
    border: none;
    a {
      :hover {
        background: none;
      }
      color: #fff;
    }
    hr {
      color: #fff;
    }
  }

  .image-div {
    img {
      width: 450px;
    }
  }
`;
