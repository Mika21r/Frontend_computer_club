import styles from "./slideSection.module.css"

export default function SlideSection() {
    
    console.log(styles)
    return(
        <section className={styles['SlideSection']}>
            <div className="container"></div>
        </section>
    )
}