import styles from "./headerSection.module.css"
import Header from "../header/Header"
import HeaderText from "../HeaderText/HeaderText"

export default function HeaderSection() {

    console.log(styles)
    return ( 
        <section className={styles['HeaderSection']}>
            <Header/>;
            <HeaderText/>
        </section>
    )
}