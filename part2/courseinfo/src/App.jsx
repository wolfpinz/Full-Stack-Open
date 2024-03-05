const Course = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
      {props.course.parts.map((part) => (
        <div key={part.name}>{part.name}: {part.exercises} </div>
      ))}
      <strong>total of {" "}
        {props.course.parts.reduce((s, p) =>
          s + p.exercises, 0
        )}
        exercises
      </strong>
    </>
  )
}

export const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App
