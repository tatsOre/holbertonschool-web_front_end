/**
 * Changing DOM with closure
 */

const changeMode = (size, weight, transform, background, color) => {
  return function () {
    document.body.style.fontSize = size.toString() + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
};

const main = () => {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  /* Create paragraph: */
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  /* Create Spooky button: */
  const spookyButton = document.createElement('button');
  spookyButton.innerHTML = 'Spooky';
  spookyButton.addEventListener("click", () => spooky());
  document.body.appendChild(spookyButton);

  /* Create Dark mode button: */
  const darkModeButton = document.createElement('button');
  darkModeButton.innerHTML = 'Dark mode';
  darkModeButton.addEventListener("click", () => darkMode());
  document.body.appendChild(darkModeButton);

  /* Create Scream mode button: */
  const screamModeButton = document.createElement('button');
  screamModeButton.innerHTML = 'Scream mode';
  screamModeButton.addEventListener("click", function () { screamMode(); });
  document.body.appendChild(screamModeButton);
}

main();