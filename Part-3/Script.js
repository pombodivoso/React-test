const Execute = () => {
    let First = parseInt(document.getElementById("first").value)
    let Second = parseInt(document.getElementById("second").value)
    let Third = parseInt(document.getElementById("third").value)

    if (First > Second && First > Third)
        alert("O maior número é: " + First)
    else if (Second > First && Second > Third)
        alert("O maior número é: " + Second)
    else if (Third > First && Third > Second)
        alert("O maior número é: " + Third)

    if (First < Second && First < Third)
        alert("O menor número é: " + First)
    else if (Second < First && Second < Third)
        alert("O menor número é: " + Second)
    else if (Third < First && Third < Second)
        alert("O menor número é: " + Third)

    var Total = First + Second + Third;

    alert("A soma dos três números é: " +  Total)
}