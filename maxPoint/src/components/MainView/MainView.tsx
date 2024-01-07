import { PresentationContext } from "../../context/context.tsx";
import Slide from "../Slide/Slide.tsx";
import style from "./MainView.module.css";
import { useContext } from "react";

function MainView() {
  const { presentation } = useContext(PresentationContext);
  const slides = presentation.slides;
  const currentSlide = slides.find(
    (slide) => slide.id === presentation.currentSlideID,
  );

  if (currentSlide != null) {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__wrapper}>
          <Slide slide={currentSlide} className={style.working_block__slide} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__wrapper}></div>
      </div>
    );
  }
}

export default MainView;
