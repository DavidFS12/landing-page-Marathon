import { MaratonNavBar } from "./components/NarBar";
import { MarathonHero } from "./components/Hero";
import { MarathonFooter } from "./components/Footer";
import { MarathonAbout } from "./components/About";
import { MarathonRegistration } from "./components/Inscription";

export default function Home() {
  return (
    <main className="min-h-screen bg-marathon-dark text-white">
      <MaratonNavBar/>
      <MarathonHero/>
      <MarathonAbout/>
      <MarathonRegistration/>
      <MarathonFooter/>
    </main>
  );
};
