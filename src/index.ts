

import "./style/myStyle.scss";
import "bootstrap";

//start
const app = document.getElementById("app");

const p = document.createElement("p");
p.textContent = "Hello World";

const button = document.createElement("button");
button.textContent = "Drück mich!";
button.className = "button is-primary";

const a = document.createElement("a");
a.href = "https://getbootstrap.com/";
a.target = "_blank";
a.textContent = "Bootstrap 5";

app?.append(p);
app?.append(button);
app?.append(a);
