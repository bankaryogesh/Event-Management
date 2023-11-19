import { Menu } from '../../../menu/menu.component'
import './main-menu.component.css'

export const MainMenu = () => {
  return (
  <div className="header-bg  menu "> 
    <div className="row ">
      <div className="col-3 text-white">
        <h4 className="m-2">LOGO</h4>
      </div>
      <div className="col-7">
        <Menu></Menu>
      </div>
      <div className="col-2 ">
        <input type="button" value="LOGIN" className="btn btn-primary" />
        <input
          type="button"
          value="SIGNUP"
          className="btn btn-secondary ms-2"
        />
      </div>
    </div>
    </div>
  );
};
