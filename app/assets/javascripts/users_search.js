$(document).ready(function(){
  $("#users-search #term").on("keyup", function(){
    var jqxhr = $.get(
      $("#users-search").attr("action"),
      {term: $("#users-search #term").val()},
      function(){
        var result = $("#users-result").html();
        if(!result){
          $("#users-search #term").popover({
            content: "No result found.",
            placement: "bottom",
            html: true,
            trigger: "focus"
          });
        } else {
          $("#users-search #term").popover({
            content: $("#users-result"),
            placement: "bottom",
            html: true,
            trigger: "focus"
          });
        }
        $("#users-search #term").popover("show");
      }
    )
  })
});
