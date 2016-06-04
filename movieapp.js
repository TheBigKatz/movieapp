
$(function () {

  $('form').submit(function (event) {
    event.preventDefault();
    var userInput = $('#search-field').val();
    $.ajax({
      url: 'http://www.omdbapi.com/',
      data: {
        s: userInput
      },
      success: function(data) {
        console.log('Returned data', data);
        debugger;
        var i;
        for (i=0; i<data.Search.length; i++) {
          var posterImage = data.Search[i].Poster;
          var posterTitle = data.Search[i].Title;
          var linkID = data.Search[i].imdbID;
          console.log(i);
          console.log(posterImage);
          console.log(posterTitle);

          /* use this trick instead of using multiple single and double quotes. */
          var imgTag = $('<img>')
            .attr('src', data.Search[i].Poster)
            .attr('alt', data.Search[i].Title);
          $('#results').append(imgTag);

          console.log(imgTag);
          $('#results').append(imgTag);
          var linkHTML = 'http://www.imdb.com/title/' + linkID;
          console.log(linkHTML);
          var movieLink = $('<a>')
            .attr('href', linkHTML);
            console.log(movieLink);
        }
      }
    });
  });

});
