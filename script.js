$(".cell").each(function () {
    $(this)
    .attr("onclick", "mark(this);");
});
var blank = "⬜";//⬛🔲🔳⬜
var cross = "❌";
var question = "❔" + "&nbsp" + "&nbsp";
var cells = document.getElementsByClassName('cell');
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
    }
    else if(element.innerHTML == cross)
    {
        element.innerHTML = question;
    }
    else if(element.innerHTML.indexOf("❔") > -1)
    {
        element.innerHTML = blank;
    }
}
