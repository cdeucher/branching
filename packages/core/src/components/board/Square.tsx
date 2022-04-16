import * as React from "react";

interface SquareProps {
  color: "red" | "black";
}
const Square: React.FunctionComponent<SquareProps> = props => (
  <div style={{ backgroundColor: props.color, width: '120px', height: '120px' }}>{props.children}</div>
);

export default Square;