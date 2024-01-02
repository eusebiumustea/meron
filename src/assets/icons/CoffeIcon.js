import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Coffe(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 47.7c-7.6 0-13.7-5-13.7-11.1V26.3h27.4v10.3c0 6.1-6.1 11.1-13.7 11.1zm-12.3-20v8.9c0 5.3 5.5 9.7 12.3 9.7 6.8 0 12.3-4.3 12.3-9.7v-8.9H9.7z"
        fill="#202020"
      />
      <Path
        d="M35 37.7h-.7V26.3h10.6l-.2.8c-.1.5-2.2 10.6-9.7 10.6zm.7-10v8.5c4.7-.5 6.8-6.3 7.4-8.5h-7.4zM22 43.7c-5.2 0-9.5-3.4-9.7-7.7v-.7l1.4-.1v.7c.2 3.5 3.9 6.3 8.3 6.3s8-2.7 8.3-6.2l.1-.7 1.4.1-.1.7c-.3 4.3-4.6 7.6-9.7 7.6zM17.7 24h-1.4v-.7c0-1.5 1.3-2.2 2.4-2.7 1-.5 1.6-.8 1.6-1.4 0-.6-.6-.9-1.7-1.5-1-.5-2.3-1.2-2.3-2.6 0-1.5 1.3-2.2 2.4-2.7 1-.5 1.6-.8 1.6-1.4v-.7h1.4v.7c0 1.4-1.3 2.1-2.3 2.6-1 .5-1.7.9-1.7 1.5 0 .5.6.9 1.6 1.4 1.1.6 2.4 1.2 2.4 2.7 0 1.5-1.3 2.2-2.4 2.7-1 .5-1.6.8-1.6 1.4v.7zM25.2 24h-1.4v-.7c0-1.5 1.3-2.2 2.4-2.7 1-.5 1.6-.8 1.6-1.4 0-.6-.6-.9-1.7-1.5-1-.5-2.3-1.2-2.3-2.6 0-1.5 1.3-2.2 2.4-2.7 1-.5 1.6-.8 1.6-1.4v-.7h1.4v.7c0 1.4-1.3 2.1-2.3 2.6-1 .5-1.7.9-1.7 1.5 0 .5.6.9 1.6 1.4 1.1.6 2.4 1.2 2.4 2.7 0 1.5-1.3 2.2-2.4 2.7-1 .5-1.6.8-1.6 1.4v.7z"
        fill="#202020"
      />
    </Svg>
  );
}
