$(".cell").each(function () {
    $(this)
    .attr("onclick", "mark(this);");
});
var blank = "⬜";//⬛🔲🔳⬜🟦🟪🟨
var cross = "❌";
var question = "❗";// + "&nbsp";
var cells = document.getElementsByClassName('cell');
var cellObjects = new Array();
for(var i = 0; i < cells.length; i++)
{
    cells[i].innerHTML = blank;
    if(i%6 == 0)
    {
        cells[i].style.backgroundColor = "white";
    }
}
function cell(row,column,element)
{
    this.Row = row;
    this.Column = column;
    this.Element = element;
}
function mark(element)
{
    if(element.innerHTML == blank)
    {
        element.innerHTML = cross;
        strikeParentElement(element, true);
    }
    else if(element.innerHTML == cross)
    {
        element.innerHTML = question;
        strikeParentElement(element, "i");
    }
    else if(element.innerHTML == question)
    {
        element.innerHTML = blank;
        strikeParentElement(element, false);
    }
}
function strikeParentElement(element, strike)
{
    let parent = element.parentElement.parentElement.parentElement.parentElement.parentElement;//.children[0];
    
    let i = false;
    if(strike == "i")
    {
        strike = false;
        i = true;
    }

    // parent.innerHTML = strikeThroughText(parent.innerHTML,strike);

    
    if(strike)
    {
        parent.style.textDecoration = "line-through";
        parent.style.color = "red";
        parent.children[0].style.backgroundColor= "#ff000061";
    }
    else if(i)
    {
        parent.style.fontStyle = "italic";
        parent.style.color = "#ff5722";// "darkorange";
        // parent.style.textShadow = '3px 3px 3px darkorange';
        // parent.style.outline = " 3px solid darkorange";
        parent.children[0].style.backgroundColor= " #ff8c007d";
        parent.style.textDecoration = "";
    }
    else
    {
        parent.style.fontStyle = "";
        parent.style.color = "";
        parent.style.textDecoration = "";
        parent.children[0].style.backgroundColor= "";
        // parent.style.outline = "";
        // parent.style.textShadow = '';
    }
}
function strikeThroughText(text, strike)
{
    text = text.trim();
    if(strike)
    {
        return text
        .split('')
        .map(char => '\u0336' + char )
        .join('');
    }
    else
    {
        return text.replace(/[\u0336]/g, '');
    }
        
}
