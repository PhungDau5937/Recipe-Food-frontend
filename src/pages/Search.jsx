import { React, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Header/Card";

const Search = () => {
  const searchText = useParams();

  const [query, setQuery] = useState("");
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("query");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => { 
    const fetchItem = async () => {
      setLoading(true);
      try {
        const reponse = await axios.get(`http://localhost:5000/api/items`, {
          params: { q: query },
        });
        setResult(reponse.data);
      } catch (error) {
        setError(error.message || "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="px-6 lg:px-12 py-10">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center">
        <IoSearch className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          value={query}
          onChange={handleSearch}
          className="outline-none w-full placeholder:text-[#1b2629]"
          name="query"
          type="search"
          placeholder="Search for a recipe"
          id="search"
          required=""
        />
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Unknown Error Happens...</div>}

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results && results?.map((item) => <Card item={item} key={item._id} />)}
      </ul>
    </div>
  );
};

export default Search;
