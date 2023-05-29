import styled, { css } from 'styled-components';
import colors from 'global_styling/colors';

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: ${colors.PALE_BLUE};
  background: radial-gradient(circle, ${colors.PALE_BLUE} 0%, ${colors.PALE_BLUE} 100%);
  margin: 0 1rem 1rem 0;
  max-height: 14rem;
  max-width: 18rem;
  border-radius: 0.5rem;
  padding: 1rem;
  textarea {
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    background-color: ${colors.DENIM_BLUE};
    color: ${colors.PALE_BLUE};
    max-height: 10rem;
    max-width: 16rem;
    min-width: 14rem;
    min-height: 6rem;
  }
`;

const buttonStyles = css`
  padding: 0.5rem 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${colors.DEEP_SKY_BLUE};
  background-color: ${colors.PALE_BLUE};
  transition-delay: 0.1s;

  &:hover {
    color: ${colors.PALE_BLUE};
    border: 2px solid ${colors.PALE_BLUE};
  }
`;

const BoxButtons = styled.div`
  display: flex;
  gap: 10px;
  button {
    ${buttonStyles}
    &:hover {
      background-color: ${colors.DEEP_SKY_BLUE};
    }
  }
  .delete:hover {
    background-color: ${colors.CRIMSON};
  }
  .complete:hover {
    background-color: ${colors.SPRING_GREEN};
  }
`;

export { Card, BoxButtons };
