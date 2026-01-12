function run() {
  /**
   * @type HTMLCanvasElement
   */
  const canvas = document.getElementById("mainCanvas");

  if (canvas) {
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = "./images/spaceship.jpeg";

    image.addEventListener("load", () => {
      context.drawImage(image, 0, 350);
    });
  }
}

run();
