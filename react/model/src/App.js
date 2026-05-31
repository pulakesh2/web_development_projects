import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const API_KEY = "8a1cdba449mshbbba5af1180ff88p1e5180jsna8486beee6e8";
const API_HOST = "quality-porn.p.rapidapi.com";

const Home = () => {
  const [query, setQuery] = useState("");
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchModels = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://${API_HOST}/pornstar/search?query=${query}&responseProfileImage=1`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
          },
        }
      );
      const result = await response.json();
      setModels(result.models || []);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search for a Model</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter model name..."
        className="border p-2 w-full rounded"
      />
      <button
        onClick={searchModels}
        className="mt-2 bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {loading && <p>Loading...</p>}
        {models.map((model, index) => (
          <Link
            to={`/model/${model.name}`}
            key={index}
            className="block border rounded p-2"
          >
            <img
              src={model.profileImage}
              alt={model.name}
              className="w-full h-40 object-cover rounded"
            />
            <p className="text-center mt-2 font-bold">{model.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const ModelPage = () => {
  const { name } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://${API_HOST}/pornstar/search?query=${name}&responseImages=1`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": API_KEY,
              "x-rapidapi-host": API_HOST,
            },
          }
        );
        const result = await response.json();
        setImages(result.images || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setLoading(false);
    };
    fetchImages();
  }, [name]);

  console.log(images);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500">
        &larr; Back to search
      </Link>
      <h1 className="text-2xl font-bold mb-4">Images of {name}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Model ${name}`}
              className="w-full h-40 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:name" element={<ModelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
