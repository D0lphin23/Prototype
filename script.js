"use strict";

class First {
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    hello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
}

const second = new Second();

second.hello();

// const DomElement = function (selector, height, width, bg, fontSize) {
//     this.selector = selector;
//     this.height = height;
//     this.width = width;
//     this.bg = bg;
//     this.fontSize = fontSize;

//     this.createNewElement = function () {
//         let elementType = this.selector[0] === "." ? "div" : "p";

//         const element = document.createElement(elementType);

//         if (this.selector[0] === ".") {
//             element.className = this.selector.slice(1);
//         } else if (this.selector[0] === "#") {
//             element.id = this.selector.slice(1);
//         }

//         element.style.cssText = `
//             height: ${this.height}px;
//             width: ${this.width}px;
//             background: ${this.bg};
//             font-size: ${this.fontSize}px;
//             `;

//         element.textContent = "Любой текст";

//         document.body.appendChild(element);

//         return element;
//     };
// };

// const square = new DomElement(".square", 100, 100, "Cyan", 16);

// const newSquare = square.createNewElement();

// newSquare.style.position = "absolute";
// newSquare.style.top = "0px";
// newSquare.style.left = "0px";

// document.addEventListener("keydown", function (event) {
//     const step = 10;
//     const top = parseInt(newSquare.style.top);
//     const left = parseInt(newSquare.style.left);

//     switch (event.key) {
//         case "ArrowUp":
//             newSquare.style.top = `${top - step}px`;
//             break;
//         case "ArrowDown":
//             newSquare.style.top = `${top + step}px`;
//             break;
//         case "ArrowLeft":
//             newSquare.style.left = `${left - step}px`;
//             break;
//         case "ArrowRight":
//             newSquare.style.left = `${left + step}px`;
//             break;
//     }
// });
