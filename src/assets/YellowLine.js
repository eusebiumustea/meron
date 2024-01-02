import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function YellowLine(props) {
  return (
    <Svg
      width={175}
      height={4}
      style={{top: 10}}
      viewBox="0 0 150 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path stroke="#F7D703" d="M0 0.603577L150 0.603577" />
    </Svg>
  );
}
