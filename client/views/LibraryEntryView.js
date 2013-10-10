// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'li',
  className: 'libraryEntry',
  template: _.template('<span class="song-artist"><%= artist %>  </span><span class="song-title"><%= title %></span>'),
  //template: _.template($('#libraryViewTemplate').html()),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
//    return this.$el.html(this.template(this.model.toJSON()));
  }

});
