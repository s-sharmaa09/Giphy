function build_wiki_search_url(pattern) {
    var base_url = "https://api.giphy.com/v1/gifs/search";
    var request_url = "?api_key=0UnYRWGZGkPYFQojvmIgCCeZ1dojl6Gs&q=";
    var url = base_url + request_url + pattern;
    return url;
}
$(document).ready(function() {
    $("#searchButton").click(function(e) {
        e.preventDefault();
        console.log("Submit button clicked");
        var pattern = $("#search").val();
        var url = build_wiki_search_url(pattern);
        $.get(url)
            .done(resp => {
                showGiphs(resp.data.slice(0, 40));
            })
            .fail(console.log);
    });
});

function showGiphs(dataArray) {

    const results = document.querySelector(".results");
    let output = "";

    output = dataArray
        .map(

            imgData =>
            `<div class="row">
                  <div class="card mt-3 col-lg-6 col-md-12 col-sm-12">
                       <div class="card-img-top img-fluid img-thumbnail">
                            <a href="${imgData.images.original.url}" alt="${imgData.title
                              }" target="_blank"><img src="${imgData.images.original.url}" class="img-fluid"></a>
                        </div>
                        <div class="card-footer text-center" id="rating-container">
                             <div class="rating-circle"></div>

                             <div class="rating-circle"></div>
  
                             <div class="rating-circle"></div>

                             <div class="rating-circle"></div>

                             <div class="rating-circle"></div>
                             <p id="rate"></p>
                        </div>
                  </div>
             </div>`

        )
        .join("");
    $(".results").html(output);
    var cnt = ($('.results').children().length);
    $("#count").val(cnt);
    ``

    $(document).ready(function() {
        $("#rating-container div").hover(function() {
            $(this).prevAll().addBack().addClass("rating-hover")
        });

        $("#rating-container div").mouseout(function() {
            $(this).prevAll().addBack().removeClass("rating-hover")
        });

        $("#rating-container div").click(function() {
            var elms = document.querySelectorAll("[id='duplicateID']");
            for (var i = 0; i <= $(this).index() + 1; i++) {
                $(this).prevAll().addBack().addClass("rating-chosen")
                $("#rate").append(elms).text("Rating: " + i);
                $(this).nextAll().removeClass("rating-chosen")

            }
        });

    });
}