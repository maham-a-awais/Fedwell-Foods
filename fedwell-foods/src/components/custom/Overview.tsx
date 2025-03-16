import React from "react";
import { AnimateTop } from "./Animations";
import { BUSINESS_NATURES, BUSINESSES, CUSTOMERS, DISTRIBUTORS } from "@/constants";
import Image from "next/image";

export function Overview({ overviewRef }: { overviewRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div id="overview" ref={overviewRef} className="pt-16 px-6 md:px-10">
      <AnimateTop delay={0.5}>
        <div className="pb-16">
          <h1 className="font-bold text-2xl md:text-3xl text-center">Group of Companies</h1>
          <div className="md:flex md:flex-wrap sm:justify-center md:justify-between gap-4 mt-6">
            {BUSINESSES.map(({ src, width, height }) => (
              <Image
                key={src}
                src={src}
                alt="Business logo"
                width={width}
                height={height}
                className="m-auto py-2"
              />
            ))}
          </div>
        </div>
      </AnimateTop>

      {/* NATURE OF BUSINESSES */}
      <AnimateTop delay={0.5}>
        <div className="pb-16">
          <h1 className="font-bold text-2xl pb-10 text-center">Nature of Businesses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {BUSINESS_NATURES.map((business, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow-lg rounded-lg md:text-center text-left"
              >
                <h2 className="font-bold text-lg">{business}</h2>
              </div>
            ))}
          </div>
        </div>
      </AnimateTop>

      {/* DISTRIBUTORS */}
      <AnimateTop delay={0.5}>
        <div className="pb-20">
          <h1 className="font-bold text-2xl pb-10 text-center">Major Distributors</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISTRIBUTORS.map((distributor) => (
              <div
                key={distributor.name}
                className="flex items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <Image src={distributor.image} alt={distributor.name} width={100} height={100} />
                <div className="ml-4">
                  <h2 className="font-bold text-lg">{distributor.name}</h2>
                  <p className="text-sm text-gray-600">{distributor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateTop>

      {/* MAJOR CUSTOMERS */}
      <AnimateTop delay={0.5}>
        <div className="pb-20">
          <h1 className="font-bold text-2xl pb-10 text-center">Major Customers</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMERS.map((customer) => (
              <div
                key={customer.name}
                className="flex items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <Image src={customer.image} alt={customer.name} width={100} height={100} />
                <div className="ml-4">
                  <h2 className="font-bold text-lg">{customer.name}</h2>
                  <p className="text-sm text-gray-600">{customer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateTop>
    </div>
  );
}
