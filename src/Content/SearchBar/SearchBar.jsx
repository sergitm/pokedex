import "./SearchBar.css";
import { useState } from 'react';

export default function SearchBar(props) {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    const submitSearch = (event) => {
        event.preventDefault();
        if (search === "") {
            props.changePage(1);
        } else {
            props.setSearchQuery(search.toLowerCase());
        }
    }

    return (
        <form onSubmit={submitSearch}>
            <div className="input-group">
                <input className="form-control " type="text" id="search" placeholder="Name or Pokedex #" value={search} onChange={handleChange} />
                <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} type="submit" id="searchButton">Search</button>
            </div>
        </form>
    );
}