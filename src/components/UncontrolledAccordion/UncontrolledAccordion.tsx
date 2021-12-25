import {useState} from "react";

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {

  const [collaps, setCollaps] = useState(true)
  /*const set = () => {
    setCollaps(collaps => !collaps)
  }*/

  return <div>
    <AccordionTitle title={props.titleValue} onClick={() => {setCollaps(!collaps)}}/>
{/*
    <button onClick={() => {setCollaps(!collaps)}}>TOGGLE</button>
*/}
    {collaps && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  title: string
  onClick: ()=> void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
  )
}

function AccordionBody() {
  return <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
}

