$(document).ready(function() {
    // GET RECIPES FROM THE SERVER AS HTML DATA
    $('#view-south').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-recipes-HTML",
            dataType: "html",
            type: "GET",
            success: function(data) {
                $("#recipe-list-container").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    // GET RECIPES FROM THE SERVER AS JSON DATA
    $('#view-north').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-recipes-JSON",
            dataType: "json",
            type: "GET",
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                let htmlStr = "";
                for(let i = 0; i < data.length; i++) {
										htmlStr += '<div class="recipe-card">'
											+ '<div><img src="' + data[i].img + '"/></div>' 
											+ '<h4>' + data[i].name + '</h4>'
											+ '<p>' + data[i].desc + '</p>'
											+ '<ul>' 
											+ '<li>Difficulty: ' + data[i].diff + '</li>'
											+ '<li>Time required: ' + data[i].time + '</li>'
											+ '<li>Heat level: ' + data[i].heat + '</li>'
											+ '</ul>'
											+ '</div>';
                }

								$("#recipe-list-container").html(htmlStr);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

});
