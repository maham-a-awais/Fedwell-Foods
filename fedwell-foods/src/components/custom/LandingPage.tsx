import Image from "next/image";
import { AnimateFadeIn, AnimateText } from "./Animations";

export function LandingPage() {
  return (
    <AnimateFadeIn>
      <div className="relative">
        <Image
          aria-hidden
          src="/images/warehouse-2.png"
          alt="Warehouse"
          layout="responsive"
          width={1640}
          height={570}
          className="opacity-90"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold p-4 bg-black bg-opacity-50">
          <AnimateText
            text="PROVIDING INDUSTRIAL AND TELECOM SOLUTIONS"
            styles="text-sm md:text-4xl text-center mb-2"
            delay={0.5}
          />
          <AnimateText
            text="Connect with us to take your business to the next level"
            styles="text-xs md:text-xl font-medium text-center"
            delay={1.5}
          />
        </div>
      </div>
    </AnimateFadeIn>
  );
}
