import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row w-full border-red-500 border justify-center mx-container gap-10 min-h-screen p-5"
    >
      <div className="relative flex flex-col items-start justify-center xl:w-2/5 w-full max-xl:padding-x pt-28">
        <p className="text-2xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] font-bold max-sm:leading-[82px]">
          <span className="xl:bg-white z-10 pr-10 relative xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className=" font-montserrat text-lg mt-6 mb-14 text-slate-gray sm:max-w-sm">
          Discover stylist Nike,Arrivals, Quality comfort and invocation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />

        <div className="flex flex-start items-start justify-start w-full flex-wrap gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={stat.value}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img
          src={bigShoe1}
          height={610}
          width={500}
          alt="shoes collection "
          className="relative z-10 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
