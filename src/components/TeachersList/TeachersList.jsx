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
                </li>
            ))}
            </ul>  
    )
    
}
 
export default TeachersList;