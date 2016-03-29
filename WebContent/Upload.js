// Photo Upload

$(function () {
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});

function imageIsLoaded(e) {
    $('#myImg').attr('src', e.target.result);
};


//Combo Box

$(document).ready(function(){
    $('#which-pet').on('change', function() {
      if ( this.value == 'np')
      {
        $(".new-pet").show();
      }
      else
      {
        $(".new-pet").hide();
      }
    });
});