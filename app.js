*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc568;
  font-size: 62.5%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.container {
  width: 50rem;
  height: 20rem;
  position: relative;
}

.svg-container {
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.line {
  fill: none;
  stroke: #ffffff;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}

.lttr {
  display: inline-block;
  color: #763c8c;
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0;
}

@media screen and (max-width: 520px) {
  .lttr {
    font-size: 4rem;
  }
}
