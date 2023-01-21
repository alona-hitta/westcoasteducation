import { Link } from 'react-router-dom';
import TeacherImg from '../../styles/img/teacher.png';

const TeachersList = ({teachers}) => {

    return (
            <ul className='teachers'>
            {teachers?.map((teacher) => (
                <li key={teacher.id} className="teacher">
                    <div className="teacher__img">
                        <img src={TeacherImg} alt="teacher image" className="teacher__img" />
                    </div>
                    <div className="teacher__about">
                        <h2>
                            <div> <b>Teacher: </b>{teacher.firstName} {teacher.lastName}</div>
                        </h2>
                        <div>
                            <b>Security number:</b> {teacher.securityNumber}
                        </div>
                        <div>
                            <b>Email: </b>{teacher.email}
                        </div>
                        <div>
                            <b>Mobile number:</b> {teacher.mobileNumber}
                        </div>
                        <div className="about__link">
                        <Link to={`/teachers/${teacher.id}`} >
                            <button className='link'>Read more</button>
                        </Link>
                        </div>
                    </div>
                </li>
            ))}
            </ul>  
    )
    
}
 
export default TeachersList;