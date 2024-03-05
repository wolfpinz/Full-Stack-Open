import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const avg = (props.good * 1 + props.neutral * 0 + props.bad * -1) / (all)
  const positivePercentage = props.good / (all)

  return (
    <>
      <h2>statistics</h2>
      <div>good: {props.good}</div>
      <div>neutral: {props.neutral}</div>
      <div>bad: {props.bad}</div>
      <div>all: {all}</div>
      <div>avg: {avg > 0 ? avg : "-"}</div>
      <div>positive: {positivePercentage ? positivePercentage : "-"}</div>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
