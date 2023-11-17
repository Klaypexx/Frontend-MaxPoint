/* eslint-disable sort-imports */
import { CSSProperties } from "react"; //типизация стилей
import { Slide as PropSlide } from "../../types/types";
import "./Slide.css";

type SlideProps = {
  slide: PropSlide;
  slideName: number;
};

function Slide({ slide }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div key={slide.id} className="slide" style={style}>
    </div>
  );
}

export default Slide;
