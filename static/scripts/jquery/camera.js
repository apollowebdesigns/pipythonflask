(function($){
    $(function(){
        var currentUrl = $(location).attr('href');
        var firstPosition = currentUrl.indexOf("1");
        var lastPosition = currentUrl.indexOf(":");
        var removeSlash = currentUrl.length - 2;
        var secondUrl = currentUrl.toString().slice(0, removeSlash);
        var calcUrl = secondUrl.concat(String.raw(":2222/html/min.php"));
        $("#camera-screen").attr("src", calcUrl);
    });
})(jQuery);