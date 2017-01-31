/* 
    Created on : 31-Jan-2017, 14:07:23
    Author     : Vijayakumar@ulgebra
*/

var totHts=8;

$(window).load(function () {
   
    setInterval(init_ht,2500);
    setTimeout(endLoad,1000);
});

function init_ht(){
    var curHt=parseInt($('.page_high_txt').attr("data-curht"));
    var nextHt=curHt+1;
    if(nextHt>totHts){
        nextHt=1;
    }
    $('.page_high_txt').attr({"data-curht":nextHt});
    $('.phtm_itm:not(#ht_'+nextHt+')').slideUp();
    $('.phtm_itm#ht_'+nextHt+'').slideDown();
    
    
}
function endLoad(){
    $('.Loading_Page').fadeOut();
}