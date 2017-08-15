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
		@users = User.all
		render json: @users
	end

	def update
		@user.update(user_params)
		@users = User.all
		render json: @users, each_serializer: UsersSerializer
	end


	private
	def set_user
		@user = User.find(params[:id])
	end

	def user_params
		params.require(:user).permit(
			:name, :happiness, :pollution, :avatar)
	end
end
