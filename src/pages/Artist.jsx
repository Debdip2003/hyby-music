import ArtistGrid from "../components/ArtistGrid";
import Button from "../components/Button";
import Header from "../components/Header";

const Artist = () => {
  return (
    <div className="mb-36">
      <Header description=" Discover today's top artists and revitalize your music library with our curated selection of trending musicians, bands and singers, from emerging talents to established stars. ">
        TRENDING ARTISTS
      </Header>
      <ArtistGrid />
      <ArtistGrid />
      {/* explore button */}
      <div className="flex justify-center mt-16">
        {" "}
        <div className="w-1/6 py-3 rounded-md bg-black text-white">
          {" "}
          <Button className="w-full">Explore</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Artist;
