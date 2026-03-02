export default function Hero() {
  return (
    <section className="relative bg-[#094C3B] overflow-hidden pb-40 md:pb-0">

      <div className="max-w-7xl mx-auto  relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          <div className="relative">
            <img
              src="/hero-child.png"
              alt="Smiling child"
              className="w-full mt-30 md:mt-0 h-80 md:h-[700px] object-cover rounded-tl-[400px] rounded-br-[400px]"
            /> 
            <img src="/src/assets/Vector.png" className="absolute w-200 -z-10 md:top-90 top-40 left-5 -rotate-x-3 md:left-15" alt="Backside Vector" />
          </div>

          <div className="text-white space-y-6">

            <h1 className="text-4xl p-4 md:p-0 lg:text-5xl font-bold leading-tight">
              Empowering Girls in Tanzania through Digital Skills
            </h1>

            <p className="text-gray-200 text-lg max-w-lg ml-10">
              We are dedicated to providing girls in Tanzania with the tools they need
              to acquire digital skills and improve their opportunities for success.
            </p>

            <button className=" inline-block ml-10 text-[#FFD030] font-semibold  hover:text-yellow-500 transition">
              Our Causes ____

            </button>

          </div>
        </div>
      </div>
    </section>
  );
}