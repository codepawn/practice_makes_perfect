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
  if movies[title.to_sym].nil?
    puts 'insert rating'
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts "done #{title} #{rating}"
  else
    puts 'exist'
  end

when 'update'
  puts 'title'
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts 'none'
  else
    puts 'rating'
    rating = gets.chomp
    movies[title.to_sym] = rating.to_i
    puts 'done'
  end

when 'display'
  movies.each { |movie, rating| puts "#{movie}: #{rating}" }

when 'delete'
  title = gets.chomp
  if movies[title.to_sym].nil?
    puts 'none'
  else
    movies.delete(title.to_sym)
  end
  puts movies
else
  puts 'Error!'
end
