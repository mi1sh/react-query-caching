import { NavLink } from 'react-router-dom';
import {Header, NavList, Title} from './NavBar.styles.';

export const NavBar = () => {
    return (
          <Header>
              <Title>Leanne Graham Page</Title>
            <NavList>
              <li>
                <NavLink className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                } to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                } to="/todos">Todos</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                } to="/posts">Posts</NavLink>
              </li>
            </NavList>
          </Header>
      );
}
