Video.js playlist
===================
A video-js plugin to play multiple audio tracks or multiple videos. It is [one of a growing number of plugins](https://github.com/videojs/video.js/wiki/Plugins) for the awesome [video-js library](https://github.com/videojs/video.js)

*Rationale:* The main goal in developing this plugin is to play **audio** files. Playing audio is possible with video-js either by swapping the ```<video>``` for an ```<audio>``` tag or by simply feeding audio tracks to the ```<video>``` tag. Both approaches have their pluses and minuses which are [documented here in video.js's issues.](https://github.com/videojs/video.js/issues/537?source=cc)

DEMO
----------------
[http://tim-peterson.github.io/videojs-playlist/](http://tim-peterson.github.io/videojs-playlist/)


Using the Plugin
----------------
The plugin automatically registers itself when you include video.playlist.js in your page:

    <script src='videojs.playlist.js'></script>

You probably want to include the default stylesheet, too. It provides some basic styling to indicate what track is currently playing:

    <link href="videojs.playlist.css" rel="stylesheet">

The Playlist plugin has one required ```id``` and ```class``` names in the HTML

    id="XXX-vjs-playlist" //playlist wrapper ID that is specific to the instantiated videojs object ID, e.g., id="audio-playlist-vjs-playlist". This is necessary such that multiple videojs players can exist on the same page.

    class="vjs-track" // tracks className 

The Playlist plugin currently takes two options,  ```continuous```, and ```setTrack```:

    myPlayerPlaylist.playlist({
      'continuous': true,
      'setTrack': 2
    });

```continuous (bool)```  specifies whether the playlist should play the next track after the previous one finishes. Setting this to ```false``` prevents the continuous playback. Not including this option is the same as setting it to ```true```.

```setTrack (int)```  allows manually setting the initial track that should be played. It's a zero-indexed integer based on the number of tracks in the playlist.

Future options being considered include: 1) a shuffle button to shuffle tracks and 2) rendering the playlist using JS rather than as it is currently done with HTML. The intent is to allow a playlist ```{}``` object to be fed in. I'd be happy for your feedback, petersontimr@gmail.com.


