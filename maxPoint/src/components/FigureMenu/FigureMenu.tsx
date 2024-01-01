/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { useContext } from "react";
import { PresentationContext } from "../../context/context";
import { Primitive as TPrimitive } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import style from "./FigureMenu.module.css";
<<<<<<< HEAD
import Primitive from "../Primitive/Primitive.tsx";
import { Size } from "../../types/types";
=======
import triangle from "../../resources/img/triangle.svg"; 
import rectangle from "../../resources/img/rectangle.svg"; 
import ellipse from "../../resources/img/ellipse.png";
>>>>>>> 95043536384b915f35022dd9147254143b24b412

type PrimitiveProps = {
  data: {
    form?: "triangle" | "ellipse" | "rectangle";
  };
  size: Size;
};
const triangleButton: PrimitiveProps ={
  data: {
    form: "triangle"},
  size: {
    width: 100,
    height: 100
  },
};
const rectangleButton: PrimitiveProps ={
  data: {
    form: "rectangle"},
  size: {
    width: 100,
    height: 100
  },
};
const ellipseButton: PrimitiveProps ={
  data: {
    form: "ellipse"},
  size: {
    width: 100,
    height: 100
  },
};
const FigureMenu = () => {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };

  const createTriangle = () => {
    const triangle: TPrimitive = {
      data: {
        form: "triangle",
      },
      id: uuidv4(),
      size: {
        height: 100,
        width: 100,
      },
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      type: "primitive",
    };
    newPresentation.slides
      .find((slide) => slide.id === newPresentation.currentSlideID)
      ?.objects.push(triangle);
    setPresentation(newPresentation);
  };

  const createRectangle = () => {
    const rectangle: TPrimitive = {
      data: {
        form: "rectangle",
      },
      size: {
        height: 100,
        width: 100,
      },
      id: uuidv4(),
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      type: "primitive",
    };
    newPresentation.slides
      .find((slide) => slide.id === newPresentation.currentSlideID)
      ?.objects.push(rectangle);
    setPresentation(newPresentation);
  };

  const createEllipse = () => {
    const ellipse: TPrimitive = {
      data: {
        form: "ellipse",
      },
      id: uuidv4(),
      size: {
        height: 100,
        width: 100,
      },
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      type: "primitive",
    };
    newPresentation.slides
      .find((slide) => slide.id === newPresentation.currentSlideID)
      ?.objects.push(ellipse);
    setPresentation(newPresentation);
  };

  return (
    <div className={style.figure}>
      <div className={style.figure__menu}>
        <button className={style.figure__button} onClick={createTriangle}>
<<<<<<< HEAD
          <Primitive data={triangleButton.data} size={triangleButton.size} />
=======
          <img src={triangle} className={style.figure_image}></img> 
>>>>>>> 95043536384b915f35022dd9147254143b24b412
        </button>
      </div>
      <div className={style.figure__menu}>
        <button className={style.figure__button} onClick={createRectangle}>
<<<<<<< HEAD
          <Primitive data={rectangleButton.data} size={rectangleButton.size}/>
=======
          <img src={rectangle} className={style.figure_image}></img>
>>>>>>> 95043536384b915f35022dd9147254143b24b412
        </button>
      </div>
      <div className={style.figure__menu}>
        <button className={style.figure__button} onClick={createEllipse}>
<<<<<<< HEAD
          <Primitive data={ellipseButton.data} size={ellipseButton.size}/>
=======
          <img src={ellipse} className={style.figure_image}></img>
>>>>>>> 95043536384b915f35022dd9147254143b24b412
        </button>
      </div>
    </div>
  );
};

export default FigureMenu;
