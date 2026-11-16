function getOutput(gate, a, b) {

    switch (gate) {

        case "AND":
            return a & b;

        case "OR":
            return a | b;

        case "NOT":
            return a === 0 ? 1 : 0;

        case "NAND":
            return (a & b) === 1 ? 0 : 1;

        case "NOR":
            return (a | b) === 1 ? 0 : 1;

        case "XOR":
            return a !== b ? 1 : 0;

        case "XNOR":
            return a === b ? 1 : 0;

        default:
            return 0;
    }
}

function calculate() {

    let gate = document.getElementById("gate").value;

    let a = Number(document.getElementById("inputA").value);
    let b = Number(document.getElementById("inputB").value);

    let output = getOutput(gate, a, b);

    document.getElementById("output").innerText =
        "Output = " + output;

    generateTruthTable(gate);
}

function generateTruthTable(gate) {

    let table = document.getElementById("truthTable");

    table.innerHTML = "";

    for (let a = 0; a <= 1; a++) {

        for (let b = 0; b <= 1; b++) {

            let output = getOutput(gate, a, b);

            let row = document.createElement("tr");

            row.innerHTML = `
                <td>${a}</td>
                <td>${gate === "NOT" ? "-" : b}</td>
                <td>${output}</td>
            `;

            table.appendChild(row);
        }
    }
}

// Display initial truth table
calculate();