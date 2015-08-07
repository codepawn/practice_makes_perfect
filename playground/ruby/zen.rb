if true puts "It's true!"
puts "It's true!" if true
puts "It's true!" unless false
puts true ? 'true': 'false'

greeting = "there!".capitalize
puts greeting


puts "Hello there!"
greeting = gets.chomp.capitalize
puts greeting
# Add your case statement below!
case greeting
when "English"
  puts 'Hello!'
when "French"
  puts 'Bonjour!'
when "German"
  puts 'Guten Tag!'
when "Finnish"
  puts 'Haloo!'
else
  puts 'goo?'
end


favorite_book = nil
puts favorite_book

favorite_book ||= "Cat's Cradle"
puts favorite_book

favorite_book ||= "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_book = "Why's (Poignant) Guide to Ruby"
puts favorite_book

favorite_language ||= 'Python'
puts favorite_language

def multiple_of_three(n)
  return n % 3 == 0 ? "True" : "False"
end

def multiple_of_three(n)
  n % 3 == 0 ? "True" : "False"
end


def a
  puts "A was evaluated!"
  return true
end

def b
  puts "B was also evaluated!"
  return true
end

puts a || b
puts "------"
puts a && b

5.times { puts 'foo!'}

[1,2,3].each {|num| puts num*10}

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each {|n| puts n%2==0 ? 'even' : 'odd' }

my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

my_array.each {|x| puts x if x % 2 == 0}

99.upto(100) { |num| print num, " " }
"A".upto("P") {|a| puts a}

puts [1, 2, 3].respond_to?(:push)
puts [1, 2, 3].respond_to?(:to_sym)
age = 28
puts age.respond_to?(:next)
puts age.next

puts alphabet = ["a", "b", "c"] << "d"

puts caption = "A giraffe surrounded by " << "weezards!"

favorite_things = ["Ruby", "espresso", "candy"]

puts "A few of my favorite things:"

favorite_things.each do |thing|
  puts "I love " << thing << "!"
end


favorite_things = ["Ruby", "espresso", "candy"]

puts "A few of my favorite things:"

favorite_things.each do |thing|
  puts "I love #{thing}!"
end

puts 'One is less than two!' if 1 < 2

if 1 < 2
  puts "One is less than two!"
else
  puts "One is not less than two."
end

puts 1 < 2 ? "One is less than two!": "One is not less than two."

puts "What's your favorite language?"
language = gets.chomp

case language
when "Ruby"
  puts "Ruby is great for web apps!"
when "Python"
  puts "Python is great for science."
when "JavaScript"
  puts "JavaScript makes websites awesome."
when "HTML"
  puts "HTML is what websites are made of!"
when "CSS"
  puts "CSS makes websites pretty."
else
  puts "I don't know that language!"
end

favorite_animal ||= "Hume"

def square (n=8)
    n * n
end

puts square

3.times do
   puts "I'm a refactoring master!"
end
