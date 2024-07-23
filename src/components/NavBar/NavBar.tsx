import { Link } from "react-router-dom"
import { Header, NavList } from "./NavBar.styles.";

export const NavBar = () => {
    return (
          <Header>
            <NavList>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </NavList>
          </Header>
      );
}
