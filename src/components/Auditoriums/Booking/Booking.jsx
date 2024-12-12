import SeatInformation from "./SeatInformation/SeatInformation"
import BookingSeat from "./BookingSeat/BookingSeat";
import { useEffect, useState } from "react";
import ComputerService from "../../../services/ComputersService";
import { useFetching } from "../../../hooks/useFetching";

const Booking = ({seatData}) => {
    
    const [booked, setBooked] = useState(false);
    const [computerInfo, setComputerInfo] = useState({});

    const [fetchComputerInformation, computerInformationLoader, computerInformationError] = useFetching(async () => {
        let response = await ComputerService.getComputerByComputerId(seatData.computerId);
        
        setComputerInfo(response.data);
    })
    useEffect(() => {
        fetchComputerInformation()
    }, [])

    return ( 
        <>
            {
                booked
                ?
                <BookingSeat seatData={seatData} setBooked={setBooked}/>
                :
                <SeatInformation seatData={seatData} computerInfo={computerInfo} setBooked={setBooked}/>
            }
        </>
     );
}
 
export default Booking;