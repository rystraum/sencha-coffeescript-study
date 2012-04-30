Ext.application({
    name: 'Kada',
    views: ["notes_list_container"],

    launch: function() {
      var notes_list_container = Ext.create("Kada.view.notes_list_container");
      Ext.Viewport.add(notes_list_container);
      console.log("Load!");
    }
});
