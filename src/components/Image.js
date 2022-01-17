import styled from 'styled-components';
import { space, layout, opacity } from 'styled-system';

import { cleanConfig } from './utils/blacklist';

const Image = styled.img.withConfig(cleanConfig)`
  ${space}
  ${layout}
  ${opacity}
`;

Image.defaultProps = {
  width: 1,
};

Image.displayName = 'Image';

export default Image;
