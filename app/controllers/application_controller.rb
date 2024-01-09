class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?
	skip_before_action :verify_authenticity_token
	helper_method :current_order

	def current_order
		Order.find_or_create_by(user: current_user, status: :in_progress)
	end

	protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name surname user_phone])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:surname])
    devise_parameter_sanitizer.permit(:account_update, keys: [:user_phone])
  end
end
