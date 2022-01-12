import React, { useState, useEffect } from 'react';
import './style/app.css';
import logo from './images/dumbbell.png'
import Scheda from './components/Scheda';
import Modal from './components/Modal';
import DATA from './data.json'


function App() {
  const [schedaSelected, setScheda] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [dataToUpdate, setUpdateData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("trainingData") !== null) {
      DATA = JSON.parse(localStorage.getItem("trainingData"))
    }
    let schedaSelected = filterData("A");
    setScheda(schedaSelected);
  }, []);

  useEffect(() => {
    if (dataToUpdate.id) {
      updateData();
    }
  }, [dataToUpdate])

  function updateData() {
    setScheda(schedaSelected.map(item => {
      if (item.id === dataToUpdate.id) {
        return {
          ...item, edit: dataToUpdate.edit
        }
      } return item;
    }));
    localStorage.setItem("trainingData", JSON.stringify(DATA));
  }

  function selectTraining(e) {
    let scheda = e.target.value.split("-")[1];
    let schedaData = filterData(scheda);
    setScheda(schedaData);
  }

  function filterData(scheda) {
    let schedaData = DATA.map((data) => {
      return data.name === scheda ? data.exercises : null;
    });
    schedaData = schedaData.filter(el => el !== null);
    return schedaData[0];
  }

  return (
    <div className="App">
      <div className='page-wrapper'>
        <div className='body-wrapper'>
          <div className='flex flex-between flex-middle'>
            <h1 className='page-title'>Allenamento</h1>
            <img src={logo} alt='logo' height='24px' width='24px'></img>
          </div>
          <div className='training flex flex-between flex-middle'>
            <div className='text-selection'>Seleziona un allenamento</div>
            <select onChange={selectTraining}>
              <option value="scheda-A">Scheda A</option>
              <option value="scheda-B">Scheda B</option>
              <option value="scheda-C">Scheda C</option>
            </select>
          </div>
          <Scheda
            schedaSelected={schedaSelected}
            setScheda={setScheda}
            showModal={showModal}
            setShowModal={setShowModal}
            setModalData={setModalData}
          />
        </div>
      </div>
      <Modal 
        show={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
        setUpdateData={setUpdateData}
      />
    </div>
  );
}

export default App;
