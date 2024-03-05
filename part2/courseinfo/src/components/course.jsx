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

export default Course
