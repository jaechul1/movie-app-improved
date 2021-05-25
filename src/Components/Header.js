import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(4vw + 6vh);
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0.5vh;
`;

const Item = styled.li`
  width: 25%;
  text-align: center;
`;

const SLink = styled(Link)`
  font-weight: 400;
  border-radius: 1.5vw;
  padding: 1.5vh 3vw;
  box-shadow: ${(props) =>
    props.current ? "0 0.5vh 0.8vh rgb(173, 216, 230)" : "transparent"};
  transition: box-shadow ease-in-out 0.2s;
  font-size: 3vw;
  cursor: ${(props) => (props.current ? "default" : "pointer")};
  pointer-events: ${(props) => (props.current ? "none" : "default")};
`;

function Header({ location: { pathname } }) {
  return (
    <Head>
      <List>
        <Item>
          <SLink
            className="Header"
            to="/"
            current={pathname === "/" ? "Yes" : null}
          >
            Trending
          </SLink>
        </Item>
        <Item>
          <SLink
            className="Header"
            to="/tvshows"
            current={pathname === "/tvshows" ? "Yes" : null}
          >
            TV Shows
          </SLink>
        </Item>
        <Item>
          <SLink
            className="Header"
            to="/movies"
            current={pathname === "/movies" ? "Yes" : null}
          >
            Movies
          </SLink>
        </Item>
        <Item>
          <SLink
            className="Header"
            to="/search"
            current={pathname === "/search" ? "Yes" : null}
          >
            Search
          </SLink>
        </Item>
      </List>
    </Head>
  );
}

export default withRouter(Header);
/* Header needs aid of withRouter to get pathname, because in App.js, Header is not contained in <Route /> */
