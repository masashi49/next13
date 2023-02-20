"use client"

import Test from "../components/test"

export default function Hollo() {

  function handleClick() {
    console.log(111);
  }

  return (
    <div>
      <p>this is hello</p>
      <Test name="名前ですよ" handleClick={handleClick} />
    </div>
  )
}
