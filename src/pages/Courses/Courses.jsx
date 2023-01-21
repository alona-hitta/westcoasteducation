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
        <h1 className="course__heading">Courses</h1>
        <div className="button__wrap">
            <button onClick={()=> setShowModal(true)} className="button">Add a new course</button>
        </div>
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