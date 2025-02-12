import { useEffect, useState } from "react";

const AdminMainSection = () => {
  const [musicTitle, setMusicTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState(null);
  const [tracks, setTracks] = useState([]);

  // Load tracks from localStorage when component mounts
  useEffect(() => {
    const savedTracks = JSON.parse(localStorage.getItem("tracks"));
    if (savedTracks) {
      setTracks(savedTracks);
    }
  }, []);

  // Save tracks to localStorage whenever tracks change
  useEffect(() => {
    localStorage.setItem("tracks", JSON.stringify(tracks));
  }, [tracks]);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!musicTitle || !artist || !file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newTrack = {
        id: Date.now(), // Generate a unique ID
        title: musicTitle,
        artist: artist,
        fileURL: reader.result, // Store file as base64
      };

      const updatedTracks = [...tracks, newTrack];
      setTracks(updatedTracks);

      // Save to localStorage immediately
      localStorage.setItem("tracks", JSON.stringify(updatedTracks));

      // Reset form fields
      setMusicTitle("");
      setArtist("");
      setFile(null);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto flex gap-6">
      {/* Upload Section */}
      <div className="w-1/3 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Upload Music</h2>
        <input
          type="text"
          placeholder="Music Title"
          className="w-full p-2 border rounded mb-2"
          value={musicTitle}
          onChange={(e) => setMusicTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Artist"
          className="w-full p-2 border rounded mb-2"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          type="file"
          accept="audio/*"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button
          onClick={handleUpload}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition hover:cursor-pointer"
        >
          Upload
        </button>
      </div>

      {/* Uploaded Tracks List */}
      <div className="w-2/3 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-4">Uploaded Tracks</h2>
        {tracks.length === 0 ? (
          <p className="text-gray-500">No tracks uploaded yet.</p>
        ) : (
          <ul className="space-y-4">
            {tracks.map((track) => (
              <li
                key={track.id}
                className="flex justify-between items-center border-b py-2 px-4 rounded-md shadow-sm"
              >
                <div>
                  <p className="font-semibold text-gray-800">{track.title}</p>
                  <p className="text-sm text-gray-500">{track.artist}</p>
                </div>
                <audio controls className="w-40">
                  <source src={track.fileURL} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminMainSection;
