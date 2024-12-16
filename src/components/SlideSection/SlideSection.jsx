import React from "react";
import styles from './slideSection.module.css';
import { SimpleSlider } from "../SimpleSlider/SimpleSlider";
import images from "../images/images";

export default function SlideSection() {

    console.log(styles)
    return(
        <section className={styles['SlideSection']}>
            <div className="container">
                <h1>Фото</h1>
                <SimpleSlider images={images} />
            </div>      
        </section>
    )
}