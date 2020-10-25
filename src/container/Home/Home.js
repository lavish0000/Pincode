import { useNavigate } from "@reach/router";
import { useEffect, useRef, useState } from "react";
import "./Home.scss";

const Home = ({ search: searchParam }) => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const [width, setWidth] = useState("22em");
  const [search, setSearch] = useState("");
  useEffect(() => {
    setTimeout(() => {
      searchRef.current.click();
    }, 500);
  }, []);

  const searchHandler = (e) => {
    setWidth(e.target.checked ? "20em" : "22em");
    search && navigate(`/${search}`);
  };

  return (
    <div className="home">
      <div>
        <h3>Search For Pincode</h3>
      </div>
      <div className="home-search">
        <input
          id="search-btn"
          type="checkbox"
          ref={searchRef}
          onClick={searchHandler}
        />
        <label className="search-btn" htmlFor="search-btn">
          Show search bar
        </label>
        <input
          id="search-bar"
          value={search}
          type="text"
          placeholder="Search..."
          style={{ width }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {searchParam && (
        <div className="results">
          <h4 style={{ fontSize: 20 }}>Results</h4>
          <div className="results-data">{searchParam}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
