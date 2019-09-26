import React from 'react';
import ReactBodymovin from 'react-bodymovin'
import animation from './trophy.json'

const TrophyAnimation = () => {
    const bodymovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animation
    }
  
    return (
      <div>
        <ReactBodymovin options={bodymovinOptions} />
      </div>
    )
  }

export default TrophyAnimation;