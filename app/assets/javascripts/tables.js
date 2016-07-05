$(function()
{
    var selected;

    var input = $("#main_input");
    var cells = $(".working_cell");
    cells.click(function () {
        input.val($(this).text());
        input.focus();
        selected = $(this);
        $(".working_cell").css("border", "solid 1px black");
        selected.css("border", "solid 2px red");
    });
    $(input).on("input", function()
    {
        if(typeof(selected) !== 'undefined')
        {
            selected.text(input.val());
        }
    });
    cells.each(function(element)
    {

    });
});