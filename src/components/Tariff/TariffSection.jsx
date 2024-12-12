import styles from "./tariffSection.module.css"

export default function TariffSection() {

    console.log(styles)
    return(
        <section className={styles['TariffSection']}>
            <div className="container">
                <div className={styles['Table']}>
                    <div className={styles['Tariff_table']}>
                        <h1>Тарифы</h1>  
                        <table>
                            <thead>
                            <tr>
                                <th>Тариф</th>
                                <th>1 час</th>
                                <th>3 часа</th>
                                <th>5 часов</th>
                                <th>7 часов</th>
                                <th>9 часов</th>
                                <th>12 часов</th>
                                <th>Безлимит на месяц</th> 
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Стандарт</td>
                                <td>120₽</td>
                                <td>280₽</td>
                                <td>500₽</td>
                                <td>700₽</td>
                                <td>880₽</td>
                                <td>1000₽</td>
                                <td>2399₽</td>
                            </tr>
                            <tr>
                                <td>Премиум</td>
                                <td>150₽</td>
                                <td>320₽</td>
                                <td>530₽</td>
                                <td>730₽</td>
                                <td>910₽</td>
                                <td>1030₽</td>
                                <td>3399₽</td>
                            </tr>
                            <tr>
                                <td>VIP</td>
                                <td>180₽</td>
                                <td>350₽</td>
                                <td>560₽</td>
                                <td>780₽</td>
                                <td>950₽</td>
                                <td>1100₽</td>
                                <td>3999₽</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>
        </section>
    )
}