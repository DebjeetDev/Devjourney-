
type LessonStatusprops = {
    isCompleted: boolean 
}
export default function LessonStatus({isCompleted}:LessonStatusprops) {
  return (
   <span>
     {isCompleted ? <h2>Lesson completed</h2> : <h2>Lesson in progress</h2> }
   </span>
  )
}
