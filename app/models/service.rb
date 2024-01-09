class Service < ApplicationRecord
  belongs_to :category
  has_many :categories

  belongs_to :product, optional: true
  has_many :products

	validates :name, :price, :description, :category_id,presence: true
end
