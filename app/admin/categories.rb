ActiveAdmin.register Category do
permit_params :attr1, :attr2
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
   permit_params :title,:image

  form do |f|
    f.inputs do
      f.input :title
      f.input :image
    end
    
end

end
