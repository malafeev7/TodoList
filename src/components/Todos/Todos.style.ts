import styled, { css } from 'styled-components';
import colors from 'global_styling/colors';

const rotateAnimation = css`
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: rotate(-180deg);
  }
`;

const BoxTodos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    min-width: 18rem;
    width: 50vw;
    max-width: 20rem;
    background-color: ${colors.PALE_BLUE};
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    :focus {
      outline: none;
      border: 2px solid ${colors.NAVY_BLUE};
    }
  }
`;

const AddButton = styled.button`
  margin-left: 1rem;
  background-color: ${colors.DEEP_SKY_BLUE};
  color: ${colors.PALE_BLUE};
  border-radius: 50%;
  border: 2px solid ${colors.PALE_BLUE};
  font-size: 1.5rem;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  box-shadow: 2px 4px 10px ${colors.TEAL_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;

  ${rotateAnimation}
`;

export { BoxTodos, AddButton };
