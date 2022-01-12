import React from "react";
import clock from '../images/clock.png';
import logo from '../images/dumbbell.png';
import pencil from '../images/pencil.png';

const Exercise = ({exercise, setShowModal, setModalData}) => {
    function openModal() {
        setModalData(exercise);
        setShowModal(true);
    }
    return (
        <li className="exercise-card">
            <div className="flex flex-between">
                <div>{exercise.name}</div>
                <div className="flex flex-middle time">
                    <img src={`${exercise.time.includes("'") ? clock : logo}`} height="16px" width="16px" alt="time"></img>
                    <div>{exercise.time}</div>
                </div>
            </div>
            <div className="footer flex flex-between">
                <div className="flex flex-middle">
                    <img src={`${exercise.img ? exercise.img : logo}`} height="30px" width="30px" alt="ex-img"></img>
                    <div className="stats">{`${(exercise.edit && exercise.edit.status) ? (exercise.edit.content + 'Kg') : ''}`}</div>
                </div>
                <button className={`${exercise.edit ? "" : 'hidden'}`} onClick={openModal}><img src={pencil} alt="edit" height="30px" width="30px"></img></button>
            </div>
        </li>
    )
}

export default Exercise;