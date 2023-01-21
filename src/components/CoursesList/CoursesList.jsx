import { Link } from 'react-router-dom';
import CourseImg from '../../styles/img/courses.png';

const CoursesList = ({courses}) => {
    return (
        <ul className='courses'>
            {courses?.map(course => (
                <li key={course.courseId} className="course">
                    <div className="course__img">
                        <img src={CourseImg} alt="course image" className="course__img" />
                    </div>
                    <div className="course__about">
                        <h2><b>Course name:</b> {course.name}</h2>
                        <div><b>Course number:</b> {course.courseId}</div>
                        <div><b>Course length:</b> {course.length}</div>
                        <div><b>Course start date:</b> {course.startDate}</div>
                        <div className="about__link">
                            <Link className='link' to={`/courses/${course.id}`} >
                                Read more
                            </Link>
                        </div>
                    </div>
        </li>  
        )
   )}
        </ul>
    )
    
}
 
export default CoursesList;