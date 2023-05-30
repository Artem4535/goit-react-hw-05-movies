import { Outlet } from 'react-router-dom';
import { Header, List, NavigationLink } from '../style/Layout.styled';
import { Continer } from '../style/Container.styled';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <Continer>
      <Header>
        <List>
          <li>
            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <NavigationLink to="/movies">Movies</NavigationLink>
          </li>
        </List>
      </Header>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </Continer>
  );
}
