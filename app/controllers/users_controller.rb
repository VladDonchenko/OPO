class UsersController < ApplicationController
	before_action :set_user

  def update
  @user = User.find(params[:id])
  if @user.update(user_params)
    redirect_to @user, notice: 'Профіль користувача оновлено.'
  else
    render :edit
  end
end

	
	private

  def set_user
    @user = User.find(params[:id])
    @orderlist = OrderItem.where(user_id: @user.id)
  end

  def user_params
    params.require(:user).permit(:email, :name, :surname, :user_phone, :avatar)
  end

end
