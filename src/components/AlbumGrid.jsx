import albumDetails from "../data/AlbumDetails";
import AlbumCard from "./AlbumCard";

const AlbumGrid = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="flex justify-evenly md:flex flex-wrap gap-6 place-items-center">
        {albumDetails.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
