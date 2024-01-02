import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import react from 'react';
export default function HorizontalLine(props) {
  return (
    <Svg
      width={359}
      height={3}
      viewBox="0 10 359 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        stroke="url(#paint0_linear_2498_5)"
        d="M179.502 1.99998L0.0000152588 1.99998"
      />
      <Path
        transform="rotate(-.324 541.289 -32219.22) skewX(-.04)"
        stroke="url(#paint1_linear_2498_5)"
        d="M0 -0.5L179.503 -0.5"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2498_5"
          x1={89.7512}
          y1={1.49987}
          x2={3.76205}
          y2={1.49984}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2498_5"
          x1={89.7514}
          y1={0.000114176}
          x2={175.741}
          y2={0.000145646}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
