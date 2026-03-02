export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#063F31] via-[#0B5B47] to-[#0B5B47]">
        <div className="grid md:grid-cols-3 items-center min-h-[500px]">
            <div>
                <img src="/src/assets/MaskGroup.png" alt="" />
            </div>

          <div className="text-white px-6 md:px-20 py-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Join Our Community of Donors and Volunteers:
              <br className="hidden md:block" />
              Be Part of Positive Change in the World
            </h2>

            <h3 className="text-5xl md:text-6xl font-bold mt-8">154,859+</h3>

            <p className="mt-4 text-gray-300">
              Join the Many Who Already Support Our Mission
            </p>

            <div className="flex justify-center md:justify-start gap-6 mt-10 flex-wrap">
              <button className="px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
                FUNDRAISE
              </button>

              <button className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition">
                DONATE NOW
              </button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-full">
            <img
              src="/ctaChildimg.jpg"
              alt="Child"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#063F31]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
