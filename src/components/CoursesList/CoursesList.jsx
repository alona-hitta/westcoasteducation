import { Link } from 'react-router-dom';

const CoursesList = ({courses}) => {
    return (
        <ul className='courses'>
            {courses?.map(course => (
                <li key={course.id}>
                <h2>Course name: {course.name}</h2>
                <div>Course number: {course.courseId}</div>
                <div>Course length: {course.length}</div>
                <div>Course start date: {course.startDate}</div>
                <Link className='list__link' to={`/courses/${course.id}`} >
                    Read more
                </Link>
        </li>  
            )
   )}
        </ul>
    )
    
}
 
export default CoursesList;