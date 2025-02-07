import artistDetails from "../data/ArtistDetails";
import ArtistCard from "./ArtistCard";

const ArtistGrid = () => {
  return (
    <div className="w-full px-6 sm:px-20">
      <div className="flex justify-evenly md:flex flex-wrap place-items-center">
        {artistDetails.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;
