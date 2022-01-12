import React from "react";
import Exercise from "./Exercise";

const Scheda = ({schedaSelected, setScheda, showModal, setShowModal, setModalData}) => {
    return (
        <div className="scheda-container">
            <ul>
                {schedaSelected.map(item => (
                    <Exercise
                        key={item.id}
                        exercise={item}
                        schedaSelected={schedaSelected}
                        setScheda={setScheda}
                        setShowModal={setShowModal}
                        setModalData={setModalData}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Scheda;