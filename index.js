$("#buttonId").click(function () {
    $("#myText").focus();
    $("#myText").css("border", "3px solid blue");
});

$("#validate").click(function () {
    //validate info from $("#name");
    if ($("#name").val() != "") {
        $(this).submit();
    } else {
        $("form").after("<br>Text was not entered.We can't validate.");
    }
});