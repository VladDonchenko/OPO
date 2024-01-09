class AddPatronymicToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :patronymic, :string
  end
end
