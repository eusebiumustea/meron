import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
export default function Mapicon(props) {
  if (props.focused) {
    return (
      <View>
        <Svg
          width={35}
          height={32}
          viewBox="0 0 19 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M18.6683 9.33304C18.6683 4.17872 14.4872 0.00012207 9.33417 0.00012207C4.18112 0.00012207 0 4.17872 0 9.33304C0 14.4874 9.33417 28.0001 9.33417 28.0001C9.33417 28.0001 18.6683 14.4874 18.6683 9.33304ZM4.66709 9.33304C4.66709 6.75336 6.75827 4.66595 9.33417 4.66595C11.9101 4.66595 14.0013 6.75336 14.0013 9.33304C14.0013 11.9127 11.9101 14.0001 9.33417 14.0001C6.75827 14.0001 4.66709 11.9127 4.66709 9.33304Z"
            fill="#202020"
          />
        </Svg>
        <Svg
          style={{top: 6}}
          width={35}
          height={2}
          viewBox="0 0 35 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path stroke="#F7D703" strokeWidth={2} d="M0 1L35 1" />
        </Svg>
      </View>
    );
  } else {
    return (
      <View>
        <Svg
          width={35}
          height={32}
          viewBox="0 0 19 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M18.668 9.333C18.668 4.179 14.488 0 9.334 0 4.181 0 0 4.18 0 9.333S9.334 28 9.334 28s9.334-13.513 9.334-18.667zm-14 0a4.667 4.667 0 119.333 0 4.667 4.667 0 01-9.334 0z"
            fill="#202020"
          />
        </Svg>
      </View>
    );
  }
}

// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';
// export default function Mapicon(props) {
//   return (
//     <Svg
//       width={19}
//       height={28}
//       viewBox="0 0 19 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <Path
//         d="M18.668 9.333C18.668 4.179 14.488 0 9.334 0 4.181 0 0 4.18 0 9.333S9.334 28 9.334 28s9.334-13.513 9.334-18.667zm-14 0a4.667 4.667 0 119.333 0 4.667 4.667 0 01-9.334 0z"
//         fill="#202020"
//       />
//     </Svg>
//   );
// }
