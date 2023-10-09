import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/data";
import Slider from "../../components/carousel/Carousel";
import Collapse from "../../components/collapse/Collapse";
import greyStar from "../../assets/grey_star.png";
import redStar from "../../assets/red_star.png";

export default function AccomodationInfo() {
  let { id } = useParams();

  useEffect(() => {}, []);
  let dataCurrentAccomodation = datas.find((data) => data.id === id);
  if (!dataCurrentAccomodation) {
    window.location = "/404";
  }

  return (
    <>
      <Slider imageSlider={dataCurrentAccomodation.pictures} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            <h1>{dataCurrentAccomodation.title}</h1>
            <p>{dataCurrentAccomodation.location}</p>
            <div>
              {dataCurrentAccomodation.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="accomodation_content_host">
            <div>
              <div className="accomodation_content_host_name">
                <span>{dataCurrentAccomodation.host.name.split(" ")[0]}</span>
                <span>{dataCurrentAccomodation.host.name.split(" ")[1]}</span>
              </div>
              <img
                src={dataCurrentAccomodation.host.picture}
                alt="host of this accomodation"
              />
            </div>

            <div className="accomodation_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={
                      ratingValue <= dataCurrentAccomodation.rating
                        ? redStar
                        : greyStar
                    }
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse
              title={"Description"}
              content={dataCurrentAccomodation.description}
            />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse
              title={"Équipements"}
              content={dataCurrentAccomodation.equipments}
            />
          </div>
        </div>
      </main>
    </>
  );
}
