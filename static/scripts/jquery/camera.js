(function($){
    $(function(){
        var currentUrl = $(location).attr('href');
        var firstPosition = currentUrl.indexOf("1");
        var lastPosition = currentUrl.indexOf(":");
        var calcUrl = currentUrl.toString().slice(0, lastPosition) + ":2222/html/min.php";
        $("#camera-screen").attr("src", calcUrl);
    });
})(jQuery);