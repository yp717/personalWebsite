import React from 'react';
import '@lottiefiles/lottie-player';

const TrophyAnimation = () => {
    return (
        <>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player
                src="https://assets1.lottiefiles.com/datafiles/3RKIaYNZqu6RrV0/data.json" 
                background="transparent"  
                speed="0.8"  
                style={{width: "100%", height: "100%"}} 
                autoplay
                loop
            >
            </lottie-player>
        </>
    )
}

export default TrophyAnimation;