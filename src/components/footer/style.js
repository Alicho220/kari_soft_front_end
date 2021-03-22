import styled from "styled-components";

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 420px) {
    display: none;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .icons {
      svg {
        display: flex;
      }
    }
  }

  .inner-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .right-side {
    display: flex;
    flex-direction: row;
    p {
      margin-right: 40px;
      font-size: 13px;
      font-weight: bold;
    }
  }

  .icons {
    svg {
      font-size: 25px;
      margin-right: 30px;
    }
  }
`;
