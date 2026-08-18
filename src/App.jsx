import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuoteBand from "./components/QuoteBand";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteBand />
        <About />
        <Benefits />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
