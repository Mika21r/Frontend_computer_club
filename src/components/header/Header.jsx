import "./header.css";
import MyModal from "../UI/MyModal/MyModal";
import { useContext, useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../signUp/SignUp";
import { Context } from '../../main';
import OtchetsService from "../../services/OtchetsService";
import logo from '/public/Logo2.png';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [choise, setChoise] = useState("");
    const {store} = useContext(Context);

    function handlerChoise(text) {
        setShowModal(true);
        setChoise(text)
    }

    async function otchet() {
        try {
            let response = await OtchetsService.getOthcetForComputers();
            const url = window.URL.createObjectURL(new Blob([response.data]));
  
            // Создаем элемент a (ссылку) для скачивания файла
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'OtchetForComp.xlsx'); // указываем желаемое имя файла для скачивания

            // Добавляем ссылку на страницу
            document.body.querySelector(".forDownloadAll").appendChild(link);

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
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="header__logo"><img src={logo} alt="logo"/></div>
                        {
                            store.isAuth
                            ?
                            <div className="btn__block">
                                 <button className="logout btn__sign" onClick={() => store.logout()}>выйти</button>
                                 {
                                    (store.isAuth && (store.userRoles.includes("ADMIN") || store.userRoles.includes("OWNER")))
                                    ?
                                    <button className="btn__sign" onClick={() => otchet()}>Информация о компьютерах</button>
                                    : ""
                                 }
                            </div>
                            :
                            <div className="btn__block">
                                <button className="sign__in btn__sign" onClick={() => handlerChoise("signin")}>войти</button>
                                <button className="sign__up btn__sign" onClick={() => handlerChoise("signup")}>зарегистрироваться</button>
                            </div>
                        }
                    </div>
                </div>
            </header>
            <MyModal visible={showModal} setVisible={setShowModal}>
                {
                    choise == "signin" 
                    ?
                    <SignIn setShowModal={setShowModal}/>
                    :
                    <SignUp setShowModal={setShowModal}/>
                }
            </MyModal>
            <div className="forDownloadAll" style={{"position": "absolute"}}></div>
        </> 
    );
}
 
export default Header;