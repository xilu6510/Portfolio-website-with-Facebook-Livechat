import React, { useState } from "react";
import "./projects.css";
import Website1 from "../../assets/website1.png";
import Website2 from "../../assets/website2.png";
import Website3 from "../../assets/website3.png";
import Website4 from "../../assets/website4.png";
import Website5 from "../../assets/website5.png";
import Website6 from "../../assets/website6.png";
import Website7 from "../../assets/website7.png";
import Website8 from "../../assets/website8.png";
import Website9 from "../../assets/website9.png";
import Website10 from "../../assets/website10.png";
import Website11 from "../../assets/website11.png";
import Website12 from "../../assets/website12.png";

const Websites = [
  {
    id: 1,
    image: Website1,
    title: "Jerome Laxale MP",
    link: "https://jeromelaxale.com/",
    category: "Personal",
  },
  {
    id: 2,
    image: Website2,
    title: "Spa Moment",
    link: "https://shop.spamoment.com.au/",
    category: "Ecommerce",
  },
  {
    id: 3,
    image: Website3,
    title: "La Peau",
    link: "https://lapeau.com.au/",
    category: "Ecommerce",
  },
  {
    id: 4,
    image: Website4,
    title: "The Killer Coffee Co.",
    link: "https://killercoffeeco.com.au/",
    category: "Ecommerce",
  },
  {
    id: 5,
    image: Website5,
    title: "Vie Vie S",
    link: "https://vievies.com.au/",
    category: "Ecommerce",
  },
  {
    id: 6,
    image: Website6,
    title: "NB Skin",
    link: "https://www.nbskin.com.au/",
    category: "Ecommerce",
  },
  {
    id: 7,
    image: Website7,
    title: "Seymour Building Supplies",
    link: "https://seymourbuildingsupplies.com.au/",
    category: "Business",
  },
  {
    id: 8,
    image: Website8,
    title: "Geyer",
    link: "https://geyer.design/",
    category: "Business",
  },
  {
    id: 9,
    image: Website9,
    title: "Corner Bar",
    link: "https://cornerbarrozelle.com.au/",
    category: "Business",
  },
  {
    id: 10,
    image: Website10,
    title: "Product of Italy",
    link: "https://productofitaly.com.au/",
    category: "Business",
  },
  {
    id: 11,
    image: Website11,
    title: "Calabria Club",
    link: "https://calabriabowling.com.au/",
    category: "Business",
  },
  {
    id: 12,
    image: Website12,
    title: "OC Skin",
    link: "https://ocskin.com.au/",
    category: "Business",
  },
];

const Projects = () => {
  const [items, setItems] = useState(Websites);
  // filter for bigger screen
  const filterItem = (categoryItem) => {
    const updateItems = Websites.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });

    setItems(updateItems);
  };

  // filter for smaller screen
  const getInitialState = () => {
    const value = "All Websites";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value !== "All Websites") {
      const updateItems = Websites.filter((currentElement) => {
        return currentElement.category === e.target.value;
      });

      setItems(updateItems);
    } else {
      setItems(Websites);
    }
  };

  return (
    <section className="projects container section" id="projects">
      <h2 className="section-title">- Projects</h2>
      <p className="des">
        (created by WordPress, and customised by html, css, and jQuery)
      </p>
      {/* filter for bigger screen */}
      <div className="projects-filter" id="bigger-filter">
        <span className="projects-item" onClick={() => setItems(Websites)}>
          All Websites
        </span>
        <span className="projects-item" onClick={() => filterItem("Personal")}>
          Personal Websites
        </span>
        <span className="projects-item" onClick={() => filterItem("Ecommerce")}>
          Ecommerce Websites
        </span>
        <span className="projects-item" onClick={() => filterItem("Business")}>
          Business Websites
        </span>
      </div>

      {/* filter for smaller screen */}
      <div className="projects-filter-small">
        <select
          name="small-filter"
          value={value}
          id="smaller-filter"
          className="small-filter"
          onChange={handleChange}
        >
          <option value="Everything" className="small-filter-item">
            All Websites
          </option>
          <option value="Personal" className="small-filter-item">
            Personal Website
          </option>
          <option value="Ecommerce" className="small-filter-item">
            Ecommerce Website
          </option>
          <option value="Business" className="small-filter-item">
            Business Website
          </option>
        </select>
      </div>
      <div className="projects-container grid">
        {items.map((element) => {
          const { id, image, link, title } = element;
          return (
            <div className="projects-card" key={id}>
              <div className="projects-thumbnail">
                <img src={image} className="projects-img" />
              </div>

              <a href={link} target="_blank" className="projects-button">
                <h3 className="projects-title">{title}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
