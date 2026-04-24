$(document).ready(function(){

  $("#student, #senior, #armedforce, #oneway, #roundtrip, #offer_text, #contact_text, #login_text, #offerBtn1, #offerBtn2, #offerBtn3, #offerBtn4, #hotDealBtn1, #hotDealBtn2, #hotDealBtn3, #hotDealBtn4, #hotDealBtn5, .logo a").hover(
    function() {
      $(this).css({
        "color": "#Fc790D",
        "border-color": "#Fc790D"
      });
    },
    function() {
      $(this).css({
        "color": "",
        "border-color": ""
      });
    }
  );

 $("#RouteP span").hover(
    function() {
      $(this).css({
        "color": "#Fc790D",
      });
    },
    function() {
      $(this).css({
        "color": " blue",
      });
    }
  );

 $("#viewall, #hotelDealViewall, #ViewMore").hover(
    function() {
      $(this).css({
        "border": "1px solid #Fc790D",
        "border-radius": "15px",
        "padding": "5px"
      });
    },
    function() {
      $(this).css({
        "border": "",
        "border-radius": "",
        "padding": ""
      });
    }
  );

 $("#travelStory img").hover(
    function() {
      $(this).css("transform", "scale(1.1)");
    },
    function() {
      $(this).css("transform", "scale(1)");
    }
  );

});