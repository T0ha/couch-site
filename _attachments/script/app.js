// Apache 2.0 J Chris Anderson 2011
$(function() {
      
    $('#nav').evently({
			  _init: {
			      async: function(cb) {
				  $.getJSON( "/_view/navigation", {
					      descending : "false",
					      limit : 10 },
					      function(data) {        
						  cb(data.rows);
					      }
					  );
			      },
			      
			      path: '/index',
			      mustache: $('#nav-buttons').html(),
			      data: function(buttons) {
				  //console.log(but);
				  return {nav: buttons};
				  
			      },
			      after: function(buttons) {
				  console.log(buttons);
				  $('#main').load("_show/page/" + buttons[0].id);
				  $("#" + buttons[0].id ).parent().css('background-color', '#ddd');
				  $('#nav').pathbinder("page", "/page/:id");
			      }
			  },
			  page: function(e, id) {
			      $('#main').load("_show/page/" + id.id);
			      $('#nav li').css('background-color', '#eee');
			      $("#" + id.id ).parent().css('background-color', '#ddd');
			  }
				  
		      

			  
		     });
      
			 
			
		     
 
});