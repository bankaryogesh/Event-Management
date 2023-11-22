
import "../search-bar/search-bar.component.css"

export function SearchBar() {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Search ?"  className="search-bar-box  form-control"/>
        </div>
        <div className="col-6">
          <select name="" id="" className="m-2 border-remove"> 
            <option value="">Event1</option>
            <option value="">Event2 </option>
            <option value="">Event3 </option>
          </select>
          <select name="" id="" className="m-2 border-remove">
            <option value="">Event1</option>
            <option value="">Event2 </option>
            <option value="">Event3 </option>
          </select>
          <select name="" id="" className="m-2 border-remove">
            <option value="">Event1</option>
            <option value="">Event2 </option>
            <option value="">Event3 </option>
          </select>
        </div>
        <div className="col-2">
        
            <input type="button" className="btn btn-danger" value="Search"  />
        </div>
      </div>
    </div>
  );
}
