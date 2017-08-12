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
		@user = @box.user
		@user.update(happiness: @user.happiness+3, pollution: @user.pollution+3)
		render json: @box.user, each_serializer: UserSerializer
	end

	def update
		@box.update(box_params)
		render json: @box.user, each_serializer: UserSerializer
	end


	private
	def set_box
		@box = Box.find(params[:id])
	end

	def box_params
		params.require(:box).permit(
			:active, :reuse, :recycled, :trashed, :user_id, :item_id)
	end
end
