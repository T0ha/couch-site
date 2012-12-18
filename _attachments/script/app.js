// Apache 2.0 J Chris Anderson 2011
$(function() {   
    // friendly helper http://tinyurl.com/6aow6yn
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var path = unescape(document.location.pathname).split('/'),
        design = path[3],
        db = $.couch.db(path[1]);
    $('#nav').evently({
			  _init: {
			      async: function(cb) {
				  db.view( design + "/navigation", {
					      descending : "false",
					      limit : 10,
					      success : function(data) {        
						  cb(data.rows);
					      }
					  });
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
				  $()
			      }
			  },
			  page:  {
			      path: '/page/:id',
			      /*async: function (cb) {
				  db.view(design + "/navigation", {
					      success: function(data) {
						  cb(data)
					      }});
			      },*/
			      mustache: "<div> {{id}}</div>" ,
			      data: function() {
				  return {id: 11};
				  
			      }
				  
			  }

			  
		      });
      
			 
			
		     
 
 });