export default function CampaignCard({ campaign }) {
  const percentage = Math.min((campaign.raised / campaign.goal) * 100, 100);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{campaign.title}</h3>

        <p className="text-gray-600 font-extralight text-xl line-clamp-3">{campaign.description}</p>

        <div>
          <div className="w-full bg-gray-200 h-4 rounded-sm">
            <div
              className="bg-[#99C254] h-4 rounded-sm transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between text-sm text-black">
          <div>
            <p className="font-bold">
              Goal: ${campaign.goal.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 font-bold">
              Raised: ${campaign.raised.toLocaleString()}
            </p>
          </div>
          <div className="text-right ">
            <p className="font-bold">{campaign.donations}</p>
            <p className="text-xs text-gray-500">donations</p>
          </div>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}
