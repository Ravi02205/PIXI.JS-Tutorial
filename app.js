const Application = PIXI.Application

const app = new Application({
  // settting up the height and width of canvas
  width: 500,
  height: 500,
  //   will make the bg color of canvas transparent
  transparent: false,
  // will fix the pixels of canvas
  antialise: true,
})

// app.renderer ==> is element is used to draw element in canvas
// app.view ==> canvas itself

// change the background color of canvas
app.renderer.backgroundColor = 0x23395d

// We can use resize method to resize the canvas
app.renderer.resize(window.innerWidth, window.innerHeight);

// to remove the default margin and padding we will set the position absolute in canvas
app.renderer.view.style.position='absolute';

document.body.appendChild(app.view)
