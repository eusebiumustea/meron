import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

export default function DirectionSign(props) {
  return (
    <Svg
      width={31}
      height={31}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={2.12109}
        y={15.1784}
        width={18.6323}
        height={18.6323}
        rx={1}
        transform="rotate(-45 2.121 15.178)"
        fill="#000"
      />
      <Path
        d="M18.53 12.236H13.18c-2.14 0-3.362 1.304-3.28 3.324v3.969h1.929v-3.97c0-1.103.9-1.36 1.351-1.35h5.348v1.35l2.823-2.287-2.823-2.444v1.408z"
        fill="#F7D703"
      />
    </Svg>
  );
}
