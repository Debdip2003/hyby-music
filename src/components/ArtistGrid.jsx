import artistDetails from "../data/ArtistDetails";
import ArtistCard from "./ArtistCard";

const ArtistGrid = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex items-center justify-around px-20 ">
        {artistDetails.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;
