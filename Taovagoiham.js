function processConfirm(input)
{
    if (input)
    {
        return "Excellent. We'll play a nice game of chess.";
    }
    return "Maybe later then.";
}

let confirmInput = confirm("Shall we play a game?");
let response = processConfirm(confirmInput);
alert(response);