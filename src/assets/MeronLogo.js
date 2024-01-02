import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function MeronLogo(props) {
  return (
    <Svg
      width={33}
      height={38}
      viewBox="0 0 33 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.77.273L.538 9.64v18.72l16.23 9.367L33 28.36V9.64L16.77.273zm13.873 26.072L24.715 7.564l5.944 3.43v15.35h-.016zM9.793 12.84h1.063l3.388 16.95v.046h2.725l-.954 4.738-11.272-6.506 5.05-15.228zm13.028.015h1.109l4.82 15.259-10.195 5.875 4.266-21.134zm-1.124-7.03l1.478 4.677h-2.294l-3.434 16.996h-1.263L11.857 5.826l4.928-2.83 4.912 2.83zM9.7 7.057l.693 3.446H8.1L2.895 26.237V10.994L9.7 7.056z"
        fill="#110D12"
      />
    </Svg>
  );
}
