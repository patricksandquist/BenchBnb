class Api::BenchesController < ApplicationController
  def index
<<<<<<< HEAD
    @benches = Bench.in_bounds(params[:bounds])
=======
    @benches = Bench.in_bounds(
      params[:bounds],
      params[:minSeats],
      params[:maxSeats]
    )
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
<<<<<<< HEAD
      render :index
=======
      render json: @bench
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
<<<<<<< HEAD
    params.require('bench').permit(:description, :lat, :lng)
=======
    params.require('bench').permit(:description, :lat, :lng, :seating)
>>>>>>> 78378beb0b0fb842a069bf038ea60d53fc094357
  end
end
