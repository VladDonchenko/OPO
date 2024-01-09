class AddColumsToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :country, :string
    add_column :categories, :city, :string
    add_column :categories, :address, :string
    add_column :categories, :phone, :string
    add_column :categories, :stars, :integer
  end
end
