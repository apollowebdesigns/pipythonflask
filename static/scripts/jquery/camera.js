(function($){
    $(function(){
        var currentUrl = $(location).attr('href');
        var firstPosition = currentUrl.indexOf("1");
        var lastPosition = currentUrl.indexOf(":");
        var removeSlash = currentUrl.length - 2;
        var secondUrl = currentUrl.toString().slice(0, removeSlash);
        console.log("the second url is");
        console.log(secondUrl);
        var rawness = String.raw`:2222/html/min.php`;
        console.log("rawrrrr");
        console.log(rawness);
        var calcUrl = secondUrl.concat(rawness);
        console.log("calcUrl");
        console.log(calcUrl)
        $("#camera-screen").attr("src", calcUrl);
    });
})(jQuery);