import React from "react";

function Card(props) {
  return (
    props.list.map((el, pos) => {
      return (
        <div className="card" onClick={() => props.method(pos)}>
          <h2>{el.title}</h2>
          <img src={el.src} alt="kitten" />
        </div>
      )
    })

  )
}

export default Card;