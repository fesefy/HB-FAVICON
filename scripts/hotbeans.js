
$(document).ready(function() {
});

const howDidYouHearItems = {
  
}

function nav(filename) {
  $.get( "content/" + filename + ".html", function(data) {
    $(".content-container").html(data);
  });
}

function submit(evt) {
  evt.preventDefault();
  setTimeout(() => {
    alert('Application submitted successfully!');
  }, 3000);
}
