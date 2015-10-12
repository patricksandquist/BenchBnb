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
#  seating     :integer
#

require 'json'

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true
  def self.in_bounds(bounds)
    neLat = bounds["northEast"]["lat"].to_f
    neLng = bounds["northEast"]["lng"].to_f
    swLat = bounds["southWest"]["lat"].to_f
    swLng = bounds["southWest"]["lng"].to_f

    return Bench.where(lat: swLat..neLat).where(lng: swLng..neLng).to_a
  end
end
