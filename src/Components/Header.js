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
`;

const Item = styled.li`
  width: 25%;
  text-align: center;
`;

const SLink = styled(Link)`
  font-weight: 700;
  border-radius: 1.5vw;
  padding: 1.2vh 3vw;
  box-shadow: ${(props) =>
    props.current ? "0 0.5vh 0.8vh rgb(173, 216, 230)" : "transparent"};
  transition: box-shadow ease-in-out 0.2s;
  font-size: ${(props) => (props.current ? "3.2vw" : "3vw")};
  &:hover {
    font-size: 3.2vw;
  }
  cursor: ${(props) => (props.current ? "default" : "pointer")};
  pointer-events: ${(props) => (props.current ? "none" : "default")};
`;

function Header({ location: { pathname } }) {
  return (
    <Head>
      <List>
        <Item>
          <SLink to="/" current={pathname === "/"}>
            Home
          </SLink>
        </Item>
        <Item>
          <SLink to="/tvshows" current={pathname === "/tvshows"}>
            TV Shows
          </SLink>
        </Item>
        <Item>
          <SLink to="/movies" current={pathname === "/movies"}>
            Movies
          </SLink>
        </Item>
        <Item>
          <SLink to="/search" current={pathname === "/search"}>
            Search
          </SLink>
        </Item>
      </List>
    </Head>
  );
}

export default withRouter(Header);
/* Header needs aid of withRouter to get pathname, because in App.js, Header is not contained in <Route /> */
