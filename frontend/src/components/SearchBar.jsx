const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        role="searchbox"
        placeholder="Buscar plomero, electricista..." 
        className="search-bar__input"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
