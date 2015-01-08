Meteor.startup ->
  if Articles.find().count() is 0
    Articles.insert
      name: 'ipsum amet'
      description: "orem ipsung elit. Architecto consequatur enim error explicabo fugit illo illum minima molestiae molestias neque numquam obcaecati porro quaerat quibusdam ratione tempore, voluptas voluptatum? Quibusdam!"
      src: 'http://jsfiddle.net/bufeK/embedded/'
    Articles.insert
      name: 'Lorem ipsum dolor sit amet'
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur enim error explicabo fugit illo illum minima molestiae molestias neque numquam obcaecati porro quaerat quibusdam ratione tempore, voluptas voluptatum? Quibusdam!"
      src: 'http://www.scala-js-fiddle.com/'
    Articles.insert
      name: 'ipsum amet'
      description: "orem ipsung elit. Architecto consequatur enim error explicabo fugit illo illum minima molestiae molestias neque numquam obcaecati porro quaerat quibusdam ratione tempore, voluptas voluptatum? Quibusdam!"
      src: 'http://www.meteorjs.kr/'