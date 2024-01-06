/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import figures from "../../resources/img/figures.png";
import style from "./LeftToolbar.module.css";
import TextButton from "../TextButton/TextButton";
import PhotoButton from "../PhotoButton/PhotoButton";
import UploadButton from "../UploadButton/UploadButton";
type TFunction = {
  props: () => void;
};

function Left_ToolBar({ props }: TFunction) {
  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <TextButton />
        <div className={style.menu_item}>
          <button className={style.figure__button} onClick={props}>
            <img className={style.menu_block__img} src={figures}></img>
          </button>
          <p className={style.menu_block_text}>Figure</p>
        </div>
        <PhotoButton />
        <UploadButton />
      </div>
    </div>
  );
}

export default Left_ToolBar;
