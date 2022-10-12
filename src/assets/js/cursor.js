const body = document.querySelector("body");

function customCursor() {
    const cursor = document.createElement("div");
    const cursorPointer = document.createElement("div");
    cursor.setAttribute("id", "magicMouseCursor");
    cursorPointer.setAttribute("id", "magicPointer");

    // append all child
    body.appendChild(cursor);
    body.appendChild(cursorPointer);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
        cursorPointer.style.left = e.clientX + 'px'
        cursorPointer.style.top = e.clientY + 'px'
    })
}

customCursor();
