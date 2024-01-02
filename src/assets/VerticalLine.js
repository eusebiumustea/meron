import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
import react from 'react';
export default function VerticalLine(props) {
  return (
    <Svg
      width={2}
      height={410}
      viewBox="0 0 2 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="rotate(89.721 -103.001 102.5) skewX(.039)"
        stroke="url(#paint0_linear_2501_6)"
        d="M0 -0.5L205.002 -0.5"
      />
      <Path stroke="url(#paint1_linear_2501_6)" d="M0.5 205.003L0.5 0" />
      <Defs>
        <LinearGradient
          id="paint0_linear_2501_6"
          x1={102.501}
          y1={0.000114176}
          x2={200.706}
          y2={0.000155222}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2501_6"
          x1={1.00011}
          y1={102.501}
          x2={1.00016}
          y2={4.29647}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
