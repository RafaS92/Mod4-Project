class UsersController < ApplicationController

    # before_action :create

    def create
        user = User.create({
            username: params[:username],
            password: params[:password],
            address: params[:address],
            email: params[:email]
        })
        # render json: user, include: [ :carts ]
        if user.valid?
            current_user = user
            session[:user_id] = user.id
            render json: { success: true, id: user.id }
        else
            render json: { success: false}
        end
    end

    def show
        # byebug
        @current_user = User.find(params[:id])
        render json: @current_user, include: [ :carts, :orders ]
        # byebug
    end

    # def user_params
    #     params.permit(:name)
    # end
    
    # def define_current_user
    #     # byebug
    #     if params[:id]
    #         @current_user = User.find(params[:id])
    #         # byebug
    #     else
    #         @current_user = User.new
    #     end
    # end
    
    # def current_user
    #     @current_user
    #     byebug
    # end

end
