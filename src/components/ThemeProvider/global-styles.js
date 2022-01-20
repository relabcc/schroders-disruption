import { createGlobalStyle } from 'styled-components';
import { mediaStyle } from './theme';

export default createGlobalStyle`
  ${mediaStyle}
  .VictoryContainer {
    user-select: auto !important;
    pointer-events: auto !important;
    touch-action: auto !important;
  }
`;
