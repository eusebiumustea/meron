import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

export default function BlackBackIcon(props) {
  return (
    <Svg
      width={13}
      height={21}
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        width={15}
        height={3}
        rx={1.5}
        transform="matrix(.71812 -.69592 .71812 .69592 0 10.439)"
        fill="#202020"
      />
      <Rect
        width={15}
        height={3}
        rx={1.5}
        transform="scale(1.01558 .98418) rotate(45 -9.29 6.848)"
        fill="#202020"
      />
    </Svg>
  );
}
