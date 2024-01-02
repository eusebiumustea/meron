import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Rectangle(props) {
  return (
    <Svg
      width="100%"
      translateY={-79}
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M0 0l88 31.5L375 0v875H0V0z" fill="#fff" />
    </Svg>
  );
}
