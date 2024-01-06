import text from "../../resources/img/text.png";
// eslint-disable-next-line sort-imports
import style from "../LeftToolBar/LeftToolbar.module.css";
import { useContext } from "react";
// eslint-disable-next-line sort-imports
import { PresentationContext } from "../../context/context";
import { Text as TText } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

const TextButton = () => {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };

  const createText = () => {
    const text: TText = {
      data: {
        bold: true,
        color: "black",
        fontFamily: "Arial",
        fontSize: 20,
        fontStyle: "normal",
        textDecoration: "none",
        value: "",
      },
      id: uuidv4(),
      position: {
        x: 0, //200
        y: 0, //100
      },
      size: {
        height: 34,
        width: 110,
      },
      type: "text",
    };
    newPresentation.slides
      .find((slide) => slide.id === newPresentation.currentSlideID)
      ?.objects.push(text);
    setPresentation(newPresentation);
  };

  return (
    <div className={style.menu_item} onClick={createText}>
      <img className={style.menu_block__img} src={text}></img>
      <p className={style.menu_block_text}>Text</p>
    </div>
  );
};

export default TextButton;
