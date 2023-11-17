import {Slide as PSlide} from "../../types/types.ts";
import style from "./MainWS.module.css";
import Slide from "../Slide/Slide.tsx";

type WorkspaceProps = {
    slide: PSlide | null;
    slideName: string;
}

function MainWS ({ slide, slideName }: WorkspaceProps) {
        if (slide != null) {
            return (
                <div className={style.working_block}>
                    <div className={style.working_block__items}>
                        <p>{slideName}</p>
                    <div className={style.working_block__slide}>
                        <Slide
                        slide={slide} />
                    </div>
                    </div>	
                </div>
            );
        };
}

export default MainWS; 