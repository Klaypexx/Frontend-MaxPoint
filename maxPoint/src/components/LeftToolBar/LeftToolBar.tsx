import PhotoButton from "../PhotoButton/PhotoButton";
import TextButton from "../TextButton/TextButton";
import UploadButton from "../UploadButton/UploadButton";
import figures from "../../resources/img/figures.png";
import style from "./LeftToolbar.module.css";
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
