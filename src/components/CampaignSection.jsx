import { useState } from "react";
import CampaignCard from "./CampaignCard";
import { campaigns } from "../Data/Campaigns";

export default function CampaignSection() {
  const categories = [
    { id: 1, name: "Education", value: "Education", icon: "/Education.png" },
    { id: 2, name: "Health", value: "Health", icon: "/Health.png" },
    { id: 3, name: "Children", value: "Children", icon: "/Children.png" },
    { id: 4, name: "Animals", value: "Animals", icon: "/Animal.png" },
  ];

  const [activeCategory, setActiveCategory] = useState("Education");

  const filteredCampaigns = campaigns.filter(
    (c) => c.category === activeCategory,
  );

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-gray-400 tracking-widest">
            Our Campaigns
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Causes You Can Support
          </h2>
        </div>

        <div className="flex justify-center gap-12 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.value)}
              className="flex flex-col items-center"
            >
              <img
                src={cat.icon}
                alt={cat.name}
                className="w-12 h-12 object-contain"
              />

              <span
                className={`mt-3 font-semibold transition  ${
                  activeCategory === cat.value
                    ? "text-[#99C254]"
                    : "text-gray-700"
                }`}
              >
                {cat.name.toUpperCase()}
              </span>

              {activeCategory === cat.value && (
                <div className="mt-2 w-24 h-[2px] bg-[#99C254]"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            MORE CAUSES
          </button>
        </div>
      </div>
    </section>
  );
}
