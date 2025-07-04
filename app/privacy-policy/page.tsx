import Header from "../header"
import PrivacyHero from "../../components/privacy-hero"
import PrivacyContent from "../../components/privacy-content"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PrivacyHero />
      <PrivacyContent />
    </div>
  )
}
