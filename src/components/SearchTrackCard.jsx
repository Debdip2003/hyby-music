import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import song from "../assets/song.mp3"; // Import local song

const SearchTrackCard = ({ track }) => {
  const [audio, setAudio] = useState(null);
  console.log(track);

  const handlePlay = () => {
    if (audio) {
      audio.pause(); // Pause any playing audio
    }

    const newAudio = new Audio(song); // Always play local file
    newAudio.play();
    setAudio(newAudio);
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setAudio(null));
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", () => setAudio(null));
      }
    };
  }, [audio]);

  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition m-10"
      onClick={handlePlay}
    >
      <img
        src={
          track?.album?.images?.[0]?.url || "https://via.placeholder.com/150"
        }
        alt={track?.name || "Unknown Track"}
        className="w-48 h-48 object-cover rounded-lg"
      />
      <h3 className="text-white text-lg font-bold mt-2">{track.name}</h3>
      <p className="text-gray-400 text-sm">
        {track.artists.map((artist) => artist.name).join(", ")}
      </p>
    </div>
  );
};

SearchTrackCard.propTypes = {
  track: PropTypes.object.isRequired,
};

export default SearchTrackCard;
