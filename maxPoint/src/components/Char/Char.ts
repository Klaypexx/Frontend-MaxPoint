import {Char} from "../../types/types";
import { CSSProperties } from "react";

type CharProps = Omit<Char, "id">;

function Char({
  color,
  fontFamily,
  fontSize,
  value,
  bold,
}: CharProps) {
  const style: CSSProperties = {
    color,
    fontFamily,
    fontSize,
    fontWeight: bold ? "bold" : "normal",
  };
  return <span style={style}>{value}</span>;
}

export default Char;