import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ArrowButtons from "../components/ArrowButtons";
import AlbumGrid from "../components/AlbumGrid";
import ArtistGrid from "../components/ArtistGrid";
import NewsLetterSignup from "../components/NewsLetterSignup";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection />
      {/* album section */}
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
      {/* artist section */}
      <Header description=" Discover today's top artists and revitalize your music library with our curated selection of trending musicians, bands and singers, from emerging talents to established stars. ">
        TRENDING ARTISTS
      </Header>
      <ArtistGrid />

      {/* explore button */}
      <div className="flex justify-center mt-16">
        {" "}
        <div className="w-1/6 py-3 rounded-md bg-black text-white">
          {" "}
          <Button className="w-full">Explore</Button>{" "}
        </div>
      </div>
      {/* newsletter section */}
      <NewsLetterSignup />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
