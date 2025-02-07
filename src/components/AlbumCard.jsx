import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

const AlbumCard = ({ album }) => {
  const { albumCover, albumName, artistName } = album;

  return (
    <div className="relative">
      {" "}
      <div className="bg-black rounded-lg w-60">
        {/*display images for album cover */}
        <img
          src={albumCover}
          alt={albumName}
          className="rounded-lg p-2  object-cover"
        />
        {/*display album name and album artist */}
        <div className="p-2">
          <h3 className="text-lg font-semibold text-white">{albumName}</h3>
          <p className="text-sm mt-1 text-white">{artistName}</p>
        </div>
      </div>
      {/* display play button */}
      <button className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-full p-2">
        <FaPlay className=" text-black size-5" />
      </button>
    </div>
  );
};

// define the prop types
AlbumCard.propTypes = {
  album: PropTypes.shape({
    albumCover: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
