import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const ArtistCard = ({ artist }) => {
  const { artistCover, artistName, numberOfSongs } = artist;

  return (
    <div className="mt-10">
      <div className="w-60">
        {/* display of images of artist cover */}
        <img
          src={artistCover}
          alt={artistName}
          className="rounded-full p-2 object-cover"
        />
        {/* display of artist name and number of songs */}
        <div className="p-2 leading-loose text-xl font-semibold">
          <h3 className=" text-2xl  ">{artistName}</h3>
          <p className=" mt-1 ">{numberOfSongs}</p>
          <div className=" flex items-center gap-5">
            Explore{" "}
            <span className="text-yellow-500">
              <FaArrowRight />
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

// define the prop types

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    artistCover: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    numberOfSongs: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistCard;
