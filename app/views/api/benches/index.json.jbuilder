@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :description
  end
end
