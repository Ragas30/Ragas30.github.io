export default function WellcomePartII() {
  return (
    <section className="flex p-4 bg-gray-600">
      <div className="flex w-2/3 flex-col gap-5">
        <span className="text-5xl text-gray-300">{"I'm"}</span>
        <span className="text-6xl text-slate-50 font-bold">Ragas AlGaluh</span>
        {/* <hr className="w-1/3 border-orange-300 border-2"> */}
        <p className="text-slate-50">A freelancer who provides services for digital programming and design content needs, for all businesses with more than 10 years of experience</p>
      </div>
      <div className="flex flex-col text-slate-50 w-1/3">
        <span>Services</span>
        <p className="font-semibold text-xl">{"Let's"} build quality products in programming and design with my services.</p>
        <a href="#" className="text-orange-400">
          Show More -{">"}
        </a>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-orange-400"></div>
          <div className="w-8 h-8 rounded-full bg-orange-400"></div>
          <div className="w-8 h-8 rounded-full bg-orange-400"></div>
          <div className="w-8 h-8 rounded-full bg-orange-400"></div>
        </div>
      </div>
    </section>
  );
}
