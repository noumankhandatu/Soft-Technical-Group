import Header from "../header";
import MajorClientsHero from "../../components/major-clients-hero";
import MajorClientsGrid from "../../components/major-clients-grid";
import MajorClientsTestimonials from "../../components/major-clients-testimonials";

export default function MajorClientsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MajorClientsHero />
      <MajorClientsGrid />
    </div>
  );
}
