class Greeter
  def initialize(name)
    @name = name
    puts "Hello #{@name}!"
  end

  def salute
    puts "Hello #{@name}!"
  end

  def foobar
    puts 'foo'
  end

  def nameIs(nam)
    @nam = nam
    puts '#{@nam}'
  end
end

g = Greeter.new("world")

g.salute
g.foobar
g.nameIs('go')
