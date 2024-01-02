import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function MeronTextLogo(props) {
  return (
    <Svg
      width={56}
      height={10}
      viewBox="0 0 56 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_i_1260_798)" fill="#fff">
        <Path d="M10.111 9.705h-2.02V4.022L5.056 7.048 2.01 4.022v5.683H0V.203h1.052l4.004 3.985L9.06.203h1.051v9.502zM14.152.203h6.061v2.02h-4.04V3.93h4.04v2.02h-4.04v1.735h4.04v2.02h-6.061V.203zM33.332 9.705H30.49l-2.223-2.223h-1.983v2.223h-2.021V.203h4.659a3.658 3.658 0 013.644 3.644c0 1.366-.784 2.565-1.91 3.183l2.676 2.675zm-2.786-5.867c0-.895-.73-1.624-1.624-1.624h-2.639v3.248h2.639a1.62 1.62 0 001.624-1.624zM44.661 4.954c0 2.75-2.02 4.954-4.53 4.954-2.49 0-4.53-2.205-4.53-4.954 0-2.75 2.04-4.954 4.53-4.954 2.51 0 4.53 2.205 4.53 4.954zm-6.938 0c0 1.67 1.07 3.054 2.4 3.054 1.346 0 2.416-1.384 2.416-3.054S41.47 1.9 40.122 1.9c-1.328-.009-2.398 1.375-2.398 3.054zM53.962.203H56v9.502h-1.623L49.92 4.022v5.683H47.9V.203h1.623l4.438 5.692V.203z" />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
