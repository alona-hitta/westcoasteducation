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
            <h1 className="course__heading">Teachers:</h1>
            <div className="button__wrap">
                <button onClick={()=> setShowModal(true)}  className="button">Add a new teacher</button>
            </div>
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