class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(
      params[:bounds],
      params[:minSeats],
      params[:maxSeats]
    )
    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def show
    @bench = Bench.find_by_id(params[:bench_id])
    render json: @bench
  end

  private

  def bench_params
    params.require('bench').permit(:description, :lat, :lng, :seating)
  end
end
