interface SpeakerCardProps {
  image: string;
  name: string;
  role: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, role }) => {
  return (
    <div className="relative flex flex-col items-center text-center w-80 bg-white border-[#852e4e] rounded-xl pt-16 pb-6 px-4 shadow-lg shadow-[#852e4e]">
      <img src={image} alt={name} className="w-24 h-24 rounded-full" />
      <h3 className="text-2xl text-[#852e4e] font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{role}</p>
    </div>
  );
}
        
export default SpeakerCard;