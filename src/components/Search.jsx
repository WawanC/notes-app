import "../styles/Search.css";

const Search = (props) => {
  const onChangeKeyword = (ev) => props.onChange(ev.target.value.trim());

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={props.value}
        placeholder="Enter Note Title Here..."
        onChange={onChangeKeyword}
      />
    </div>
  );
};

export default Search;
