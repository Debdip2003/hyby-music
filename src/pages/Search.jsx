import SearchTrackGrid from "../components/SearchTrackGrid";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";

const CLIENT_ID = "b4da6072b04d44f395e7cb9e03042c7b";
const CLIENT_SECRET = "2f2bcef377524be5ae29a25cb307f3a1";
const API_URL = "https://api.spotify.com/v1/search";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  // Fetch access token from Spotify
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
          }).toString(),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  // Fetch albums when searchQuery changes
  useEffect(() => {
    if (!searchQuery || !accessToken) return;

    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `${API_URL}?q=${encodeURIComponent(searchQuery)}&type=album`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.json();
          throw new Error(`Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        // Fetch tracks for each album to get preview URLs
        const albumsWithTracks = await Promise.all(
          data.albums?.items.map(async (album) => {
            const trackResponse = await fetch(
              `https://api.spotify.com/v1/albums/${album.id}/tracks`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );

            if (!trackResponse.ok) {
              console.error(`Error fetching tracks for album ${album.id}`);
              return album; // Return the album without tracks
            }

            const trackData = await trackResponse.json();
            console.log("Fetched track data for album:", album.id, trackData);
            return {
              ...album,
              tracks: trackData.items, // Add track data with `preview_url`
            };
          }) || []
        );

        setAlbums(albumsWithTracks);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [searchQuery, accessToken]);

  // Handle search input
  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearchQuery} />
      <SearchTrackGrid albums={albums} />
    </>
  );
};

export default Search;
