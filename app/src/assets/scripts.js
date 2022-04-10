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
  document.getElementById('btn-recommend').addEventListener('click', function() {
    // Change background color
    document.body.style.backgroundColor = "#0e263c";

    // Select endpoint randomly
    var endpoint = (Math.random() < 0.5) ? 'api/v1/movies/recommend' : 'api/v1/music/recommend';

    ajaxRequest(endpoint, function(response) {
      // extract data from response
      var data = JSON.parse(response);
      var poster = data[0].poster;
      var title = data[0].title;
      // update DOM
      document.getElementsByTagName('img')[0].src = poster;
      document.getElementsByTagName('p')[0].textContent = title;
    });
  });
});