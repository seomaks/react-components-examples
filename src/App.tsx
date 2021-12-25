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
import {AnalogClockView} from "./components/Clock/AnalogClockView";


function App() {

/*  let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
  let [switchOn, setSwitchOn] = useState<boolean>(false)*/

const [value, setValue] = useState('2');
  return (
    <div>
     {/* {<PageTitle title={"This is APP component"}/>
      <PageTitle title={"My friends"}/>
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledAccordion titleValue={"Users"} />

      <UncontrolledRating/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
      <OnOff on={switchOn} onChange={
        setSwitchOn}/>}


      {  <Accordion titleValue={"Students"} collapsed={accordionCollapsed}
                 onChange={() => {
                   setAccordionCollapsed(!accordionCollapsed)
                 }} items ={[{title: "Maks", value: 1},
        {title: "Olya", value: 2},
        {title: "Katya", value: 3}]} onClick={(id) => {alert(`user with ID ${id} should be happy`)}}/>}*/}

 {/*     <Select
        onChange={setValue}
        value={value}
        items={[
          {value: "1", title: "Minsk"},
          {value: "2", title: "Murmansk"},
          {value: "3", title: "Riga"},
        ]}/>*/}

{/*
      <Test />
*/}

      <Clock  mode={"analog"}/>

    </div>
  );
}

/*type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}*/

export default App;
