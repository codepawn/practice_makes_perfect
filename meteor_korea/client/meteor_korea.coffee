Template.hello.helpers
  helper: ->
    'google'
  count: ->
    arr = [
      {
        no: 1
        name: 'goo'
        email: 'awef@awef.com'
      }
      {
        no: 4
        name: 'gle'
        email: 'oij@awef.com'
      }
      {
        no: 3
        name: 'oij'
        email: 'ioj@awef.com'
      }
      {
        no: 2
        name: 'awef'
        email: 'awef@awef.com'
      }
    ]

    arr = _.sortBy(arr, (obj) ->
      obj.no
    )

