import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Searchicon(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.896 15.895l-4.938-4.939a6.695 6.695 0 001.5-4.227C13.458 3.02 10.44 0 6.73 0A6.737 6.737 0 000 6.73c0 3.71 3.019 6.728 6.73 6.728 1.6 0 3.07-.563 4.226-1.5l4.939 4.938a.354.354 0 00.5 0l.501-.5a.354.354 0 000-.501zM6.73 12.042a5.318 5.318 0 01-5.312-5.313 5.318 5.318 0 015.312-5.312 5.318 5.318 0 015.313 5.312 5.318 5.318 0 01-5.313 5.313z"
        fill="#6A6A6A"
      />
    </Svg>
  );
}
