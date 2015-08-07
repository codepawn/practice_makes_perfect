name = 'Hyun'
puts name
name = 'Hyun'.downcase
puts name
name.upcase
puts name
name.reverse
puts name


print "What's your first name?"
first_name = gets.chomp
first_name = 'hyun'
first_name.capitalize!
puts first_name

print "What's your last name?"
last_name = gets.chomp
last_name.capitalize!

print "What city are you from?"
city = gets.chomp
city.capitalize!

print "What state or province are you from?"
state = gets.chomp
state.upcase!

puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"
