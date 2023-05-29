import styled, { keyframes, css } from 'styled-components';
import colors from 'global_styling/colors';

const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  h1,
  h2 {
    display: inline;
    text-align: center;
    margin-bottom: 2rem;
    color: ${colors.PALE_BLUE};

    text-shadow: 0 0 5px ${colors.NAVY_BLUE}, 3px -1px 5px ${colors.NAVY_BLUE};
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

interface AnimationProps {
  fadeOut: boolean;
}

const Animation = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'fadeOut',
})<AnimationProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: linear-gradient(190deg, ${colors.NAVY_BLUE} 0%, ${colors.DENIM_BLUE} 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: ${colors.PALE_BLUE};
  font-size: 3rem;
  z-index: 10;
  animation: ${(props) =>
    props.fadeOut
      ? css`
          ${fadeOut} 1s ease-in-out forwards
        `
      : 'none'};
`;

export { Container, Animation };
