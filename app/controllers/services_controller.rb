class ServicesController < ApplicationController
	def index
	end

	def show
		@service = Service.find(params[:id])
		@servise_category = Service.where(category_id: @category)
	end

	def create 
		@service = Service.new(service_params)
	end

private

  def servise_params
      params.require(:service).permit(:name, :description, :price, :category_id)
    end

end

