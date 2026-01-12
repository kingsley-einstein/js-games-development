function run() {
  /**
   * @type HTMLCanvasElement
   */
  const canvas = document.getElementById("mainCanvas");

  if (canvas) {
    const context = canvas.getContext("2d");
    context.fillRect(100, 50, 200, 180);
    context.strokeRect(400, 50, 200, 180);
    context.clearRect(400, 50, 200, 180);

    // Draw shape
    context.beginPath();
    context.moveTo(200, 120);
    context.lineTo(200, 220);
    context.lineTo(450, 120);
    context.closePath();
    context.stroke();

    // Complex set of lines
    context.beginPath();
    context.moveTo(160, 160); // Start drawing at 160, 160
    context.lineTo(170, 220);
    context.lineTo(240, 210);
    context.lineTo(260, 170);
    context.lineTo(190, 140);
    context.closePath();
    context.stroke();

    // Draw an arc
    context.beginPath();
    context.arc(300, 600, 40, 0, Math.PI, true);
    context.closePath();
    context.stroke();

    // Draw a full circle
    context.beginPath();
    context.arc(300, 650, 40, 0, 2 * Math.PI, true);
    context.fill();

    // Draw a text
    context.fillText("This is some text", 800, 200);
    context.font = "5pt Arial";
    context.strokeText("This is another text", 800, 500);

    context.fillStyle = "red";
    context.fillRect(800, 500, 100, 50);
  }
}

run();
