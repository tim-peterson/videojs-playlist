(function(videojs) {
    'use strict';

    var defaults = {
        continuous: true,
        debug: false,
        setTrack: 0,
        hash: true,
    },
    playlist;

    /**
     * Initialize the plugin.
     * @param options (optional) {object} configuration for the plugin
     */
    playlist = function (options) {
        var settings = videojs.util.mergeOptions(defaults, options),
            player = this,
            player_id = player.el().id,
            tracks = document.querySelectorAll('#' + player_id + '-vjs-playlist .vjs-track'),
            trackCount = tracks.length,
            index = settings.setTrack,
            play = true,
            //track select function for onended and manual selecting tracks
            trackSelect = function(track) {
                // if from a click
                if (track instanceof MouseEvent) {
                    track = this;
                }

                //get new src
                var src = track.getAttribute('data-src'),
                    type = track.getAttribute('data-type'),
                    index = parseInt(track.getAttribute('data-index')) || index;

                log('track select click src - ' + src);

                player.src([
                    {type: type, src: src}
                ]);

                if (play) {
                    player.play();
                }

                //remove 'currentTrack' CSS class
                for(var i = 0; i < trackCount; i++){
                    if (tracks[i].classList.contains('current-track')) {
                        tracks[i].className = tracks[i].className.replace(/\bcurrent-track\b/, 'nonPlayingTrack');
                    }
                }
                //add 'current-track' CSS class
                track.className = track.className + ' current-track';

                if(typeof settings.onTrackSelected === 'function') {
                    settings.onTrackSelected.apply(track);
                }

                if (!settings.hash) {
                    return false;
                }

            },
            log = function(message) {
                if (settings.debug) {
                    console.log('Video.js Playlist Plugin: ', message);
                }
            };

        log('begin with video id - ' + player_id);

        // manually selecting track
        for (var i = 0; i < trackCount; i++) {
           tracks[i].onclick = trackSelect;
        }

        // for continuous play
        if(settings.continuous === true) {
            log('continuous');

            player.on('ended', function() {
                log('on ended');

                index++;
                if(index >= trackCount) {
                  log('go to beginning');
                  index = 0;
                } else {
                    log('trigger click next track');
                    tracks[index].click();
                }
            });
        } else {
            log('dont play next!');
        }

        if (window.location.hash) {
            for (var i = 0; i < trackCount; i++) {
                if (tracks[i].getAttribute('href') === window.location.hash) {
                    index = i;
                    break;
                }
            }
        }

        play = false;
        log('setTrack - ' + index);
        trackSelect(tracks[index]);
        play = true;

        return {
            tracks: tracks,
            trackCount: trackCount,
            play: function() {
                return play;
            },
            index: function() {
                return index;
            },
            prev: function() {
                var j = index - 1;
                this.goTo(j);
            },
            next: function(){
                var j = index + 1;
                this.goTo(j);
            },
            goTo: function(j) {
                log('go to - ' + j);

                if(j < 0 || j > trackCount) {
                    j = 0;
                }

                trackSelect(tracks[j]);
            }
        };
    };

    // register the plugin
    videojs.plugin('playlist', playlist);
})(window.videojs);
