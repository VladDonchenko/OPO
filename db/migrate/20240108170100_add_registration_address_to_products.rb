class AddRegistrationAddressToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :registration_address, :string
  end
end
