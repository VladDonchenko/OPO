class AddDataToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :birthday_date, :date
  end
end
