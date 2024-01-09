class AddServisesToRooms < ActiveRecord::Migration[6.1]
  def change
    change_table :services do |t|
    t.references :product, null: true
    end
  end
end
