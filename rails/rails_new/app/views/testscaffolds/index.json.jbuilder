json.array!(@testscaffolds) do |testscaffold|
  json.extract! testscaffold, :id
  json.url testscaffold_url(testscaffold, format: :json)
end
