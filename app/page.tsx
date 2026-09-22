import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Hero />

      <Navbar className="absolute top-0 inset-x-0 " />
    </>
  );
}
