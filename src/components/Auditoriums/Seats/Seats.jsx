import ComputerIcon from "./ComputeIcon";

import "./seats.css";

const Seats = ({seats, openModal}) => {
    return ( 
        <div className="seatsBlock">
            {
                seats.map(seat => (
                    <div key={seat.seatId} className="seat" onClick={() => openModal(seat)}>
                        <ComputerIcon/>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Seats;