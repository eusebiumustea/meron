import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function Homeicon(props) {
  if (props.focused) {
    return (
      <View>
        <Svg
          width={35}
          height={32}
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M14 0L0 8.003v15.994L14 32l14-8.003V8.003L14 0zm11.968 22.275L20.854 6.23l5.127 2.93v13.116h-.013zM7.983 10.737h.916l2.923 14.482v.04h2.35l-.823 4.047-9.723-5.559 4.357-13.01zm11.237.013h.957l4.157 13.036-8.793 5.02 3.68-18.056zm-.97-6.006l1.276 3.995H17.547l-2.963 14.522h-1.089L9.763 4.744l4.25-2.418 4.237 2.418zM7.903 5.795l.598 2.944H6.52L2.033 22.183V9.16l5.871-3.365z"
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
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M14 0L0 8.003v15.994L14 32l14-8.003V8.003L14 0zm11.968 22.275L20.854 6.23l5.127 2.93v13.116h-.013zM7.983 10.737h.916l2.923 14.482v.04h2.35l-.823 4.047-9.723-5.559 4.357-13.01zm11.237.013h.957l4.157 13.036-8.793 5.02 3.68-18.056zm-.97-6.006l1.276 3.995H17.547l-2.963 14.522h-1.089L9.763 4.744l4.25-2.418 4.237 2.418zM7.903 5.795l.598 2.944H6.52L2.033 22.183V9.16l5.871-3.365z"
            fill="#202020"
          />
        </Svg>
      </View>
    );
  }
}

// import * as React from 'react';
// import Svg, {Path} from 'react-native-svg';

// export default function Homeicon(props) {
//     return (
//         <Svg
//           width={35}
//           height={32}
//           viewBox="0 0 28 32"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           {...props}>
//           <Path
//             d="M14 0L0 8.003v15.994L14 32l14-8.003V8.003L14 0zm11.968 22.275L20.854 6.23l5.127 2.93v13.116h-.013zM7.983 10.737h.916l2.923 14.482v.04h2.35l-.823 4.047-9.723-5.559 4.357-13.01zm11.237.013h.957l4.157 13.036-8.793 5.02 3.68-18.056zm-.97-6.006l1.276 3.995H17.547l-2.963 14.522h-1.089L9.763 4.744l4.25-2.418 4.237 2.418zM7.903 5.795l.598 2.944H6.52L2.033 22.183V9.16l5.871-3.365z"
//             fill="#202020"
//           />
//         </Svg>
//     );
//   }
