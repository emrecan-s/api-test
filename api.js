
        var keyword = "galatasaray";

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            console.log(data.items[rnd]);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $("#image-div").css('background-image', "url('" + image_src + "')");

            $("#img-s").css('background-image', "url('" + image_src + "')"); 
             $("#img-t").css('background-image', "url('" + image_src + "')");
              $("#img-f").css('background-image', "url('" + image_src + "')");   
        });

    });

    function changeByTag() {
      var keyword = document.getElementById("inputText").value;
      console.log(keyword);
      $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            console.log(data.items[rnd]);

            var image_src = data.items[rnd]['media']['m'];

            $("#image-div").css('background-image', "url('" + image_src + "')");
            $("#img-s").css('background-image', "url('" + image_src + "')");  
            $("#img-t").css('background-image', "url('" + image_src + "')");
              $("#img-f").css('background-image', "url('" + image_src + "')");  
        });
    }
    