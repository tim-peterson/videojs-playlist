            // initialize video.js

videojs.options.flash.swf = "http://vjs.zencdn.net/4.1.0/video-js.swf"

            
//note in the data-src's above that there are no file extensions, e.g., .m4v
videojs("#video-playlist", {"height":"auto", "width":"auto", "techOrder": ["flash", "html5", "other supported tech"]}).ready(function(event){
    var myPlayer=this;
    /*myPlayer.playlist({
        'continuous': false
    });*/

    if(typeof myPlayer.L!="undefined") myPlayer.id_=myPlayer.L;
    
    function resizeVideoJS(){
      var width = document.getElementById(myPlayer.id_).parentElement.offsetWidth;
      var aspectRatio=8/12;
      myPlayer.width(width).height( width * aspectRatio); 
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize   
});




