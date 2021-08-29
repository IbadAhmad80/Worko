import { data } from "./data";
import React from "react";
import { Image } from "react-bootstrap";
// import GLightbox from "glightbox";

export default function Gallery() {
  const [selectedCategory, setCategory] = React.useState("all");
  const [activeItems, setActiveItems] = React.useState(null);

  React.useEffect(() => {
    //removing the previous active category
    document.querySelector(".filter-active").classList.remove("filter-active");
    //setting the active category
    document
      .querySelector(`#${selectedCategory}`)
      .classList.add("filter-active");
    // if cateogry is all then return packages from all categories
    if (selectedCategory === "all") return setActiveItems(data);
    // if its other than all only return packages from that category
    const filtereditems =
      data &&
      data.filter((item) => {
        return item.data_filter === selectedCategory;
      });
    // setting items accroding to the active category
    setActiveItems(filtereditems);
  }, [selectedCategory]);

  return (
    <div className="portfolio mb-5 pb-4" id="portfolio">
      <div className="container">
        <div className="container-xxl">
          <div className="row w-100">
            <div className="col-lg-12 d-flex justify-content-center text-center mt-5">
              <ul id="portfolio-flters">
                <li
                  id="all"
                  className="filter-active d-inline-block px-3 mx-2 py-1 fw-bold "
                  onClick={() => setCategory("all")}
                >
                  All
                </li>
                <li
                  id="app"
                  className="d-inline-block px-3 mx-2 py-1 fw-bold"
                  onClick={() => setCategory("app")}
                >
                  App
                </li>
                <li
                  id="card"
                  className="d-inline-block px-3 mx-2 py-1 fw-bold"
                  onClick={() => setCategory("card")}
                >
                  Card
                </li>
                <li
                  id="web"
                  className="d-inline-block px-3 mx-2 py-1 fw-bold"
                  onClick={() => setCategory("web")}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          {activeItems &&
            activeItems.map((item) => {
              return <PortfolioItem item={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
}

function PortfolioItem({ item: { image } }) {
  return (
    <div className="img-gallery col-md-6 col-lg-4 m-1 my-3 mx-auto overflow-hidden">
      <Image src={image} className="portfolio-item" fluid />
    </div>
  );
}
