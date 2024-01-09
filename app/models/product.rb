class Product < ApplicationRecord
  belongs_to :category
  has_many :categories
  has_many :order_items
  has_many :comments
  has_many :services
  has_one_attached :photo
  enum gender: { Чоловіча: 'Чоловіча', Жічночча: 'Жіноча'}
  enum material_status: { Одружений: 'Одружений', Неодружений: 'Неодружений',
    Заміжня: 'Заміжня', Незаміжня: 'Незаміжня'}
  
  validates :title, :second_name, :patronymic, :phone_number,:address, :birthday_date, :description, presence: true

def self.search(search)
  if search.present?
    where('title LIKE :search OR second_name LIKE :search OR patronymic LIKE :search', search: "%#{search}%")
  else
    none
  end
end



     def to_param
    "#{id}-#{title.gsub(/[^a-z0-9]+/i, '-')}"
  end

   def rating
    return 0 if comments.empty?
    comments.sum(&:rating).to_f / comments.count.to_f
  end
  
end
