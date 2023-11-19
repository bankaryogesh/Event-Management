
import "../search-bar/search-bar.component.css"

export function SearchBar() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="What You're Looking For ?"  className="search-bar-box  form-control"/>
        </div>
        <div className="col-6">
          <select name="" id="" className="m-2 border-remove"> 
            <option value="">Birthday</option>
            <option value="">Wedding </option>
            <option value="">Anniversary </option>
          </select>
          <select name="" id="" className="m-2 border-remove">
            <option value="">BIRTHDAY</option>
            <option value="">WEDDING </option>
            <option value="">ANNIVERSARY </option>
          </select>
          <select name="" id="" className="m-2 border-remove">
            <option value="">BIRTHDAY</option>
            <option value="">WEDDING </option>
            <option value="">ANNIVERSARY </option>
          </select>
        </div>
        <div className="col-2">
        
            <input type="button" className="btn btn-danger" value="Search"  />
        </div>
      </div>
    </div>
  );
}
