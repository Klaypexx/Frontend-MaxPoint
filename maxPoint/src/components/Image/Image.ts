import {CSSProperties} from "react";
import { Size } from "../../types/types";

type ImageProps = {
    data: {
    src: string;
    alt: string;
    size: Size;
    }
}

function Image({data}: ImageProps) {
    const style: CSSProperties = {
        height: data.size.height,
        width: data.size.width,
    };
    return 
        <img src={data.src} style={style}> alt = {data.alt}
};

export default Image;
