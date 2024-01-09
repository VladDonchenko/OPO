class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.belongs_to :category, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.decimal :price, precision:10, scale:2
      t.timestamps
    end
  end
end
