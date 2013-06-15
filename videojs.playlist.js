(function() {

 videojs.plugin('playlist', function(options) {

  console.log('begin playlist plugin with video id:'+this.L);

  //assign variables
  var tracks=document.querySelectorAll("#"+this.L+"-vjs-playlist .vjs-track"),
      trackCount=tracks.length,
      player=this,
      currentTrack=tracks[0],
      index=0,
      play=true;


    //manually selecting track
    for(var i=0; i<trackCount; i++){ 
       tracks[i].onclick = function(){ 
          var track=this;
          index=this.getAttribute('data-index');
          //console.log("a is clicked and index position is"+index+"the data-src is "+this.getAttribute('data-src')); 

          trackSelect(track, player);
       } 
    }

    // for continuous play
    if(typeof options.continuous=='undefined' || options.continuous==true){
        console.log('play next!');

        player.on("ended", function(){
            //console.log('on ended');   
             
            index++;
            if(index>=trackCount){
              //console.log('go to beginning');
              index=0;
            }
            else;// console.log('trigger click next track');
            tracks[index].click();
          
        });// on ended     
    }   
    else;// console.log('dont play next!');

    //track select function for onended and manual selecting tracks
    var trackSelect=function(track, player){
        
       
       //get new src
        var src=track.getAttribute('data-src');
       // console.log('track select click src:'+src);
        player.src([
            { type: "audio/mp4", src:  src+".m4a" },
            { type: "audio/webm", src: src+".webm" },
            { type: "audio/ogg", src: src+".ogg" }
          ]); 
          
        if(play) player.play();

        //remove 'currentTrack' CSS class 
        for(var i=0; i<trackCount; i++){ 
            if(tracks[i].classList.contains('currentTrack')){
                tracks[i].className=tracks[i].className.replace(/\bcurrentTrack\b/,'');
            }
        }
        //add 'currentTrack' CSS class 
        track.className = track.className + " currentTrack";
    }

    //if want to start at track other than 1st track
    if(typeof options.setTrack!='undefined' ){
      options.setTrack=parseInt(options.setTrack);
      currentTrack=tracks[options.setTrack];
      index=options.setTrack;
      play=false;
      console.log('options.setTrack index'+index);
      trackSelect(tracks[index], player);
      play=true;
    }

});
})();
