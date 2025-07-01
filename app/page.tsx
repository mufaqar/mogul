import Image from "next/image";
import Header from "@/components/header/header";
import RentalCard from "@/components/RentalCard";
import Footer from "@/components/footer";
import PressSection from "@/components/pressSection";
export default function Home() {
  return (
    <>
      <Header />
      <RentalCard />
      <PressSection/>
      <Footer />
    </>
  );
}
