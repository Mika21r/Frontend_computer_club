import styles from "./footer.module.css"

export default function Footer() {

    console.log(styles)
    return(
        <section className={styles['Footer']}>
            <div className={styles["container"]}>
                <div className={styles['footer_logo']}>
                    <a href="/" className={styles['footer_logo']}>
                        <img src="/public/Logo3.png" alt/>
                    </a>
                </div>
                <div className={styles['copyright_block']}>
                    <span className={styles['copyright']}>© 2024, CYBER.PLUS. Все права защищены.</span>
                </div>
            </div>
        </section>
    )
}