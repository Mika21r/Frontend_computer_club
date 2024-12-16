import styles from "./contactsSection.module.css"

export default function ContactsSection() {

    console.log(styles)
    return(
        <section className={styles['ContactsSection']}>
            <div className="container">
                <h1>Контакты</h1>
                <p className={styles['contacts_text']}>Вы можете забронировать место и время или задать вопрос написав нам на электронную почту или позвонив на телефон.</p>
                <div className={styles['phone_mail']}>
                    <a href="tel:+78345678910" className={styles['phone']}>
                        <img src="/public/phone.svg" alt/>
                        +7 (8345) 67-89-10
                    </a>
                    <a href="mailto:info@cyber-plus.ru" className={styles['mail']}>
                        <img src="/public/mail.svg" alt/>
                        info@cyber-plus.ru
                    </a>
                </div>
                <h2 id="feedback">ОСТАВЬТЕ ОТЗЫВ</h2>
                <p>Нашему компьютерному клубу очень важно ваше мнение!
                    Поделитесь с окружающими своим мнением о посещении нашего заведения,
                    о всех удобствах. Также можете оставить комментарии о том, 
                    что вы бы хотели увидеть в нашем кибер клубе.
                </p>
                <form name="feedback_form">
                    <label>
                        <span className={styles.name}>Ваше имя</span>
                        <input type="text" name="name" className={styles.input} required/>
                    </label>
                    <label>
                        <span className={styles['name']}>Номер телефона</span>
                        <input type="text" name="phone" className={styles.input} required/>
                    </label>
                    <label className={styles['otziv']}>
                        <span className={styles['name']}>Текст для отзыва</span>
                        <textarea name="message" className={styles.textarea} required></textarea>
                    </label>
                    <p className={styles['f12']}>Нажимая на кнопку "Отправить", 
                    Вы даете согласие на обработку персональных данных и 
                    соглашаетесь c политикой конфиденциальности.</p>
                    <button type="submit" className={styles['button']}>ОТПРАВИТЬ</button>
                </form>
            </div>
        </section>
    )
}