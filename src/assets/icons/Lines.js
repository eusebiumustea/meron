import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop, Use} from 'react-native-svg';
export default function Lines(props) {
  return (
    <Svg
      width={360}
      height={410}
      style={{transform: [{translateY: -180}]}}
      viewBox="0 0 340 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        transform="rotate(89.721 -13.001 192.94) skewX(.039)"
        stroke="url(#paint0_linear_2469_6)"
        d="M0 -0.5L205.002 -0.5"
      />
      <Path stroke="url(#paint1_linear_2469_6)" d="M179.5 205.003L179.5 0" />
      <Path
        transform="matrix(1 0 -.0007 1 180 204.5)"
        stroke="url(#paint2_linear_2469_6)"
        d="M0 -0.5L179.503 -0.5"
      />
      <Path stroke="url(#paint3_linear_2469_6)" d="M180 205L0.497574 205" />
      <Defs>
        <LinearGradient
          id="paint0_linear_2469_6"
          x1={102.501}
          y1={0.000114176}
          x2={200.706}
          y2={0.000155222}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2469_6"
          x1={180}
          y1={102.501}
          x2={180}
          y2={4.29647}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_2469_6"
          x1={89.7514}
          y1={0.000114176}
          x2={175.741}
          y2={0.000145646}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_2469_6"
          x1={90.2488}
          y1={204.5}
          x2={4.2596}
          y2={204.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EBEBEB" />
          <Stop offset={1} stopColor="#EBEBEB" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
