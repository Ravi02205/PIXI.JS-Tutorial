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


// creating the shapes
// every shape is included in the PIXI.Graphics()

const Graphics = PIXI.Graphics;

// creating the rectangle
const rectangle = new Graphics();

//creating rectangle we need to follow set of instructions
// rectangle.beginFill(0xAA33BB);
// tell the graphics to draw this as rectangle
// rectangle.drawRect(x-cordinate,Y-cordinate,width,height);
// rectangle.drawRect(200,200,100,120);
// call the endfill method
// rectangle.endFill();

// the above methods are chain-able 
rectangle.beginFill(0xaa33bb)
.lineStyle(4,0xffea00)
.drawRect(200, 200, 100, 120)
.endFill();

// by using linestyle we can add the line stroke

// to add tis rectangle to canvas we use 
app.stage.addChild(rectangle);


// creating the Polygon
const poly = new Graphics();
poly
  .beginFill(0xaa33bb)
  .lineStyle(4, 0xffea00,1)
  .drawPolygon([
    600,50,
    800,150,
    900,300,
    400,400
  ])
  .endFill()


  //   .drawPolygon([ 
//     x-cordinate,y-cordinate,
//     x-cordinate,y-cordinate,        
//     x-cordinate,y-cordinate
// ])


// by using linestyle we can add the line stroke

// to add tis polygon to canvas we use 
app.stage.addChild(poly);


// creating cricle 
const circle= new Graphics();
circle
  .beginFill(0x22aacc)
  .drawCircle(400,200,80)
  .endFill();
// to add this circle to canvas we use 
app.stage.addChild(circle);


// creating lie
const line=new Graphics();
line.lineStyle(5,0xffea00,1)
.moveTo(1500,100)
.lineTo(1500,800);
// moveto=> for moving the line (x-c0,y-co)
// lineto=> for ending point the line (x-c0,y-co)
app.stage.addChild(line);

// TO ADD EXTRA SHAPES LIKE EC-LIPS AND ROUNDED RECTANGLE WE USE THE graphics-EXTRA module
// creating torus(just like doughnut)
const torus= new Graphics();
torus
.beginFill(0xfffddd)
.drawTorus(100,700,80,100,0,Math.PI/2)
.endFill();

// .drawTorus(x-cor of center of torus,y-cor of center of torus,radius of inner circle,radius of outer circle)

app.stage.addChild(torus);


// creating the star
const star=new Graphics();

star
.beginFill(0xADADAD)
.drawStar(900,700,300,80)
.endFill();

app.stage.addChild(star);