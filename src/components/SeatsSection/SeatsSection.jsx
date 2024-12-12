import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";

import SeatsService from "../../services/SeatsService";
import AuditoriumsService from "../../services/AuditoriumsService";
import Auditoriums from "../Auditoriums/Auditoriums";

import "./SeatsSection.css";

const SeatsSection = () => {

    const [auditoriums, setAuditoriums] = useState([]);
    const [seatsForAuditoriums, setSeatsForAuditoriums] = useState([]);

    const [fetchAuditoriums, AuditoriumLoader, AuditoriumError] = useFetching(async () => {
        let response = await AuditoriumsService.getAuditoriums();
        setAuditoriums(response.data);
    })

    const [fetchSeatsByAuditoriumId, SeatsByAuditoriumIdLoader, SeatsByAuditoriumIdError] = useFetching(async () => {
        
        let Promises = [];
        auditoriums.forEach((auditorium => {
            Promises.push(SeatsService.getSeatsByAuditoriumId(auditorium.auditoriumId))
        }));
        
        let responses = await Promise.all(Promises);
        let seatsGroupByAuditorium = responses.map(response => response.data);
        
        let result = seatsGroupByAuditorium.map(
            auditoriumSeats => { 
                let res = auditoriums.find(
                    auditorium => auditorium.auditoriumId === auditoriumSeats[0].auditoriumId 
                );
                res["seats"] = auditoriumSeats;
                return res;
            }
        )

        setSeatsForAuditoriums(result);
    })

    useEffect(() => {
        fetchAuditoriums();
        // fetchSeatsByAuditoriumId();
    }, [])

    useEffect(() => {
        if(auditoriums.length) {
            fetchSeatsByAuditoriumId();
        }
    }, [auditoriums])


    return ( 
    <>
        <section id="title">
            <div className="container">
                <main>
                    <div className="title__block">
                        <h1 className="title">CYBER.PLUS</h1>
                    </div>

                    <Auditoriums seatsForAuditoriums={seatsForAuditoriums}/>
                </main>
               
            </div>
        </section>
    </>
    );
}
 
export default SeatsSection;