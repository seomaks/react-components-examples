import {useRef, useState} from "react";

export const Test = () => {

  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

 // const newText = (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.value


  const textHandler = () => {
    const el = inputRef.current as HTMLInputElement
    setMessage(el.value)
  }

  return <div>
    <input ref={inputRef} placeholder={"type..."}></input>
    <button onClick={textHandler}>Send</button>
    <div>{message}</div>
  </div>
}