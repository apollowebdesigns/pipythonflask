function init() {
    $("h2").click(function(){
        $(this).hide();
    });
}

$(document)
    .ready(
        init()
    );