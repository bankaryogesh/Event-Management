import { Link } from "react-router-dom";
import "./menu.component.css";

export function Menu() {
  return (
    <div className="menu">
      <label>
        <Link to="/" className="menu-item">
          HOME
        </Link>
      </label>

      <label>
        <Link to="/user/event-catagory/birthday-event" className="menu-item">
          BIRTHDAY-EVENT
        </Link>
      </label>

      <label>
        <Link to="/user/event-catagory/anniversary-event" className="menu-item">
          ANNIVERSARY-EVENT
        </Link>
      </label>
      <label>
        <Link to="/user/event-catagory/wedding-event" className="menu-item">
          WEDDING-EVENT
        </Link>
      </label>

      <label>
        <Link to="/admin/event/gallery" className="menu-item">
          OUR-GALLERY
        </Link>
      </label>
      
    </div>
  );
}
