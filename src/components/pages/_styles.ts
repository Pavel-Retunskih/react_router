import styled from "styled-components";
const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;
  & > a {
    text-decoration: none;
    color: #282c34;
  }
  & > a.active {
    text-decoration: dotted;
    color: #70fb70;
  }
  & > a:hover {
    text-decoration: none;
    color: #1fa21f;
  }
`;

export const S = {
  NavWrapper,
};
