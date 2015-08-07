$VERBOSE = nil    # We'll explain this at the end of the lesson.
require 'prime'   # This is a module. We'll cover these soon!

def first_n_primes(n)
  'n must be an integer.' unless n.is_a? Integer
  'n must be greater than 0.' if n <= 0

  prime_array = [] if prime_array.nil?

  prime = Prime.new
  n.times do
    prime_array << prime.next
  end
  prime_array
end

print first_n_primes(10)


require 'prime'

def first_n_primes(n)
  # Check for correct input!
  "n must be an integer" unless n.is_a? Integer
  "n must be greater than 0" if n <= 0

  # The Ruby 1.9 Prime class makes the array automatically!
  prime = Prime.instance
  prime.first n
end

puts first_n_primes(10)
