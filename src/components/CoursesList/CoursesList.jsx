const CoursesList = ({courses}) => {
    return (
        <ul className='courses'>
            {courses?.map(course => (
                <li key={course.id}>
                <h2>Course name: {course.name}</h2>
                <div>Course number: {course.courseId}</div>
                <div>Course length: {course.length}</div>
                <div>Course start date: {course.startDate}</div>
        </li>  
            )
   )}
        </ul>
    )
    
}
 
export default CoursesList;