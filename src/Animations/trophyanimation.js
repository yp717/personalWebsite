import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './trophy-animation.json';

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <>
        <Lottie 
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </>
    )
  }
}