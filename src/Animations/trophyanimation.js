import React from 'react';
import '@lottiefiles/lottie-player';

const TrophyAnimation = () => {
    return (
        <>
            <div>
                <lottie-player 
                    src="https://assets1.lottiefiles.com/datafiles/3RKIaYNZqu6RrV0/data.json" 
                    background="transparent"  
                    speed="0.8"  
                    style={{width: "100%", height: "100%"}} 
                    autoplay
                    loop
                >
                </lottie-player>
            </div>
        </>
    )
}

export default TrophyAnimation;