puts 'string'.object_id
puts 'string'.object_id

puts :symbol.object_id
puts :symbol.object_id

puts 'goo'

my_first_symbol = :sym

symbol_hash = {
  one: 1,
  symbol_hash: 'value',
  awef: 'value1'
}

strings = %w(HTML CSS JavaScript Python Ruby)

# Add your code below!

symbols = []

strings.each do |s|
  symbols.push(s.to_sym)
end

puts strings
puts symbols

numbers = [1, 2, 3, 4, 5, 6]
evens = []
odds = []
numbers.each do |number|
  if number.even?
    evens.push(number)
  else
    odds.push(number)
  end
end
print evens
print odds

strings = %w(HTML CSS JavaScript Python Ruby)

# Add your code below!

symbols = []

strings.each do |s|
  symbols.push(s.intern)
end

puts strings
puts symbols

numbers = {
  one: 1,
  two: 'two',
  three: 3
}

numbers.each do |key, value|
  puts "#{key} #{value}"
end

movies = {
  finding_nimo: 'good',
  google: 'awesome'
}

movies.each do |key, value|
  puts key.to_s + value.to_s
end

new_hash = {
  one: 1,
  two: 2,
  three: 3
}

old_hash = {
  'one': 1,
  'two' => 2,
  :three => 3
}

puts old_hash
puts new_hash

require 'benchmark'

string_AZ = Hash[('a'..'z').to_a.zip((1..26).to_a)]
symbol_AZ = Hash[(:a..:z).to_a.zip((1..26).to_a)]

string_time = Benchmark.realtime do
  10_000_000.times { string_AZ['r'] }
end

symbol_time = Benchmark.realtime do
  10_000_000.times { symbol_AZ[:r] }
end

puts "String time: #{string_time} seconds."
puts "Symbol time: #{symbol_time} seconds."

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

grades = {
  alice: 100,
  bob: 92,
  chris: 95,
  dave: 97
}

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 5,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

good_movies = movie_ratings.select { |_k, v| v > 3 }
puts good_movies

movie_ratings = {
  memento: 3,
  primer: 3.5,
  the_matrix: 3,
  truman_show: 4,
  red_dawn: 1.5,
  skyfall: 4,
  alex_cross: 2,
  uhf: 1,
  lion_king: 3.5
}
# Add your code below!

movie_ratings.each_key { |k| puts k }

my_hash = {
  one: 1,
  two: 2,
  three: 3
}

my_hash.each_key { |k| print k, ' ' }
# ==> one two three

my_hash.each_value { |v| print v, ' ' }
# ==> 1 2 3

movies = {
  Memento: 3,
  Primer: 4,
  Ishtar: 1
}

puts 'What would you like to do?'
puts "-- Type 'add' to add a movie."
puts "-- Type 'update' to update a movie."
puts "-- Type 'display' to display all movies."
puts "-- Type 'delete' to delete a movie."

choice = gets.chomp.downcase
case choice

when 'add'
  puts 'What movie do you want to add?'
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts "What's the rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been added with a rating of #{rating}."
  else
    puts "That movie already exists! Its rating is #{movies[title.to_sym]}."
  end

when 'update'
  puts 'What movie do you want to update?'
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts 'Movie not found!'
  else
    puts "What's the new rating? (Type a number 0 to 4.)"
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "#{title} has been updated with new rating of #{rating}."
  end

when 'display'
  movies.each do |movie, rating|
    puts "#{movie}: #{rating}"
  end

when 'delete'
  puts 'What movie do you want to delete?'
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts 'Movie not found!'
  else
    movies.delete(title.to_sym)
    puts "#{title} has been removed."
  end
else
  puts "Sorry, I didn't understand you."
end



movies = {
  Laputan: 5,
  Cola: 3,
  Lagenka: 5
}

puts 'add, update, display, delete'
choice = gets.chomp

case choice
when 'add'
  puts 'insert title'
  title = gets.chomp
  rating = gets.chomp
  movies[title.to_sym] = rating.to_i
  puts "done #{title} #{rating}"
when 'update'
  puts 'Updated!'
when 'display'
  puts 'Movies!'
when 'delete'
  puts 'Deleted!'
else
  puts 'Error!'
end


ruby_is_eloquent = true
ruby_is_ugly = false

puts "Ruby is eloquent!" if ruby_is_eloquent
puts "Ruby's not ugly!" unless ruby_is_ugly
