import styled from "styled-components";

export const Button = styled.button`
  font-family: "Akaya Kanadaka", cursive;
  font-size: 24px;
  background: transparent;
  border: none;
  color: ${({ Active }) => (Active ? "#e1b12c" : "#dcdde1")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px 10px #192a56;

  &:hover {
    color: ${({ Active }) => (Active ? "#fbc531" : "#f5f6fa")};
  }

  &:disabled {
    color: ${({ Active }) => (Active ? "#4cd137" : "#e84118")};
  }
`;

export const Button2 = styled.button`
  font-family: "Akaya Kanadaka", cursive;
  border-radius: 50px;
  background: #e84118;
  white-space: nowrap;
  padding: 12px 30px;
  color: #dcdde1;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  float: right;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c23616;
  }
  &:disabled {
    background-color: #2f3640;
  }
`;

export const Navbar = styled.nav`
  background: #273c75;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  width: 100%;
  font-size: 1rem;
  position: sticky;
  top: 0;
`;

export const SortingAlgorithms = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
`;

export const ArrayContainer = styled.div`
  width: 90%;
  position: absolute;
  padding: 0 5%;
  padding-bottom: 10px;
  top: 80px;
  height: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`;

export const Bar = styled.div`
  display: block;
  margin-top: auto;
  color: #dcdde1;
  text-align: center;
`;

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RangeLabel = styled.label`
  margin: auto;
  color: #dcdde1;
`;
