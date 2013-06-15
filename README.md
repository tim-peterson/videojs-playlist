Video.js playlist
===================
A videojs plugin to play multiple audio tracks or multiple videos.

Using the Plugin
----------------
The plugin automatically registers itself when you include video.playlist.js in your page:

    <script src='videojs.playlist.js'></script>

You probably want to include the default stylesheet, too. It provides some basic styling to indicate what the currentTrack is:

    <link href="videojs.playlist.css" rel="stylesheet">

The Playlist plugin currently takes two options.

```tracksClassName``` is a required option. It is a string of the className **without** the beginning period
```continuous``` is optional. It specifies whether the playlist should play the next track after the previous one finishes. Setting this to ```false``` prevents the continuous playback. Not including this option is the same as setting it to true.

The first is mandatory and indicates the className of the tracks which possess the data-src and data-index needed for switching tracks. See the HTML in example.html for explanation.

    myPlayerPlaylist.playlist({
      'tracksClassName': 'trackSelector', 
      'continuous': true
    });


