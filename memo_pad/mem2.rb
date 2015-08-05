colors = {"blue" => 3, "green" => 1, "red" => 2}

puts colors

colors = colors.sort_by do |color, count|
  count
end

puts colors

colors.reverse!

puts colors