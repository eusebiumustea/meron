import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Menuicon(props) {
  return (
    <Svg
      width={29}
      height={37}
      viewBox="0 0 29 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.824 0h22.392v1.493H2.824V0zM1.495 2.82H0l.004-.143.011-.143.019-.143.025-.138.03-.135.039-.134.043-.131.051-.13.057-.125.063-.122.068-.118.074-.115.079-.11.082-.105.089-.103.093-.099.098-.092.102-.089.106-.084.11-.078.116-.074.118-.068L1.6.28l.125-.057.129-.05.132-.046L2.12.09l.135-.031.138-.025.143-.018.143-.011L2.822 0v1.493l-.07.002-.067.005-.065.01-.065.011-.065.015-.063.018-.06.02-.06.024-.059.027-.058.03-.055.031-.054.034-.053.038-.05.04-.05.042-.045.044-.044.045-.04.048-.042.052-.037.053-.034.053-.032.056-.03.057-.026.059-.024.06-.02.06-.019.063-.015.065-.012.065-.008.065-.005.068-.002.07.002-.003zM0 22.424V2.82h1.495v19.604H0zm0 11.754V22.424h1.495v11.754H0zm2.824 1.327v1.493l-.144-.004-.143-.01-.143-.019-.138-.025-.135-.03-.134-.038-.132-.045-.129-.051-.125-.057-.122-.063-.118-.067-.114-.074-.111-.078-.107-.084-.102-.089-.098-.092-.093-.099-.089-.103-.082-.106-.08-.11-.073-.114-.068-.118-.063-.123-.056-.124-.05-.13-.045-.132-.038-.133-.031-.137-.025-.138-.019-.143-.01-.143-.005-.143h1.495l.002.07.005.067.008.065.012.066.015.065.018.063.02.06.024.06.027.058.029.057.032.055.034.053.037.053.041.052.04.048.045.046.046.044.05.042.048.039.053.037.054.035.055.031.058.03.059.027.06.024.06.02.063.018.065.015.065.012.065.009.068.005.07.002zm22.392 1.493H2.824v-1.493h22.392v1.493zm1.329-2.82h1.495l-.004.143-.01.143-.02.143-.024.138-.031.137-.038.133-.045.132-.05.13-.056.124-.063.123-.069.118-.073.115-.08.11-.082.105-.088.103-.094.099-.098.092-.101.089-.108.085-.11.077-.115.074-.118.067-.121.063-.126.057-.128.05-.133.046-.133.037-.136.031-.138.025-.142.018-.144.011-.144.004v-1.493l.07-.002.067-.005.065-.01.066-.011.064-.015.063-.018.06-.02.06-.024.06-.027.057-.03.056-.031.054-.035.052-.037.05-.039.048-.042.047-.044.044-.046.04-.048.041-.052.037-.053.035-.053.032-.055.029-.057.027-.059.023-.058.02-.061.018-.063.015-.065.012-.066.008-.065.005-.068.002-.07zM28.04 2.82v31.358h-1.495V2.82h1.495zm-2.824-1.327V0l.144.004.144.01.142.019.138.025.136.03.133.038.133.045.128.051.125.057.122.062.118.068.116.074.11.078.107.084.101.089.098.092.094.099.088.103.083.106.079.11.073.114.069.118.063.122.056.125.051.13.044.131.038.134.03.135.026.138.018.143.011.143.004.143h-1.495l-.002-.07-.005-.067-.008-.065-.012-.065-.015-.065-.018-.063-.02-.06-.024-.06-.026-.06-.03-.056-.032-.056-.035-.053-.037-.053-.04-.052-.041-.048-.044-.045-.046-.044-.049-.042-.05-.04-.053-.038-.054-.034-.056-.031-.058-.03-.058-.027-.06-.024-.06-.02-.063-.018-.065-.015-.066-.012-.065-.009-.067-.005-.07-.002.002.002z"
        fill={props.focused ? '#202020' : '#6F6F6F'}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.295 8.02H9.768c-.441 0-.8.345-.8.77 0 .423.358.768.8.768h8.527c.442 0 .8-.345.8-.769 0-.425-.358-.768-.8-.768zM16.578 15.957H4.858c-.442 0-.799.344-.799.768 0 .425.357.77.8.77h11.719c.442 0 .8-.345.8-.77 0-.424-.358-.769-.8-.769zM23.129 15.957h-1.403c-.441 0-.8.344-.8.768 0 .425.358.77.8.77h1.403c.44 0 .799-.345.799-.77 0-.424-.357-.769-.8-.769zM23.129 22.13h-1.403c-.441 0-.8.344-.8.768 0 .425.358.769.8.769h1.403c.44 0 .799-.345.799-.769 0-.425-.357-.768-.8-.768zM23.129 28.303h-1.403c-.441 0-.8.345-.8.769 0 .425.358.77.8.77h1.403c.44 0 .799-.345.799-.77 0-.424-.357-.769-.8-.769zM16.578 22.13H4.858c-.442 0-.799.344-.799.768 0 .425.357.769.8.769h11.719c.442 0 .8-.345.8-.769 0-.425-.358-.768-.8-.768zM16.578 28.303H4.858c-.442 0-.799.345-.799.769 0 .425.357.77.8.77h11.719c.442 0 .8-.345.8-.77 0-.424-.358-.769-.8-.769z"
        fill={props.focused ? '#202020' : '#6F6F6F'}
      />
    </Svg>
  );
}