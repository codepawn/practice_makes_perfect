@BlogController = RouteController.extend
  subscriptions: ->
    @subscribe 'article', @params._id

  data: ->
    Articles.findOne _id: @params._id

  action: ->
    console.log "id: #{@params._id}"
    console.dir @params
    @render 'Blog', {}


