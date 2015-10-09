# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Bench.create!(description: 'Golden Gate Park', lat: 37.4611, lng: 122.2918)
Bench.create!(description: 'Lands End', lat: 37.4710, lng: 122.3020)
Bench.create!(description: 'Presidio', lat: 37.4812, lng: 122.274637)
Bench.create!(description: 'Fort Mason', lat: 37.4824, lng: 122.2536)
