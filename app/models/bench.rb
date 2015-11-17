# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
<<<<<<< HEAD
#
=======
#  seating     :integer
#

>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
require 'json'

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true
<<<<<<< HEAD
  def self.in_bounds(bounds)
=======
  def self.in_bounds(bounds, minSeats, maxSeats)
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
    neLat = bounds["northEast"]["lat"].to_f
    neLng = bounds["northEast"]["lng"].to_f
    swLat = bounds["southWest"]["lat"].to_f
    swLng = bounds["southWest"]["lng"].to_f

<<<<<<< HEAD
    return Bench.where(lat: swLat..neLat).where(lng: swLng..neLng).to_a
=======
    return Bench
      .where(lat: swLat..neLat)
      .where(lng: swLng..neLng)
      .where(seating: minSeats..maxSeats)
      .to_a
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  end
end
