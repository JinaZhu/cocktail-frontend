import styled from "styled-components";
import { Nav } from "reactstrap";

export const StyleLink = styled.a`
  color: #ffffff;
  padding: 0 15px;

  &:hover {
    color: #c7cdcf;
    ${"" /* font-style: italic;   */}
    text-decoration: none;
  }
`;

export const NavWapper = styled(Nav)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;
