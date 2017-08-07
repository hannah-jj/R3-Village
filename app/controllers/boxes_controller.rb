class BoxesController < ApplicationController
	before_action :set_box, only: [:show, :update]

	def index
		@boxes = Box.all
		render json: @boxes
	end

	def show
		render json: @box
	end

	def create
		@box = Box.create(box_params)
		render json: @box
	end

	def update
		@box.update(box_params)
		render json: @box
	end


	private
	def set_box
		@box = Box.find(params[:id])
	end

	def box_params
		params.require(:box).permit(
			:name, :happiness, :pollution)
	end
end
