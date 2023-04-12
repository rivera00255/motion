import styled from 'styled-components';

const Main = () => {
  return (
    <StyledMain>
      <section>
        <h2>Drag & Drop Event</h2>
      </section>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  > section {
    width: 960px;
    margin: 0 auto;
    padding: 40px 0;
  }
`;

export default Main;
