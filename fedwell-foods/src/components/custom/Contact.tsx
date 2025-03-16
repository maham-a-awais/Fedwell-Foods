import React from "react";
import { AnimateTop } from "./Animations";

export function Contact({ contactRef }: { contactRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <AnimateTop delay={0.5}>
      <div id="contact" ref={contactRef} className="pb-16 px-6 md:px-10">
        <h1 className="font-bold text-2xl text-center pb-10">Contact</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* PERSONS */}
          <div className="p-4 bg-white shadow-lg rounded-lg w-full">
            <div className="grid grid-cols-2 gap-4">
              <h1 className="font-bold">CEO:</h1>
              <h1 className="text-sm">Awais Akram Butt</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <h1 className="font-bold">Business Directors:</h1>
              <div className="text-sm">
                <h1>Faiza Awais</h1>
                <h1>Shizra Awais</h1>
                <h1>Maham Awais</h1>
              </div>
            </div>
          </div>

          {/* CONTACT NUMBERS */}
          <div className="p-4 bg-white shadow-lg rounded-lg w-full">
            <div className="grid grid-cols-2 gap-4">
              <h1 className="font-bold">Managing Director:</h1>
              <h1 className="text-sm">Faiza Awais</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <h1 className="font-bold">Contact Details:</h1>
              <div className="text-sm">
                <h1>0311-8422222</h1>
                <h1>0300-8444276</h1>
                <h1>0334-4104049</h1>
              </div>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="p-4 bg-white shadow-lg rounded-lg w-full">
            <div className="grid grid-cols-2 gap-4">
              <h1 className="font-bold">Business Address:</h1>
              <h1 className="text-sm">Azam Garden, Multan Road, Lahore</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <h1 className="font-bold">Other Addresses:</h1>
              <div className="text-sm">
                <p>Office No 1 & 2 Seithi Height, Liaqat Chowk, Sabzazar, Lahore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateTop>
  );
}
