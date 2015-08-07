def prime(n)
  is_prime = true
  for i in 2...n
     if n % i == 0
       is_prime = false
     end
  end
  if is_prime
    puts "#{n} is prime"
  else
    puts 'No'
  end
end

prime(95)

def is_prime(n)
  for d in 2..(n - 1)
    false if (n % d) == 0
  end
  true
end

puts is_prime(5)

require 'prime'

puts Prime.first(5)

Prime.each(5) do |prime|
  puts prime
end

def prime(n)
  puts "That's not an integer." unless n.is_a? Integer
  is_prime = true
  for i in 2..n - 1
    is_prime = false if n % i == 0
  end
  if is_prime
    puts "#{n} is prime!"
  else
    puts "#{n} is not prime."
  end
end

prime(2)
prime(4)
prime(11)
prime(51)
prime(97)
