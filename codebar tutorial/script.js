function addToList(item){
$("ol#items").append("<li>"+item+"<span class='label pending'>Pending</span></li>")
}
    
  $(document).on('click','#add-to-list',function() {
  var text = $("#item").val();
  
  addToList(text);
  $("#item").val("").focus();
 
  });
  $(document).on('click','.pending',function(){
  var parent_node = $(this).parent();
  $(parent_node).addClass('completed');
  $(parent_node).append("<span class='label success'>Done!</span>");
  $(parent_node).find('.pending').remove();
  });