import styles from "./mainPage.module.css"
import HeaderSection from "../../components/HeaderSection/HeaderSection"
import InfoSection from "../../components/InfoSection/InfoSection.jsx"
import TariffSection from "../../components/Tariff/TariffSection.jsx"
import SlideSection from "../../components/SlideSection/SlideSection.jsx"
import AddressSection from "../../components/AddressSection/AddressSection.jsx"
import ContactsSection from "../../components/ContactsSection/ContactsSection.jsx"
import Footer from "../../components/Footer/Footer.jsx"

export default function MainPage() {
    return <>
        <HeaderSection/>
        <InfoSection/>
        <TariffSection/>
        <SlideSection/>
        <AddressSection/>
        <ContactsSection/>
        <Footer/>
    </>
}