import "./Workspace.css";
import Slide from "../Slide/Slide.tsx";
import { Slide as PropsSlide } from "../types/types.ts"

type WorkspaceProps = {
    slide: PropsSlide | null;
};

function Workspace ({slide}: WorkspaceProps) {
    return (
    </div>
    {slide && (
      <Slide
        isSelectedSlide={false}
        slide={slide}
        className="workspace__slide"
      />
    )}
  </div>)
}