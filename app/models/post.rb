class Post < ApplicationRecord
  belongs_to :user
  has_many :photos, dependent: :destroy
end
