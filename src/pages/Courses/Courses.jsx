import {useContext, useState} from 'react';
import ListContext from '../../store/context-list';
import CoursesList from '../../components/CoursesList/CoursesList';
import AddCourse from '../../components/AddCourse/AddCourse';
import Modal from '../../components/UI/Modal';

const Courses = () => {
    const context = useContext(ListContext);
    const [showModal, setShowModal] = useState(false);


    return ( 
        <>
        <h1>Courses</h1>
        <button onClick={()=> setShowModal(true)}>Add a new course</button>
            {showModal && (
            <Modal
            showModal={showModal} 
            onClose={() => setShowModal(false)}
            >
                <AddCourse/>
            </Modal>
        )}
        {context.courses && <CoursesList courses={context.courses}/>}
        </>
     );
}
 
export default Courses;