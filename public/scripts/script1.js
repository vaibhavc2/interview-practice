// Q: Whenever user clicks on the screen, create a circle at the position of the click. The circle should have a random radius between a set pixel range. If the user clicks again, a new circle should be created, and the previous one should also remain. Now, if the two circles intersect, then console.log("Intersection detected"). At the third click, both the previous circles should be removed, and new circle should be created and so on... Repeat this process for every three clicks.

// define radii
let radius1 = 0;
let radius2 = 0;

// define x1, x2, y1, y2
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;

// set min and max radius
const minRadius = 20;
const maxRadius = 300;

// get body element
const body = document.body;

// create elements circle1 and circle2
const circle1 = document.createElement("div");
const circle2 = document.createElement("div");

// add styles to circle1 and circle2
circle1.style.position = "absolute";
circle1.style.borderRadius = "100%";
circle1.style.visibility = "hidden";
circle1.style.border = "2px solid white";
circle2.style.position = "absolute";
circle2.style.borderRadius = "100%";
circle2.style.visibility = "hidden";
circle2.style.border = "2px solid white";

// append circle1 and circle2 to the body
body.appendChild(circle1);
body.appendChild(circle2);

document.addEventListener("click", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  const radius = Math.floor(
    Math.random() * (maxRadius - minRadius) + minRadius
  );

  if (
    circle1.style.visibility === "visible" &&
    circle2.style.visibility === "hidden"
  ) {
    circle2.style.width = `${radius * 2}px`;
    circle2.style.height = `${radius * 2}px`;
    circle2.style.left = `${x - radius}px`;
    circle2.style.top = `${y - radius}px`;
    radius2 = radius;

    x2 = x;
    y2 = y;

    // distance between centers of two circles
    const distance = Math.hypot(x2 - x1, y2 - y1);

    // if distance is less than or equal to the difference of the radii of the two circles, then it means the circle with smaller radius is completely inside the circle with larger radius
    // if distance is less than the sum of the radii of the two circles and greater than the absolute difference of the radii of the two circles
    // if the distance is equal to the sum of the radii of the two circles, then it means the circles are touching each other
    if (
      !(distance <= Math.abs(radius1 - radius2)) &&
      distance <= radius1 + radius2
    ) {
      console.log("Intersection detected");
    }

    circle2.style.visibility = "visible";
  } else if (
    circle1.style.visibility === "hidden" &&
    circle2.style.visibility === "hidden"
  ) {
    circle1.style.width = `${radius * 2}px`;
    circle1.style.height = `${radius * 2}px`;
    circle1.style.left = `${x - radius}px`;
    circle1.style.top = `${y - radius}px`;
    radius1 = radius;

    x1 = x;
    y1 = y;
    circle1.style.visibility = "visible";
  } else {
    circle1.style.visibility = "hidden";
    circle2.style.visibility = "hidden";

    circle1.style.width = `${radius * 2}px`;
    circle1.style.height = `${radius * 2}px`;
    circle1.style.left = `${x - radius}px`;
    circle1.style.top = `${y - radius}px`;
    radius1 = radius;

    x1 = x;
    y1 = y;
    circle1.style.visibility = "visible";
  }
});
