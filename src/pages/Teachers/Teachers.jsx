import {useContext, useState} from 'react';
import ListContext from '../../store/context-list';
import TeachersList from '../../components/TeachersList/TeachersList';
import AddTeacher from '../../components/AddTeacher/AddTeacher';
import Modal from '../../components/UI/Modal';

const Teachers = () => {
    const context = useContext(ListContext);
    const [showModal, setShowModal] = useState(false);


    return(
        <>
            <h1>Teachers:</h1>
            <button onClick={()=> setShowModal(true)}>Add a new teacher</button>
            {showModal && (
            <Modal
            showModal={showModal} 
            onClose={() => setShowModal(false)}
            >
                <AddTeacher/>
            </Modal>
        )}
            {context.teachers && <TeachersList teachers={context.teachers}/>}
        </>
    )
}

export default Teachers;