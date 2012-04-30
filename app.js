Ext.application({
    name: 'Kada',
    views: ["NotesListContainer"],

    launch: function() {
      var notes_list_container = Ext.create("Kada.view.NotesListContainer");
      Ext.Viewport.add(notes_list_container);
      console.log("Load!");
    }
});
