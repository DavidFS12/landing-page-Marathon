import { MaratonNavBar } from "./components/NarBar";
import { MarathonHero } from "./components/Hero";
import { MarathonFooter } from "./components/Footer";
import { MarathonAbout } from "./components/About";
import { MarathonRegistration } from "./components/Inscription";
import { MarathonPremios } from "./components/Premios";
import { MarathonSponsors } from "./components/Sponsors";

export default function Home() {
  return (
    <main className="min-h-screen bg-marathon-dark text-white">
      <MaratonNavBar/>
      <MarathonHero/>
      <MarathonAbout/>
      <MarathonRegistration/>
      <MarathonPremios />
      <MarathonSponsors />
      <MarathonFooter/>
    </main>
  );
};
