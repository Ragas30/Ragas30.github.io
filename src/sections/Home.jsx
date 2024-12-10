import React from "react";

const Home = () => {
  return (
    <section className="flex">
      <div className="w-1/2 bg-pink-500 flex flex-col justify-center items-center *:max-w-md border border-black border-t-transparent">
        <div>
          <span className="block text-7xl font-bold font-poppins leading-tight">
            Ragas Al Galuh
          </span>
          <span className="block mb-2 text-3xl font-poppins">
            Frontend Developer
          </span>
          <span className="block mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a
            nisi repellat consectetur repellendus corrupti.
          </span>
          <button className="border border-black px-5 py-2 bg-white text-xl">
            Contact Me
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-orange-500 flex flex-col justify-center items-center border border-black border-t-transparent">
        <div className="border border-black h-3/4 flex flex-col">
          <div className="w-full h-3/4">
            <img
              src="https://placehold.co/400"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full bg-white flex justify-between items-center px-2">
            <div>
              <span className="block font-poppins">Ragas Al Galuh</span>
              <span className="block text-sm">Front End Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
