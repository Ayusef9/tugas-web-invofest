interface SpeakerCardProps {
  image: string;
  name: string;
  role: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, role }) => {
  return (
    <div className="relative flex flex-col items-center">

      
      <div className="relative z-10">
        <div className="w-36 h-36 rounded-full border-[6px] border-[#852e4e] bg-white p-1 shadow-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      
      <div className="relative -mt-15 pt-20 pb-6 px-5 w-72 bg-white rounded-2xl shadow-lg border border-[#852e4e]/30 text-center">
        
        <div className="absolute inset-0 border-2 border-[#852e4e] rounded-2xl -z-10 translate-y-3"></div>

        <h3 className="text-lg font-semibold text-[#852e4e]">
          {name}
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-snug">
          {role}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;