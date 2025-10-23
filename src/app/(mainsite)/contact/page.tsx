import { Metadata } from "next"
import PageBanner from "../components/Misc/PageBanner/PageBanner"
import ContactMethods from "../components/Pages/Contact/ContactMethods/ContactMethods"
import ContactForm from "../components/Pages/Contact/ContactForm/ContactForm"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact Cartersville Outreach International"
}

export default function ContactPage(){
    return(
        <main id="contactPage">
            <PageBanner pageTitle="Contact Us" imgSrc="/img/pagebanners/contact.webp" />
            <ContactMethods />
            <ContactForm />
        </main>
    )
}