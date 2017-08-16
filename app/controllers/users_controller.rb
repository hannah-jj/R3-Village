class UsersController < ApplicationController
	before_action :set_user, only: [:show, :update]

	def index
		@users = User.all
		render json: @users, each_serializer: UsersSerializer
	end

	def show
		render json: @user
	end

	def create
		@user = User.create(user_params)
		render json: @user, each_serializer: UsersSerializer
	end

	def update
		@user.update(user_params)
		render json: @user, each_serializer: UsersSerializer
	end


	private
	def set_user
		@user = User.find(params[:id])
	end

	def user_params
		params.require(:user).permit(
			:name, :happiness, :pollution, :avatar, :likes)
	end
end
