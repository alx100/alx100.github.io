import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import { Transition, animated } from 'react-spring';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: purple;
  color: white;
  height: 100%;
  transform-origin: center left;
`;

const ModalWindow = ({ toggle, scale, ...styles }) => (
  <ModalWrapper style={{ transform: `scale(${scale})`, ...styles }}>
    <button onClick={toggle}>Toggle</button>
  </ModalWrapper>
);

export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <Transition
          from={{ opacity: 0, scale: '1.1' }}
          enter={{ opacity: 1, scale: '1' }}
          leave={{ opacity: 0, pointerEvents: 'none', scale: '1.1' }}
          config={{ tension: 5, friction: 10 }}
          {...this.props}
        >
          {this.props.on && ModalWindow}
        </Transition>
      </Portal>
    );
  }
}
