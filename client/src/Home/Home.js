import React, { useState } from "react";
import classNames from "classnames";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import city1 from "../assets/imgs/city1.jpg";
import city2 from "../assets/imgs/city2.jpg";
import city3 from "../assets/imgs/city2.jpg";
import "./Home.css";

export const SliderData = [
  {
    image: city1,
  },
  {
    image: city2,
  },
  {
    image:
      "https://searchthisweb.com/wallpaper/thumb1000/main1000_manhattan_3840x2560_dof6i.jpg",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <>
      <div className="title-wrapper">
        <p className="title">
          ООО «АгенПрод» - это предприятие, <br />
          занимающееся предоставлением <br />
          экспертных консультационных услуг
        </p>
        <p className="desc">
          Данная программа обладает актуальной информацией <br />
          по продажам недвижимости, а также работает на рынке <br />
          Республики Беларусь более 14 лет
        </p>
      </div>
      <section className="sliderr">
        {SliderData.map((slide, index) => {
          return (
            <div
              className={classNames("slide", { active: index === current })}
              // className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="book" className="image" />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </section>
    </>
  );
};

export default Home;
