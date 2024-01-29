import "./SearchBar.css";
import { useState } from 'react';

export default function SearchBar(props) {
    // State for search
    const [search, setSearch] = useState("");

    
    /**
     * Handles the change event and updates the search value.
     *
     * @param {object} event - The event object
     * @return {void} 
     */
    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    /**
     * Submits the search and updates the search query if the search is not empty.
     *
     * @param {event} event - The event object
     * @return {undefined} 
     */
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