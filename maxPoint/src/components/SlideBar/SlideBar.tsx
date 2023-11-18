/* eslint-disable sort-imports */
import style from "./SlideBar.module.css";
import Slide from "../Slide/Slide";
import { Slide as PropSlide } from "../../types/types";

type SlideBarProps = {
  slides: PropSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className={style.slide_block}>
      {slides.length > 0 ? (
        slides.map((slide, index) => (
          <div key={index} className={style.slide_block__wrapper}>
            <Slide slide={slide} className={style.slide_block_slide} />
          </div>
        ))
      ) : (
        <div>
          <h1>Нет слайдов</h1>
        </div>
      )}
    </div>
  );
}

export default SlideBar;
