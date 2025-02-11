import { FaPlay } from "react-icons/fa";
import PropTypes from "prop-types";

const AlbumCard = ({ album }) => {
  if (!album) return null;
  const { albumCover, albumName, artistName } = album;

  return (
    <div className="relative bg-black rounded-lg w-60 p-4 transition-transform transform hover:scale-105">
      {/* Display images for album cover */}
      <img
        src={albumCover}
        alt={albumName}
        className="rounded-lg object-cover w-full h-60"
      />

      {/* Display album name and album artist */}
      <div className="p-2 text-center">
        <h3 className="text-lg font-semibold text-white">{albumName}</h3>
        <p className="text-sm mt-1 text-gray-400">{artistName}</p>
      </div>

      {/* Display play button with hover effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
        <button className="bg-white text-black rounded-full p-3 shadow-lg">
          <FaPlay className="size-6" />
        </button>
      </div>
    </div>
  );
};

// Define prop types
AlbumCard.propTypes = {
  album: PropTypes.shape({
    albumCover: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
