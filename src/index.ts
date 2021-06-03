
import "bulma";
import "./style/myStyle.sass";

//start
const app = document.getElementById("app");

const p = document.createElement("p");
p.textContent = "Hello World";

const button = document.createElement("button");
button.textContent = "Drück mich!";
button.className = "button is-primary";

const a = document.createElement("a");
a.href = "https://bulma.io/documentation/overview/modifiers/";
a.target = "_blank";
a.textContent = "bulma CSS Buttons";

app?.append(p);
app?.append(button);
app?.append(a);
