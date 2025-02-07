import AlbumGrid from "../components/AlbumGrid";
import ArrowButtons from "../components/ArrowButtons";
import Header from "../components/Header";

const Albums = () => {
  return (
    <div className="mb-36">
      <Header description="Stream music ad-free and access millions of songs without interruption.">
        This Weeks Hottest Tracks
      </Header>
      <ArrowButtons />
      <AlbumGrid />
      <Header description=" Enjoy uninterrupted music streaming wiht our ad-free platform, offering access to millions of songs. ">
        Discover Infinite Music Collection
      </Header>
      <ArrowButtons />
      <AlbumGrid />
    </div>
  );
};

export default Albums;
