#***************************************************************************
# Server Only Methods
#*****************************************************************************
cheerio = Meteor.npmRequire('cheerio')
Meteor.methods
  getTweets: ->
    result = Meteor.http.get("https://twitter.com/Royal_Arse/status/538330380273979393")
    $ = cheeris.load(result.content)
    resp = $('#stream-items-id > li:nth-child(n) > div > div p').text()
    return resp