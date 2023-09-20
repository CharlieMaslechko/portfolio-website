import React, { useRef, useEffect } from 'react';
import { useWindowDimensions } from '../hooks/WindowDimensions';
import { gsap } from "gsap";
import { DarkLightModeContext } from '../DarkLightContext'; 
import "./styles/NightSkyStyle.css"


export const NightSkyCanvas = () => {
  const canvasRef = useRef(null);
  const {height, width} = useWindowDimensions();
  const { websiteTheme, setWebsiteTheme } = React.useContext(DarkLightModeContext);



  useEffect(() => {
    let anim;

    if (websiteTheme == "Dark"){
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let comet;
        const stars = [];

        let numStars = Math.floor((width*height)/500);
    
        // Generate star data (positions, sizes, colors, etc.)
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const radius = Math.random() * 1.5// Random starting radius between 1 and 5
            const opacity = Math.random()
            const color = `rgba(255, 255, 255, ${opacity})`;

            stars.push({ x, y, radius, color, velocity: Math.random() * 0.5});
        }
    
        var cometTimer = 1000;
        var cometCoolDown = Math.random() * cometTimer;
        var cometSpeed = 0.01;
        var drawingComet = false;

        const drawComet = (comet) => {
            context.beginPath();
            context.moveTo(comet.xLineStart, comet.yLineStart)
            context.lineTo(comet.xLineEnd, comet.yLineEnd)
            context.lineWidth = 1;
            context.strokeStyle = '#FFFFFF';
            context.stroke()
            context.closePath()
        }

        const drawStar = (star) => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = star.color;
        context.fill();
        };

        const resetStarPos = (star) => {
            let decide = Math.random()
            if (decide < 0.5) {
                star.y = height;
                star.x = Math.random() * width;
            } else {
                star.x = 0;
                star.y = Math.random() * height;
            }
        }


        const animateStars = () => {
            context.fillStyle = "#03020a";// Set the background color to black
            context.fillRect(0, 0, width, height); // Fill the canvas with black
            cometCoolDown -= 1;
            if (cometCoolDown <= 0 && !drawingComet){
                drawingComet = true
                let xStart = Math.random() * width;
                let yStart = Math.random() * height;
                let xEnd = Math.random() * width;
                let yEnd = Math.random() * height;
                comet = {xStart: xStart, yStart: yStart, xEnd: xEnd, yEnd: yEnd, xLineEnd: xStart, yLineEnd: yStart, xLineStart: xStart, yLineStart: yStart, progress: 0, appearing: true}
            }


            if (drawingComet && comet){
                drawComet(comet)
                if (comet.appearing){
                    comet.progress += 0.02
                    //Extend the end line from the starting position plus a portion of the final - initial
                    comet.yLineEnd = comet.yStart + ((comet.yEnd - comet.yStart) * comet.progress);
                    comet.xLineEnd = comet.xStart + ((comet.xEnd - comet.xStart) * comet.progress);
                    if (comet.progress >= 1){
                        comet.appearing = false
                    }
                } else {
                    comet.progress -= 0.02
                    //Retract the start line in perspective of the final line which is the end position plus a portion of the final - initial
                    comet.yLineStart = comet.yEnd + ((comet.yStart - comet.yEnd) * comet.progress);
                    comet.xLineStart = comet.xEnd + ((comet.xStart - comet.xEnd) * comet.progress);
                    if (comet.progress <= 0){
                        drawingComet = false;
                        cometCoolDown = Math.random() * cometTimer;
                    }
                }


            }


            for (const star of stars) {
                star.x += star.velocity;
                star.y -= star.velocity;

                if (star.x > width || star.y < 0){
                    resetStarPos(star)
                }

                drawStar(star)
            }
        };
        anim = gsap.ticker.add(animateStars);
    }
       

    return () => {
        gsap.ticker.remove(anim);
    };
  }, [height, width, websiteTheme]);

  return (
    <canvas ref={canvasRef} width={width} height={height} className={websiteTheme == "Dark" ? "night-sky-style" : "night-sky-style-fade"}/>

  )
};
