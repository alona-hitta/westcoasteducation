import { Link } from 'react-router-dom';

const TeachersList = ({teachers}) => {

    return (
            <ul className='teachers'>
            {teachers?.map((teacher) => (
                <li key={teacher.id}>
                    <div>
                        <span> Teacher: {teacher.firstName} {teacher.lastName}</span>
                    </div>
                    <div>
                        <span>Security number: {teacher.securityNumber}</span>
                    </div>
                    <div>
                        <span className='list__text'>Email: {teacher.email}</span>
                    </div>
                    <div>
                        <span className='list__text'>Mobile number: {teacher.mobileNumber}</span>
                    </div>
                    <Link  to={`/teachers/${teacher.id}`} >
                        Read more
                    </Link>
                </li>
            ))}
            </ul>  
    )
    
}
 
export default TeachersList;