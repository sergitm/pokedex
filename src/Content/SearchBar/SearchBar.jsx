import "./SearchBar.css";

export default function SearchBar(props) {
    return (
        <div className="input-group">
            <input className="form-control " type="text" id="search" placeholder="Name or Pokedex #" />
            <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} type="button" id="searchButton">Search</button>
        </div>
    );
}