class OrderItemsController < ApplicationController

def create
    cart = current_order.order_items.find_by(product_id: params[:product_id], total_price: 0)
    if cart.present?
      cart.update(quantity: cart.quantity + 1, total_price: cart.product.price * cart.quantity)
    else
      cart = current_order.order_items.create(product_id: params[:product_id], user: current_user,
       total_price: 0)
    end
    cart = current_order.order_items.update(total_price: cart.product.price * cart.quantity)
    redirect_to root_path, notice: 'Added to cart'
  end

  def update
    order_item = OrderItem.find(params[:id])
    order_item = OrderItem.total_price(cart.product.price * cart.quantity)
    redirect_to order_path(current_order)
  end

  def remove_quantity
    order_item = OrderItem.find(params[:id])
    order_item.update(quantity: order_item.quantity - 1)
    order_item.destroy if order_item.quantity == 0
    redirect_to order_path(current_order)
  end

  def add_quantity
    order_item = OrderItem.find(params[:id])
    order_item.update(quantity: order_item.quantity + 1)
    order_item.update( total_price: order_item.product.price * order_item.quantity)
    redirect_to order_path(current_order)
  end

  def total_price
    order_item = OrderItem.find(params[:id])
    order_item.update(total_price: order_item.product.price * order_item.quantity)
    redirect_to order_path(current_order)
  end

  def destroy
    order = OrderItem.find(params[:id])
    order_item = OrderItem.find(params[:id])
    order_item.update(quantity: order_item.quantity * 0)
    order_item.destroy if order_item.quantity == 0
     redirect_back(fallback_location: root_path)
  end

end
