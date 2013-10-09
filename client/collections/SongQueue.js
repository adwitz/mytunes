// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.queue = [];
  },
  enqueue: function(song){
    //add a song to the playlist queue
  },
  dequeue: function(song) {
    // remove a song once it is playing
  },
  removeSong: function(song) {
    // remove a song from the list before it has been played
  }

});
