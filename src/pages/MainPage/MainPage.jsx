import styles from "./mainPage.module.css"
import HeaderSection from "../../components/HeaderSection/HeaderSection"
import InfoSection from "../../components/InfoSection/InfoSection.jsx"
import TariffSection from "../../components/Tariff/TariffSection.jsx"

export default function MainPage() {
    return <>
        <HeaderSection/>
        <InfoSection/>
        <TariffSection/>
        {/* <section style={{height: "100svh"}}></section>
        <section></section>
        <section></section> */}
    </>
}