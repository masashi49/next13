'use client';

import { TextComponent } from '../components/TextComponent';

export default function Hollo() {
  function handleClick() {
    console.log(1);
  }

  return (
    <div>
      <p>this is hello</p>
      <TextComponent name='名前ですよ' handleClick={handleClick} />
    </div>
  );
}
