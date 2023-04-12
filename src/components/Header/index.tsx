import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to="/drag">Drag</Link>
          </li>
          <li>DnD</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  border-bottom: 1px solid #bdbdbd;
  > nav {
    width: 960px;
    margin: 0 auto;
    padding: 20px 0;
    > ul {
      display: flex;
      > li {
        margin-right: 16px;
      }
    }
  }
`;

export default Header;
