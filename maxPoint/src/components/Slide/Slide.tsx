import {Slide as Pslide} from "../../types/types.ts";
import {Block} from "../Block/Block.ts";
import "../Slide/Slide.css";

type SlideProps = {
    slide: Pslide;
    Selected: boolean;
}

function Slide({slide, Selected}: SlideProps) {
    let SlideSelected = "";
    const style = {
        background: slide.background,
      };
    if (Selected) {
        SlideSelected = "Slide__selected";
    }
    return {
        <div className>
        </div>
    }
}

export default Slide;