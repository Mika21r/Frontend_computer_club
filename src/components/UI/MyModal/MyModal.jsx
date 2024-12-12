import "./myModal.css";

const MyModal = ({children, visible, setVisible}) => {
    return ( 
        <div className={visible ? "modal__overlay active" : "modal__overlay"} onClick={() => setVisible(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
     );
}
 
export default MyModal;