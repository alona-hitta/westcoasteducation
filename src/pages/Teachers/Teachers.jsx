import {useContext} from 'react';
import ListContext from '../../store/context-list';
import TeachersList from '../../components/TeachersList/TeachersList';
import AddTeacher from '../../components/AddTeacher/AddTeacher';

const Teachers = () => {
    const context = useContext(ListContext);
    return(
        <>
            <h1>Teachers:</h1>
            <a href={AddTeacher}>Add a teacher</a>
            {context.teachers && <TeachersList teachers={context.teachers}/>}
        </>
    )
}

export default Teachers;