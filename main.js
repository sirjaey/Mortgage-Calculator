
function calcMortgage() {
    const p = $("#principal").val();
    const t = $("#term").val();
    const r = $("#rate").val();
    let n = 12;
    let rate = (r / 100) / n;
    
    let monthly = (p * rate) / (1 - (1 / Math.pow((1 + rate), (n * t))));
    let monthlyPay = monthly.toFixed(2)
    let totalPay = (monthlyPay * n * t).toFixed(2);
    let interest = (totalPay - p).toFixed(2);

    $("#show-result").html("£" + monthlyPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $("#total-pay").html("£" + totalPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $("#show-interest").html("£" + interest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));


    // ERROR HANDLING
    if (p === "") {
        $("#principal-empty").show();
        $(".inpError1").addClass("pHoldError");
        $(".inpError2").addClass("inputError");
    }
    else {
        $("#principal-empty").hide();
        $(".inpError1").removeClass("pHoldError");
        $(".inpError2").removeClass("inputError");
    }

    if (t === "") {
        $("#term-empty").show();
        $(".inpError4").addClass("pHoldError");
        $(".inpError3").addClass("inputError");
    }
    else {
        $("#term-empty").hide();
        $(".inpError4").removeClass("pHoldError");
        $(".inpError3").removeClass("inputError");
    }

    if (r === "") {
        $("#rate-empty").show();
        $(".inpError6").addClass("pHoldError");
        $(".inpError5").addClass("inputError");
    }
    else {
        $("#rate-empty").hide();
        $(".inpError6").removeClass("pHoldError");
        $(".inpError5").removeClass("inputError");
    }
    

    let mortgageType = $(".radio");
    if ((mortgageType[0].checked === true) && (!(p === "" || t === "" || r === ""))) {
            $("#radio-error").hide();
            $(".not-empty").show();
            $(".empty").hide();
            $(".error").hide();
            $(".repayment").show()
            $(".show-interest").hide();
    }
    else if ((mortgageType[1].checked === true) && (!(p === "" || t === "" || r === ""))) {
            $("#radio-error").hide();
            $(".not-empty").show();
            $(".empty").hide();
            $(".error").hide();
            $(".repayment").hide()
            $(".show-interest").show();
        }
        else {
            $("#radio-error").show();
            $(".empty").show();
            $(".not-empty").hide();
        }
    if (mortgageType[0].checked === true || mortgageType[1].checked === true) {
            $("#radio-error").hide();
            $("mortgageType")[0].addClass("type-button-clicked");
        }
        else {
            $("#radio-error").show();
            $(".empty").show();
            $(".not-empty").hide();
        }
}


// ACTIVE STATE (FOCUS/BLUR)
$("#principal").on("focus", function () {
    $(".inpError1").addClass("pHoldActive");
});
$("#term").on("focus", function () {
    $(".inpError4").addClass("pHoldActive");
});
$("#rate").on("focus", function () {
    $(".inpError6").addClass("pHoldActive");
});
$("input").on("blur", function () {
    $("input, .pHolder").removeClass("pHoldActive");
});

$(".M-select1").on("click", function () {
    $(".radio")[0].checked = true;
    $(".M-select1").addClass("select-radio");
    $(".M-select2").removeClass("select-radio");
});
$(".M-select2").on("click", function () {
    $(".radio")[1].checked = true;
    $(".M-select2").addClass("select-radio");
    $(".M-select1").removeClass("select-radio");
});


// CLEAR ALL
$("#allClear").click(function() { 
    $("#principal").val("");
    $("#term").val("");
    $("#rate").val("");
    $(".error").hide();
    $(".empty").show();
    $(".not-empty").hide();
    $("input, .pHolder").removeClass("pHoldError inputError");
    $(".radio")[0].checked = false;
    $(".radio")[1].checked = false;
    $(".M-select1").removeClass("select-radio");
    $(".M-select2").removeClass("select-radio");
});

