import "./home.component.css";
import { SearchBar } from "./search-bar/search-bar.component";
import { FaBirthdayCake } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

export function Home() {
  return (
    <div>
      <div>
        <h1 className="text-center text-white p-5"> Find Nearby Location</h1>
        <h1 className="text-center text-secondary p-5">
          Explore top-rated attractions, activities and more!
        </h1>
        <div className="row">
          <div className="col-1"></div>
          <div className=" search-bar-bg col-10">
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>

      {/* BODY */}

      {/* popular categories */}
      <div className="popular">
        <h3 className="text-center m-3 p-4 decoration">POPULAR CATEGORIES</h3>
        <div className="popular-cat-main">
          <div className="row">
            <div className="col-2 popular-cat">
              <h4>BIRTHDAY</h4>
              <span className="fs-2">2</span>
              <div>
                <FaBirthdayCake className="fs-2 m-3"></FaBirthdayCake>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>WEDDING</h4>
              <span className="fs-2">2</span>
              <div>
                <BsFillHeartFill className="fs-2 m-3"></BsFillHeartFill>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>ANNIVERSARY</h4>
              <span className="fs-2 m-3">2</span>
              <div>
                <GiPartyPopper className="fs-2 m-3"></GiPartyPopper>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>BIRTHDAY</h4>
              <span className="fs-2">2</span>
              <div>
                <FaBirthdayCake className="fs-2 m-3"></FaBirthdayCake>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>WEDDING</h4>
              <span className="fs-2">2</span>
              <div>
                <BsFillHeartFill className="fs-2 m-3"></BsFillHeartFill>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>ANNIVERSARY</h4>
              <span className="fs-2 m-3">2</span>
              <div>
                <GiPartyPopper className="fs-2 m-3"></GiPartyPopper>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-cat-main">
          <div className="row">
            <div className="col-2 popular-cat">
              <h4>BIRTHDAY</h4>
              <span className="fs-2">2</span>
              <div>
                <FaBirthdayCake className="fs-2 m-3"></FaBirthdayCake>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>WEDDING</h4>
              <span className="fs-2">2</span>
              <div>
                <BsFillHeartFill className="fs-2 m-3"></BsFillHeartFill>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>ANNIVERSARY</h4>
              <span className="fs-2 m-3">2</span>
              <div>
                <GiPartyPopper className="fs-2 m-3"></GiPartyPopper>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>BIRTHDAY</h4>
              <span className="fs-2">2</span>
              <div>
                <FaBirthdayCake className="fs-2 m-3"></FaBirthdayCake>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>WEDDING</h4>
              <span className="fs-2">2</span>
              <div>
                <BsFillHeartFill className="fs-2 m-3"></BsFillHeartFill>
              </div>
            </div>
            <div className="col-2 popular-cat">
              <h4>ANNIVERSARY</h4>
              <span className="fs-2 m-3">2</span>
              <div>
                <GiPartyPopper className="fs-2 m-3"></GiPartyPopper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center m-3 p-3 decoration"> MOST VISITED PLACES</h2>

      <div className="row main-mostviewed-img ">
        <div className="col-4 mostviewed-img img ">
          <img
            src="https://www.verywellhealth.com/thmb/7R4d3vLIcvyQMuhID1wSbfkjP4Q=/2121x1414/filters:fill(87E3EF,1)/skyscrapers-of-los-angeles-skyline-architecture-urban-cityscape--478821794-5b5c725446e0fb002c6119ca.jpg"
            alt="Description"
          />
          <h5 className="text-center">PARIS</h5>
        </div>
        <div className="col-4 mostviewed-img">
          <img
            src="https://i.insider.com/4e370e14eab8eabf32000012?width=600&format=jpeg&auto=webp"
            alt="Description"
          />
          <h5 className="text-center">DUBAI</h5>
        </div>
        <div className="col-4 mostviewed-img ">
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/westlake-theatre-sign-1-dtla-photography.jpg"
            alt="Description"
          />
          <h5 className="text-center">LOS ANGELS</h5>
        </div>
        <div className="col-4 mostviewed-img  ">
          <img
            src="https://www.18travel18.com/wp-content/uploads/2021/01/ROAD-TRIP-77.jpg"
            alt="Description"
          />
          <h5 className="text-center">MALDEAVES</h5>
        </div>
        <div className="col-4 mostviewed-img ">
          <img
            src="https://th.bing.com/th/id/R.284fc1dee93f2edf024d20a4dff2c60f?rik=Eodrs3wa0QdoKQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f132972-England-landscape-architecture-nature-Tower_Bridge-UK.jpg&ehk=h7jPsIkcD51%2fD1eqj0x%2fBRY5JwtvaYrjkBmtkhgdbRs%3d&risl=&pid=ImgRaw&r=0"
            alt="Description"
          />
          <h5 className="text-center">LONDON</h5>
        </div>
        <div className="col-4 mostviewed-img ">
          <img
            src="https://th.bing.com/th/id/R.137fda1000940d7f4d80e4f688550afe?rik=MvLylhu%2bkn4kHQ&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-17%2fSingapore-City-HD-Desktop-Wallpaper-44200.jpg&ehk=QCIiMzH7bBBlyUOYPtTXUeb%2fHrMumFf%2fYvDegdW%2fXlM%3d&risl=&pid=ImgRaw&r=0"
            alt="Description"
          />
          <h5 className="text-center">SINGAPORE</h5>
        </div>
      </div>
      {/* why choose us */}
      <h3 className="text-center m-3 p-4 decoration">WHY CHOOSE US</h3>
      <div className="why-us-main">
        <div className="row">
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">01</span> &nbsp; &nbsp;LOCATION
              MANAGEMENT
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">02</span> &nbsp; &nbsp;EVENT
              MANAGEMENT
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">03</span> &nbsp; &nbsp;MULTIPLE
              EVENTS
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
        </div>
      </div>

      <div className="why-us-main">
        <div className="row">
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">04</span> &nbsp; &nbsp;LOCATION
              MANAGEMENT
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">05</span> &nbsp; &nbsp;MULTIPLE
              EVENTS
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
          <div className="col-4 why-us">
            <h5 className="p-3 m-3">
              <span className="border-radius">06</span> &nbsp; &nbsp;EVENT
              MANAGEMENT
            </h5>
            <h6 className="text-center m-3 p-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nib
            </h6>
          </div>
        </div>
      </div>

      {/* FEATURED EVENTS */}
      <div className="decoration">
        <h3 className="text-center m-3 p-4 ">FEATURED EVENTS</h3>
      </div>
      <div>
        <div className="row  p-5">
          <div className="col-3 ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://th.bing.com/th/id/R.3fadc897bdfc9349ccd78d7df713a172?rik=VlvY47r7ci016g&riu=http%3a%2f%2ffarm9.staticflickr.com%2f8301%2f7819583902_e47eb315d3_o.jpg&ehk=%2fARjXpe0ANNZBXcQ0mvKX1WaWFBOKsGX0skaAskBZWA%3d&risl=&pid=ImgRaw&r=0"
                alt="Description"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3  ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://img.itinari.com/pages/images/original/25e27ec0-df66-45bf-8f82-178bc44056d0-finale-ligure.jpg?ch=DPR&dpr=1&w=1600&s=80f0a308cbc96ea21182023eebeb774b"
                alt="Description"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif"
                alt="Description"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 ">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif"
                alt="Description"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration">
          <h3 className="text-center m-3 p-4 ">LEATEST NEWS</h3>
        </div>
        <div>
          <div className="row  p-5">
            <div className="col-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://th.bing.com/th/id/R.3fadc897bdfc9349ccd78d7df713a172?rik=VlvY47r7ci016g&riu=http%3a%2f%2ffarm9.staticflickr.com%2f8301%2f7819583902_e47eb315d3_o.jpg&ehk=%2fARjXpe0ANNZBXcQ0mvKX1WaWFBOKsGX0skaAskBZWA%3d&risl=&pid=ImgRaw&r=0"
                  alt="Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3  ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://img.itinari.com/pages/images/original/25e27ec0-df66-45bf-8f82-178bc44056d0-finale-ligure.jpg?ch=DPR&dpr=1&w=1600&s=80f0a308cbc96ea21182023eebeb774b"
                  alt="Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif"
                  alt="Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif"
                  alt="Description"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration">
          <h3 className="text-center m-3 p-4 ">FOOTER</h3>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
