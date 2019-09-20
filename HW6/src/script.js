function addBox() {
    let box = document.getElementById("inpt");
    let result = box.value;
    if (result === "") {
        return
    } else {
        const content = document.createElement("li");
        const p = document.createElement("p");
        const delet = document.createElement("div");
        p.appendChild(document.createTextNode(result));
        delet.appendChild(document.createTextNode("x"));
        content.appendChild(p);
        content.appendChild(delet);
        document.getElementById("content-wrap").appendChild(content);
        box.value = "";
    }
}

let del = document.querySelector("ul");
del.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        e.target.parentNode.remove();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checkbox");
        e.target.classList.toggle("line");
    }
});

