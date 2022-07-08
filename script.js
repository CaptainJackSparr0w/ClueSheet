$(".cell").each(function () {
    $(this)
    .attr("onclick", "mark(this);");
});
var blank = "⬜";//⬛🔲🔳⬜🟦🟪🟨
var cross = "❌";
var question = "❔" + "&nbsp";
var cells = document.getElementsByClassName('cell');
var cellObjects = new Array();

for(var i = 0; i < cells.length; i++)
{
    // cells[i].setAttribute("onclick", "mark(this)");
    // var imgElem = document.createElement('img');
    // imgElem.style.position = 'absolute';
    // // imgElem.style.top = 0;
    // // imgElem.style.left = 0;
    // imgElem.setAttribute("name", "markImage");
    // imgElem.setAttribute('draggable', false);
    // imgElem.src = "images/unchecked.png";
    // cells[i].appendChild(imgElem);
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
    // if(element.children[0].src.indexOf('uncheck') > -1)
    // {
    //     element.children[0].src = element.children[0].src.replace('unchecked.png', 'checked.png');
    // }
    // else
    // {
    //     element.children[0].src = element.children[0].src.replace('checked.png', 'unchecked.png');
    // }
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
    else if(element.innerHTML.indexOf("❔") > -1)
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
        parent.style.color = "red";// "palevioletred";
    }
    else if(i)
    {
        parent.style.fontStyle = "italic";
        parent.style.color = "darkorange"
        parent.style.textDecoration = "";
    }
    else
    {
        parent.style.fontStyle = "";
        parent.style.color = "";
        parent.style.textDecoration = "";
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