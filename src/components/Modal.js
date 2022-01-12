import React from "react";
import close from '../images/close.png'
import save from '../images/save.png';
import logo from '../images/dumbbell.png';
import check from '../images/check.png';
import $ from 'jquery';

const Modal = ({show, setShowModal, modalData, setUpdateData}) => {
    
    function saveData() {
        let input = $("#record-weight");
        let savedMessage = $('#saved-message');
        if (input.val() !== '') {
            let newModalData = modalData;
            newModalData.edit = {
                "status": true,
                "content": input.val()
            }
            setUpdateData(newModalData);
            savedMessage.removeClass("hide");
            setTimeout(() => {
                savedMessage.addClass("hide");
            }, 1000);
        }
    }
    function closeModal() {
        let input = $("#record-weight");
        input.val('');
        setShowModal(false);
    }
    return (
        <div className={`modal ${show ? '' : 'hide'}`}>
            <div className="modal-content">
                <button className="close-modal" onClick={closeModal}>
                    <img src={close} height="24px" width="24px" alt="close"></img>
                </button>
                <div className="flex flex-middle">
                    <h4>{modalData ? modalData.name : ""}</h4>
                    <img src={`${modalData.img ? modalData.img : logo}`} height="30px" width="30px" alt="ex-img"></img>
                </div>
                <div className="form-modal flex flex-middle">
                    <label>Kg</label>
                    <input id="record-weight" type="number" defaultValue={`${modalData.edit ? modalData.edit.content : ''}`}></input>
                </div>
                <div className="modal-footer flex flex-middle">
                    <button onClick={saveData}>
                        <img src={save} height="20px" width="20px" alt="save"></img>
                    </button>
                    <div id="saved-message" className="flex hide">
                        <img src={check} height="20px" width="20px"></img>
                        <div className="saved-success">Salvato!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;