class AddSecondNameToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :second_name, :string
    add_column :products, :phone_number, :string
    add_column :products, :address, :string
  end
end
