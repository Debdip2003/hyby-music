import PropTypes from "prop-types";
import SearchTrackCard from "./SearchTrackCard";

const SearchTrackGrid = ({ albums }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {albums.map((album) =>
        album.tracks.map((track) => (
          <SearchTrackCard key={track.id} track={track} />
        ))
      )}
    </div>
  );
};

SearchTrackGrid.propTypes = {
  albums: PropTypes.array.isRequired,
};

export default SearchTrackGrid;
