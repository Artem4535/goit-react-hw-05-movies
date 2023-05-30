import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  width: 100%;
  background: papayawhip;
  padding: 15px 10px;
`;

const List = styled.ul`
  display: flex;
  gap: 10px;

  list-style: none;
`;
const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  &.active {
    background-color: orange;
  }
`;

export { Header, List, NavigationLink };
