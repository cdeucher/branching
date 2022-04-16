import * as React from "react";
import Square from "./Square";

const BOARD_SIZE = 2;

interface OwnState {
  pieces: { [key: number]: React.ReactNode | null };
}

class Board extends React.Component<{}, OwnState> {
  public state = { pieces: this.initializePieces() };

  public render() {
    const squares = [...Array(BOARD_SIZE).keys()]; // eslint-disable-line

    return (
      <div>
        {squares.map(row => (
          <div>
            {squares.map(col => (
              <SquareBackground key={`${col},${row}`} x={col} y={row}>
                {({ backgroundColor }) => (
                  <Square color={backgroundColor}>
                    {this.state.pieces[row * BOARD_SIZE + col]}
                  </Square>
                )}
              </SquareBackground>
            ))}
          </div>
        ))}
      </div>
    );
  }

  private initializePieces() {
    // create initial board configuration
    // and place pieces in respective spots
    return [];
  }
}

interface RenderProp<TChildrenProps, TElement = any> {
  (props: TChildrenProps): React.ReactElement<TElement>;
}

interface SquareBackgroundProps {
  x: number;
  y: number;
  children: RenderProp<{ backgroundColor: "red" | "black" }>;
}

const SquareBackground: React.FunctionComponent<
  SquareBackgroundProps
> = props => {
  if ((props.y * BOARD_SIZE + props.x) % 2) {
    return props.children({ backgroundColor: "black" });
  } else {
    return props.children({ backgroundColor: "red" });
  }
};

export default Board;
