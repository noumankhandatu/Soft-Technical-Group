import Header from "../header"
import FAQHero from "../../components/faq-hero"
import FAQContent from "../../components/faq-content"
import FAQContact from "../../components/faq-contact"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FAQHero />
      <FAQContent />
      <FAQContact />
    </div>
  )
}
