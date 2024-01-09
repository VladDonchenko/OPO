ActiveAdmin.register Service do
permit_params :attr1, :attr2

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
 
  permit_params :category_id, :name, :description, :price, :product_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:category_id, :name, :description, :price]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
