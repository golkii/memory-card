import Card from "./components/Card";
import React, { useState } from "react";

const kittensList = [
  {
    title: 'bebee',
    src: './img/bebee.png'
  },
  {
    title: 'george',
    src: './img/george.png'
  },
  {
    title: 'harry',
    src: './img/harry.png'
  },
  {
    title: 'joe',
    src: './img/joe.png'
  },
  {
    title: 'jonny',
    src: './img/jonny.png'
  },
  {
    title: 'kit',
    src: './img/kit.png'
  },
  {
    title: 'peter',
    src: './img/peter.png'
  },
  {
    title: 'stew',
    src: './img/stew.png'
  },
  {
    title: 'tom',
    src: './img/tom.png'
  }
]

function App() {
  const [currentList, setCurrentList] = useState(kittensList)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [winStatus, setWinStatus] = useState('')


  function mixList() {
    let tempList = []

    for (let i = 0; i < kittensList.length; i++) {
      let rand = Math.floor(Math.random() * kittensList.length)
      // eslint-disable-next-line no-loop-func
      while (tempList.find(el => kittensList[rand] === el) !== undefined) {
        rand === kittensList.length - 1 ? rand = 0 : rand++
      }
      tempList.push(kittensList[rand])
    }

    setCurrentList(tempList)
  }


  function move(position) {
    setWinStatus('')
    if (answers.find(el => currentList[position] === el)) {
      if (score > bestScore) {
        setBestScore(score)
      }
      setScore(0)
      setAnswers([])
    }
    else {
      setScore(score + 1)
      setAnswers(answers.concat(currentList[position]))
      if (score === 8) {
        setWinStatus('You win!!!')
      }
    }
    mixList()
  }


  return (
    <div className="App">
      <h1>Memory game!</h1>
      <p>You can choose kitten only once!</p>
      <h3>score: {score}</h3>
      <h3>best score: {bestScore}</h3>
      <h2>{winStatus}</h2>

      <div className="card-container">
        <Card list={currentList} method={move} />
        {/* {currentList.map((el, pos) => {
          return <Card key={pos} id={pos} title={el.title} src={el.src} method={move} />
        })} */}
      </div>
    </div>
  );
}

export default App;