const motion = window.motion;
const images = ["/images/hero/egroup1.png", "/images/hero/egroup2.png"];

let index = 0;
const imageEl = document.getElementById("animatedImage");

function animateImageChange() {
  motion
    .animate(
      imageEl,
      {
        opacity: [1, 0],
        y: [0, 30],
        scale: [1, 0.8],
      },
      {
        duration: 0.2,
        easing: "ease-out",
      }
    )
    .then(() => {
      index = (index + 1) % images.length;
      imageEl.src = images[index];

      motion.animate(
        imageEl,
        {
          opacity: [0, 1],
          y: [30, 0],
          scale: [0.8, 1],
        },
        {
          duration: 0.2,
          easing: "ease-in",
        }
      );
    });
}

setInterval(animateImageChange, 7000);
