import "./auditoriums.css";

import { useState } from "react";

import Seats from "./Seats/Seats";
import MyModal from "../UI/MyModal/MyModal";
import Booking from "./Booking/Booking";

const Auditoriums = ({seatsForAuditoriums}) => {

    const [showModal, setShowModal] = useState(false);
    const [seatData, setSeatData] = useState({});

    function openModal(seatData) {
        setShowModal(true);
        setSeatData(seatData);

    }

    return ( 
        <>
            <div className="auditoriums__block">
                {
                    seatsForAuditoriums.map(auditorium => (
                        <div key={auditorium.auditoriumId} className="auditorium">
                            <h1 className="auditoriumTitle">{auditorium.name}</h1>
                            <Seats seats={auditorium.seats} showModal={showModal} openModal={openModal}/>
                        </div>
                    ))
                }
            </div>
            <MyModal visible={showModal} setVisible={setShowModal}>
                {
                    showModal 
                    ?
                    <Booking seatData={seatData}/>
                    : ""
                }
                
            </MyModal>
        </>
       
    );
}
 
export default Auditoriums;