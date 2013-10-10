// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      console.log(this.get('songQueue'));
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  }

});
