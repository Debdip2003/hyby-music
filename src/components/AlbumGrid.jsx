import albumDetails from "../data/AlbumDetails";
import AlbumCard from "./AlbumCard";

const AlbumGrid = () => {
  return (
    <div>
      {" "}
      <div className="w-full flex items-center justify-around px-20 ">
        {albumDetails.map((album, index) => (
          <AlbumCard key={index} album={album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
