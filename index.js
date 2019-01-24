$("#buttonId").click(function () {
    $("#myText").focus();
    $("#myText").css("border", "3px solid blue");
});

//This is not a good example of validation:

$("#validate").click(function () {
    //validate info from $("#name");
    if ($("#name").val() != "") {
        $(this).submit();
    } else {
        $("form").after("<br>Text was not entered.We can't validate.");
    }
});

//Blur

/* When the first field has the focus and we click elsewhere or
tab away from it the alert displays:*/

$("#target").blur(function () {
    alert("Handler for .blur() called.");
});