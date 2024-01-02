import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function LocateIcon(props) {
  return (
    <Svg
      width={33}
      height={50}
      viewBox="0 0 33 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M33 16.498C33 7.386 25.609 0 16.5 0 7.39 0 0 7.386 0 16.498c0 9.111 16.5 32.997 16.5 32.997S33 25.61 33 16.498zm-24.75 0a8.25 8.25 0 018.25-8.25 8.25 8.25 0 018.25 8.25 8.25 8.25 0 01-8.25 8.25 8.25 8.25 0 01-8.25-8.25z"
        fill="#000"
      />
    </Svg>
  );
}
