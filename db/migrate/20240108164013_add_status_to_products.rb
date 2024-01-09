class AddStatusToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :material_status, :string
  end
end
