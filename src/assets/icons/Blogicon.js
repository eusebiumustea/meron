import * as React from 'react';
import {View} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';

export default function Blogicon(props) {
  if (props.focused) {
    return (
      <View>
        <Svg
          width={35}
          height={32}
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Rect
            x={0.668457}
            y={0.00012207}
            width={2.61685}
            height={26.1685}
            rx={1.30843}
            fill="#202020"
          />
          <Rect
            x={20.731}
            y={0.00012207}
            width={2.61685}
            height={8.72284}
            rx={1.30843}
            fill="#202020"
          />
          <Rect
            x={26.2166}
            y={7.85068}
            width={2.61685}
            height={21.6204}
            rx={1.30843}
            transform="rotate(35.442 26.217 7.85)"
            fill="#202020"
          />
          <Rect
            x={0.668457}
            y={2.61697}
            width={2.61685}
            height={22.6794}
            rx={1.30843}
            transform="rotate(-90 .668 2.617)"
            fill="#202020"
          />
          <Rect
            x={0.668457}
            y={26.1686}
            width={2.61685}
            height={10.4674}
            rx={1.30843}
            transform="rotate(-90 .668 26.169)"
            fill="#202020"
          />
          <Path
            d="M12.92 27.95c-.324-.398 1.467-3.526 1.467-3.526l1.91 1.782s-3.054 2.143-3.378 1.745z"
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
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Rect
            x={0.668457}
            y={0.00012207}
            width={2.61685}
            height={26.1685}
            rx={1.30843}
            fill="#202020"
          />
          <Rect
            x={20.731}
            y={0.00012207}
            width={2.61685}
            height={8.72284}
            rx={1.30843}
            fill="#202020"
          />
          <Rect
            x={26.2166}
            y={7.85068}
            width={2.61685}
            height={21.6204}
            rx={1.30843}
            transform="rotate(35.442 26.217 7.85)"
            fill="#202020"
          />
          <Rect
            x={0.668457}
            y={2.61697}
            width={2.61685}
            height={22.6794}
            rx={1.30843}
            transform="rotate(-90 .668 2.617)"
            fill="#202020"
          />
          <Rect
            x={0.668457}
            y={26.1686}
            width={2.61685}
            height={10.4674}
            rx={1.30843}
            transform="rotate(-90 .668 26.169)"
            fill="#202020"
          />
          <Path
            d="M12.92 27.95c-.324-.398 1.467-3.526 1.467-3.526l1.91 1.782s-3.054 2.143-3.378 1.745z"
            fill="#202020"
          />
        </Svg>
      </View>
    );
  }
}

// import * as React from 'react';
// import Svg, {Rect, Path} from 'react-native-svg';

// export default function Blogicon(props) {
//   return (
//     <Svg
//       width={29}
//       height={28}
//       viewBox="0 0 29 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <Rect
//         x={0.668457}
//         y={0.00012207}
//         width={2.61685}
//         height={26.1685}
//         rx={1.30843}
//         fill="#202020"
//       />
//       <Rect
//         x={20.731}
//         y={0.00012207}
//         width={2.61685}
//         height={8.72284}
//         rx={1.30843}
//         fill="#202020"
//       />
//       <Rect
//         x={26.2166}
//         y={7.85068}
//         width={2.61685}
//         height={21.6204}
//         rx={1.30843}
//         transform="rotate(35.442 26.217 7.85)"
//         fill="#202020"
//       />
//       <Rect
//         x={0.668457}
//         y={2.61697}
//         width={2.61685}
//         height={22.6794}
//         rx={1.30843}
//         transform="rotate(-90 .668 2.617)"
//         fill="#202020"
//       />
//       <Rect
//         x={0.668457}
//         y={26.1686}
//         width={2.61685}
//         height={10.4674}
//         rx={1.30843}
//         transform="rotate(-90 .668 26.169)"
//         fill="#202020"
//       />
//       <Path
//         d="M12.92 27.95c-.324-.398 1.467-3.526 1.467-3.526l1.91 1.782s-3.054 2.143-3.378 1.745z"
//         fill="#202020"
//       />
//     </Svg>
//   );
// }
