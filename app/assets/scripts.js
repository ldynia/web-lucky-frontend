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

// document ready
window.ready(function() {
  document.getElementById('btn-recommend').addEventListener('click', function() {
    console.log('!!!!!');
  })
});