            // initialize video.js
            
//note in the data-src's above that there are no file extensions, e.g., .m4v
videojs("#video-playlist", {"height":"auto", "width":"auto"}).ready(function(event){
    var myPlayer=this;

    console.log(myPlayer.el().id);
    myPlayer.playlist({
        'continuous': false
    });

    //if(typeof myPlayer.L!="undefined") myPlayer.id_=myPlayer.L;
    
    function resizeVideoJS(){
      var width = document.getElementById(myPlayer.el().id).parentElement.offsetWidth;
      var aspectRatio=8/12;
      myPlayer.width(width).height( width * aspectRatio); 
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize   
});

videojs("#audio-playlist", {"height":"auto", "width":"auto","customControlsOnMobile": true}).ready(function(event){
    var myPlayer=this;

    var playlist=myPlayer.playlist({
    'mediaType': 'audio',
    'continuous': true,
    'setTrack': 2
    });
    myPlayer.on('playing', function(){
        var poster=document.getElementsByClassName("vjs-poster")[1];
        poster.style.display="block";

    }); 

    //if(typeof myPlayer.L!="undefined") myPlayer.id_=myPlayer.L;
    
    function resizeVideoJS(){
      var width = document.getElementById(myPlayer.el().id).parentElement.offsetWidth;
      var aspectRatio=8/12;
      myPlayer.width(width).height( width * aspectRatio); 
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize

    document.onkeydown = checkKey; // to use left and right arrows to change tracks
    function checkKey(e) {
        e = e || window.event;
        if(e.keyCode==37){
          console.log("prev audio track");
          playlist.prev();
        } 
        else if(e.keyCode==39){
          console.log("next audio track");
          playlist.next();
        } 
    } 

});


