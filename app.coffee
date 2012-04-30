Ext.application
  name: "Kada"
  controllers: ["notes"]
  views: ["notes_list_container"]
  launch: ->
    notes_list_container = Ext.create "Kada.view.notes_list_container"
    Ext.Viewport.add notes_list_container
    console.log "Load!"
