import styled, { css } from 'styled-components';
import colors from 'global_styling/colors';

const DisplayBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const buttonStyles = css`
  background-color: ${colors.PALE_BLUE};
  padding: 0.5rem 1.2rem;
  margin: 6px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${colors.DEEP_SKY_BLUE};

  &:hover,
  &.active {
    background-color: ${colors.DEEP_SKY_BLUE};
    color: ${colors.PALE_BLUE};
    border: 2px solid ${colors.PALE_BLUE};
  }
`;

const ButtonsBox = styled.div`
  margin-bottom: 4rem;
  button {
    ${buttonStyles}
  }
`;

const DisplayTodosList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const CatBox = styled.div`
  justify-content: center;
  text-align: center;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-size: 2.5rem;
  color: ${colors.PALE_BLUE};
  img {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem;
    margin-top: 40px;
    gap: 14px;
    img {
      width: 70%;
      height: 70%;
    }
  }
`;

export { DisplayBox, ButtonsBox, DisplayTodosList, CatBox };
