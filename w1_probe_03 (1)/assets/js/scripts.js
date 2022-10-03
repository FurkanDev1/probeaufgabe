// PLatz für dich	
$(document).ready(function(){
      $.getJSON("assets/json/news.json", function(result){
        $.each(result, function(i, field){
          $( "#news-card" )
          .append( 
              "<div class='col-md-6 col-lg-4 mb-4'>" 
                + "<div class='card card-news bg-grey-light-30'>"
                    + "<div class='card-img card-img-medium image-border image-border-secondary image-zoom'>"
                        + "<img src='" + field.image + "'>"
                    + "</div>"
                    + "<div class='card-body'><div class='card-content'>"   
                        + (field.top ? "<span class='badge top badge-cyan mr-2'>Top</span>": "")
                        + "<span class='badge badge-secondary mr-2'>" + field.category + "</span>"
                        + "<div class='date'>" + field.date  + "</div>"
                        + "<h5 class='mt-2'>" + field.headline  + "</h5>"
                        + "<p class='mt-2'>" + substringText(field.text) + "</p>"
                    + "</div>"
                    + "<a class='btn btn-secondary mt-2' href='"+ field.link +"' title='Headline' target='_blank'>Mehr erfahren</a>"
                    + "</div>"
                + "</div>"
            + "</div>");
        });
      });
  });

  function substringText(text) {
      var content = text;
      var textLength = content.length;

      if (textLength < 150) {
          return text
      } else {
          var newString = content.substring(1,150) + "...";
          return newString
      }    
  }