class ProductsController < ApplicationController
  
def new
  @product = Product.new
end

def create
  @product = Product.new(task_params)
  @product.price = calculate_age(@product.birthday_date)
  if @product.save
    redirect_to @product, notice: 'Post was successfully created.'
  else
    render :new
  end
end


def update
  if @product.update(task_params)
    redirect_to @product, notice: 'Post was successfully updated.'
  else
    render :edit
  end
end


def index
  @products = Product.all.order(created_at: :desc)

  if params[:min].present? && params[:max].present?
    @products = @products.where(price: params[:min]..params[:max])
  end

  if params[:search].present?
    @products = @products.search(params[:search]).order(created_at: :desc)
  end

  @products = @products.paginate(page: params[:page], per_page: 6)
end



  def show
    @product = Product.find(params[:id])
            @comment = @product.comments
    @services = Service.where(product_id: params[:id])
  end

  
      def avg_rating
    @total_rating = 0
    @comments.each { |r| @total_rating += r.rating }
    @average_rating = (@total_rating.to_f / @comments.count.to_f) if @comments.present?
  end


  def search
    @products = Product.where("name ILIKE ? OR description ILIKE ?", "%#{params[:query]}%", "%#{params[:query]}%").paginate(page: params[:page], per_page: 6)
    render "products/index"
  end

  private

  def task_params
    params.require(:product).permit(:title, :category_id, :category, 
      :description, :second_name,:patronymic, :price, :phone_number,:address, :photo, :birthday_date, :registration_address)
  end

  def calculate_age(birthdate)
    now = Time.now.utc.to_date
    now.year - birthdate.year - ((now.month > birthdate.month || (now.month == birthdate.month && now.day >= birthdate.day)) ? 0 : 1)
  end
end