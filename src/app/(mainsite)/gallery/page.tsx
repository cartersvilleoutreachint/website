import { Metadata } from "next"
import PageBanner from "../components/Misc/PageBanner/PageBanner"
import ContactMethods from "../components/Pages/Contact/ContactMethods/ContactMethods"
import ContactForm from "../components/Pages/Contact/ContactForm/ContactForm"
import GalleryContent from "../components/Pages/gallerypage/GalleryContent/GalleryContent"

export const metadata: Metadata = {
    title: "Gallery",
    description: "Gallery - Cartersville Outreach International"
}

export default function GalleryPage(){
    return(
        <main id="galleryPage">
            <PageBanner pageTitle="Gallery" imgSrc="/img/pagebanners/contact.webp" />
            <GalleryContent />
        </main>
    )
}