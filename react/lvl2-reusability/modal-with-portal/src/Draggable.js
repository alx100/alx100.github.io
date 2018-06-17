import React, { Component, Fragment } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';

import styled from 'styled-components';
export default class Draggable extends Component {
  state = {
    active: true
  };

  render() {
    if (!this.state.active) return null;
    return (
      <Fragment>
        <Gesture>
          {({ down, xDelta, yDelta, xInitial, yInitial }) => (
            <Spring
              to={{
                x: down ? xDelta : 0,
                y: down ? yDelta : 0,
                scale: down ? xDelta : 0
              }}
              immediate={name => down && name === 'x'}
            >
              {({ x, y, scale }) => (
                <Box
                  onMouseUp={() => {
                    if (x._value < -200) {
                      this.setState({ active: false });
                    }
                  }}
                  style={{
                    transform: `translate3d(${x}px, ${y}px , 0) scale(${scale})`
                  }}
                >
                  {xDelta}
                </Box>
              )}
            </Spring>
          )}
        </Gesture>
        <div draggable>hi</div>
        <div
          onDragOver={e => e.preventDefault()}
          onDrop={() => console.log('hiiiii')}
          style={{
            width: '40px',
            border: 'solid 1px red',
            height: '1000px'
          }}
        />
      </Fragment>
    );
  }
}

const Box = styled(animated.div)`
  height: 40px;
  width: 40px;
  background: red;
  margin: 0 auto;
`;
