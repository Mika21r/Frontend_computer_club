import styles from "./addressSection.module.css";

export default function AddressSection() {

    console.log(styles)
    return(
        <section className={styles['AddressSection']}>
            <div className="container">
                <h1>Наш адрес</h1>
                <p>г. Чебоксары, ул. Карла Маркса, 52/1</p>
                <div className={styles['Address_map']}>
                    <div className={styles['Address_map_2']}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f0e788b29d75e8db612c90a201e408aa78bc28e2a1430c03f5cc9926d145f3a&amp;source=constructor" width="1120" height="600" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}