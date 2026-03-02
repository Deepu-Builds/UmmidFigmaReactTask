export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "₹15 Cr+",
      label: "Worth Donations",
      img: "/State1img.png",
    },
    {
      id: 2,
      value: "2,00,000+",
      label: "Unique Donors",
      img: "/State2img.png",
    },
    {
      id: 3,
      value: "50 Lakhs+",
      label: "Lives Impacted",
      img: "/State3img.png",
    },
  ];

  return (
    <section className="relative z-20 -mt-24 mb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.id} className="relative group">

              <div className="absolute inset-0 translate-y-3 bg-[#99C254] rounded-2xl"></div>

              <div className="relative bg-[#F2F2F2] rounded-2xl p-10 text-center shadow-lg transition duration-300 group-hover:-translate-y-2">

                <img
                  src={stat.img}
                  alt={stat.label}
                  className="mx-auto mb-6 h-20 object-contain"
                />

                <h2 className="text-4xl font-bold text-[#5B2B60]">
                  {stat.value}
                </h2>

                <p className="mt-3 text-gray-600 text-lg">
                  {stat.label}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}