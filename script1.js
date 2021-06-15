var button = document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength()
{
    return input.value.length;
}
function createListelement()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListafterClick()
{
    if(inputLength() > 0)
    {
        createListelement();
    }
}
function addListAfterkeypress(event)
{
    if(inputLength() >0 && event.keyCode===13)
    {
        createListelement();
    }
}
button.addEventListener("click", addListafterClick);
input.addEventListener("keypress",addListAfterkeypress);