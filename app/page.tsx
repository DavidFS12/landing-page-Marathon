import { MaratonNavBar } from "./components/NarBar";
import { MarathonHero } from "./components/Hero";
import { MarathonFooter } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-marathon-dark text-white">
      <MaratonNavBar/>
      <MarathonHero/>
      <MarathonFooter/>
    </main>
  );
};
