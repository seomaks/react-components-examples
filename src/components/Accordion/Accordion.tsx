export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemsType[]
  onClick: (value: any) => void
}

type ItemsType ={
  title: string
  value: any
}

export function Accordion(props: AccordionPropsType) {
    return <div>
      <AccordionTitle title={props.titleValue}
                      onChange={props.onChange}/>
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}    </div>
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={props.onChange}>{props.title}</h3>
  )
}

export type AccordionBodyPropsType = {
  items: ItemsType[]
  onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
  return <ul>
    {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>) }
  </ul>
}

