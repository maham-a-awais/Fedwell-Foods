"use client";
import { useRef } from "react";
import { Contact } from "./Contact";
import { LandingPage } from "./LandingPage";
import { NavBar } from "./NavBar";
import { Overview } from "./Overview";
import { Footer } from "./Footer";

const Dashboard = () => {
  const overviewRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar overviewRef={overviewRef} contactRef={contactRef} />
      <LandingPage />
      <Overview overviewRef={overviewRef} />

      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default Dashboard;
