import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function ProductCardlogo(props) {
  return (
    <Svg
      width={56}
      height={64}
      viewBox="0 0 56 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_i_1260_804)">
        <Path
          d="M28 0L0 16.007v31.986L28 64l28-16.007V16.007L28 0zm23.935 44.55L41.709 12.458l10.254 5.862v26.23h-.027zm-35.97-23.076H17.8l5.844 28.964v.079h4.702l-1.647 8.095L7.252 47.494l8.714-26.02zm22.475.026h1.913l8.315 26.073-17.586 10.04L38.44 21.5zM36.501 9.488l2.55 7.99h-3.958l-5.924 29.044H26.99L19.526 9.488l8.5-4.836 8.475 4.836zm-20.695 2.103l1.196 5.887h-3.958l-8.98 26.888V18.32l11.742-6.729z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
