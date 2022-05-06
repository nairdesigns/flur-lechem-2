import styled from "styled-components";

export const MenuContainer = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: darkorange;
  padding: 50px 0;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }

  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const MenuWrapper = styled.div`
  max-width: 100vh;
  margin: 0 auto;
  ${"" /* grid-template-columns: 1fr 1fr 1fr; */}
  ${"" /* align-items: center; */}
  ${"" /* grid-gap: 16px; */}
  padding: 20px 40px;

  @media screen and (max-width: 1000px) {
    ${"" /* grid-template-columns: 1fr 1fr; */}
    padding: 20px 50px;
  }

  @media screen and (max-width: 768px) {
    ${"" /* grid-template-columns: 1fr; */}
    //padding: 0 20px;
    padding: 20px 50px;
  }
`;

export const MenuCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  ${"" /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */}
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const MenuIcon = styled.img`
  height: 300px;
  width: 300px;
  padding: 20px;
  background: white;
`;

export const MenuH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MenuH2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 900;
`;

export const MenuP = styled.p`
  font-size: 1rem;
  text-align: center;
`;