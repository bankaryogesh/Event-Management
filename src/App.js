import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import { UserRegistraion } from './components/user/user-registration/user-registration.component';
// import UserLogin from './components/user/user-login/user-login.component';
import { AppRouter } from "./app.router";
// import { Home } from './components/home/home.component';
import { Menu } from "./components/menu/menu.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <section className="header-bg">
          <div className="row menu">
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

            <div>
              <AppRouter></AppRouter>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
