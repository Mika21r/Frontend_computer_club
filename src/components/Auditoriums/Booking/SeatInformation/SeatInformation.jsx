import "./SeatInformation.css";

import OtchetsService from "../../../../services/OtchetsService";
import { Context } from "../../../../main";
import { useContext } from "react";

const SeatInformation = ({seatData, computerInfo, setBooked}) => {
    const {computerId, processor, videocard, headphones, keyboard, mouse, gamingChair} = computerInfo;
    const {store} = useContext(Context);

    async function otchet() {
        try {
            let response = await OtchetsService.getOthcetForComputerByComputerId(computerInfo.computerId);
            const url = window.URL.createObjectURL(new Blob([response.data]));
  
            // Создаем элемент a (ссылку) для скачивания файла
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'OtchetForComp.xlsx'); // указываем желаемое имя файла для скачивания

            // Добавляем ссылку на страницу
            document.body.querySelector(".forDownload").appendChild(link);

            // Инициируем скачивание файла
            link.click();

            // Очищаем созданный объект URL
            window.URL.revokeObjectURL(url);
        } catch(err) {
            console.log(err)
        }
    }

    return ( 
        <>
        <div className="seat__info__block">
            <div className="comupter__num">{"Компьютер " + computerId}</div>
            <div className="computer__img">
                <img src="" alt="" />
            </div>
            <div className="computer__info">
                <div className="processor">
                    Процессор: {processor}
                </div>
                <div className="videocard">
                    Видеокарта: {videocard}
                </div>
                <div className="headphones">
                    Наушники: {headphones}
                </div>
                <div className="keyboard">
                    Клавиатура: {keyboard}
                </div>
                <div className="mouse">
                    Мышка: {mouse}
                </div>
                <div className="gamingChair">
                    Кресло: {gamingChair}
                </div>
            </div>
            <button className="continue__btn" onClick={() => setBooked(true)}>Далее</button>
            {
                store.isAuth && <button className="continue__btn" onClick={() => otchet()}>импорт инфы о компе</button>
            }
            
        </div>
        <div className="forDownload" style={{"position": "absolute"}}></div>
        </>
     );
}
 
export default SeatInformation;