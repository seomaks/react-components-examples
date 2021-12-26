import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";
import {Test} from "./components/Test";
import {Clock} from "./components/Clock/Clock";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4) // rating
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true) // accordion
  let [switchOn, setSwitchOn] = useState<boolean>(false) // switch on
  const [value, setValue] = useState('2'); // select

  return (
    <div>
      <PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      <hr/>

      <UncontrolledAccordion titleValue={"Menu"}/>
      <UncontrolledAccordion titleValue={"Users"}/>
      <hr/>

      <UncontrolledRating/>
      <hr/>

      <Rating value={ratingValue} onClick={setRatingValue}/>
      <hr/>

      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      <hr/>

      <OnOff on={switchOn} onChange={
        setSwitchOn}/>
      <hr/>

      <Accordion titleValue={"Students"} collapsed={accordionCollapsed}
                 onChange={() => {
                   setAccordionCollapsed(!accordionCollapsed)
                 }} items={[{title: "Maks", value: 1},
        {title: "Olya", value: 2},
        {title: "Katya", value: 3}]} onClick={(id) => {
        alert(`user with ID ${id} should be happy`)
      }}/>
      <hr/>

      <Test/>
      <hr/>
      <Clock mode={"analog"}/>
      <hr/>

      <Select
        onChange={setValue}
        value={value}
        items={[
          {value: "1", title: "Minsk"},
          {value: "2", title: "Murmansk"},
          {value: "3", title: "Riga"},
        ]}/>
      <hr/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}

export default App;
