const inputBtn = document.getElementById("add-button");
var count = 0;
inputBtn.addEventListener("click", function () {
    const inputText = document.getElementById("input-box");
    if (inputText.value != "") {
        count++;
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${count}</td>
            <td>${inputText.value}</td>
            <td><button class="delete-btn btn btn-danger">Delete</button></td>`;
        document.getElementById("table-content").appendChild(newRow);
        inputText.value = "";

        const detectButton = document.getElementsByClassName("delete-btn");
        for (const btn of detectButton) {
            // console.log(btn);
            btn.addEventListener("click", function (event) {
                // console.log(btn);
                const current = event.target.parentNode.parentNode;
                console.log(current.nodeName);
                if (current.nodeName == "TR") {
                    current.parentNode.removeChild(current);
                    break;
                }
                // console.log(event.target.parentNode.parentNode.parentNode);
                // console.log(event.target.parentNode.parentNode);
            })
        }
    }
})

document.getElementById("clear-all").addEventListener("click", function () {
    document.getElementById("table-content").innerHTML = "";
    count = 0;
})