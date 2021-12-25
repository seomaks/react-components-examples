import {useState} from "react";

export function UncontrolledRating() {
  const [rating, setRating] = useState(0)

  return (
    <div>
      <Star selected={rating > 0} setRating={setRating} rating={1}/>
      <Star selected={rating > 1} setRating={setRating} rating={2}/>
      <Star selected={rating > 2} setRating={setRating} rating={3}/>
      <Star selected={rating > 3} setRating={setRating} rating={4}/>
      <Star selected={rating > 4} setRating={setRating} rating={5}/>
    </div>
  )
}

type StarPropsType = {
  selected: boolean
  setRating: (rating: 1 | 2 | 3 | 4 | 5) => void
  rating: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
  return <span onClick={() => {
    props.setRating(props.rating)
  }}>
    {props.selected ? <b>star </b> : "star"} </span>
}