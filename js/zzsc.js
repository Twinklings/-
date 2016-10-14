//star
$(document).ready(function(){
    var stepW = 24;
    //var description = new Array("");
    var stars = $(".star > li");
    //var descriptionTemp;
    $(".current-rating").css("width",0);
    stars.each(function(i){
        $(stars[i]).click(function(e){
            var n = i+1;
           $(this).parent().parent().find(".current-rating").css({"width":stepW*n});
            //descriptionTemp = description[i];
            //$(this).find('a').blur();
            //return stopDefault(e);
            //return descriptionTemp;
        });
    });
});
