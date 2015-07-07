json.array!(@scaffolds) do |scaffold|
  json.extract! scaffold, :id
  json.url scaffold_url(scaffold, format: :json)
end
