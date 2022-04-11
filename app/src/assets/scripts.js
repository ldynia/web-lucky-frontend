// callback ready function
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading') {
        fn();
      }
    });
  }
}

// XHR request
function ajaxRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

// document ready
window.ready(function() {
  // Handle movie recommendation button
  document.getElementById('btn-recommend-movie').addEventListener('click', function() {
    // Change background color
    document.body.style.backgroundColor = "#290e3c";

    ajaxRequest('api/v1/movies/recommend', function(response) {
      // extract data from response
      var data = JSON.parse(response);
      var poster = data[0].poster;
      var title = data[0].title;
      // update DOM
      document.getElementById('cover').src = poster;
      document.getElementById('recommendation').innerText = title;
    });
  });

  // Handle music recommendation button
  document.getElementById('btn-recommend-music').addEventListener('click', function() {
    // Change background color
    document.body.style.backgroundColor = "#0e263c";

    ajaxRequest('api/v1/music/recommend', function(response) {
      // extract data from response
      var data = JSON.parse(response);
      var poster = data[0].poster;
      var title = data[0].title;
      // update DOM
      document.getElementById('cover').src = poster;
      document.getElementById('recommendation').innerText = title;
    });
  });
});