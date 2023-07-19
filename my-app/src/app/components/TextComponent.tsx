import { Sample } from './sample/Sample';

type Props = {
  name: string;
  handleClick: () => void;
};

export const TextComponent = ({ name, handleClick }: Props) => {
  return (
    <div>
      <p>this is {name}</p>
      <button onClick={handleClick}>ボタンですか</button>
      <Sample />
    </div>
  );
};

// Event handlers cannot be passed to Client Component props.
// next.jsはサーバーサイトのため、クライアント側で実行するものは"use client"を付与する必要がある
