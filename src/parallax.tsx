import { useStyletron } from "baseui";
import { useEffect, useState } from "react";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export function Parallax() {
  const [css] = useStyletron();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [scrollTop, setScrollTop] = useState(window.scrollY)

  const backgroundImgs = css({
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none",
  })

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', () => setScrollTop(window.scrollY));

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', () => setScrollTop(window.scrollY));
    };
  }, []);

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${windowSize.innerWidth * (5 / 9)}px`,
      })}
    >
      <img
      className={backgroundImgs}
      style={{
        top: scrollTop * 1,
      }}
      width="100%" src="imgs/hill1.png" alt="hill1" />
      <img className={backgroundImgs} width="100%" src="imgs/hill2.png" alt="hill2" />
      <img className={backgroundImgs} width="100%" src="imgs/hill3.png" alt="hill3" />
      <img
      className={backgroundImgs}
      style={{
        left: scrollTop * -1.5,
      }}
      width="100%" src="imgs/hill4.png" alt="hill4" />
      <img
        className={backgroundImgs}
        style={{
          left: scrollTop * 1.5,
        }}
        width="100%" src="imgs/hill5.png" alt="hill5" />
      <h2
        className={css({
          marginTop: `${scrollTop * 2.5}px`,
          fontSize: `${windowSize.innerWidth / 15}px`,
          color: "white",
          userSelect: "none",
          position: "absolute",
          textShadow: "2px 2px 4px rgba(0, 0, 0, .8)"
        })}
      >
        Resume
      </h2>
      <img
        className={backgroundImgs}
        style={{
          top: scrollTop * -1.5,
          left: scrollTop * 1.5,
        }}
        width="100%"
        src="imgs/leaf.png"
        alt="leaf"
      />
      <img className={backgroundImgs} width="100%" src="imgs/plant.png" alt="plant" />
    </div>
  )
}