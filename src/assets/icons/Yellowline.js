import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Yellowline(props) {
  if (props.focused) {
    return (
      <Svg
        width={35}
        height={2}
        viewBox="0 0 35 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path stroke="#F7D703" strokeWidth={2} d="M0 1L35 1" />
      </Svg>
    );
  } else {
    return (
      <Svg
        width={35}
        height={2}
        viewBox="0 0 35 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path stroke="#fff" strokeWidth={2} d="M0 1L35 1" />
      </Svg>
    );
  }
}
