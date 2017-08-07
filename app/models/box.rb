class Box < ApplicationRecord
	belongs_to :user
	belongs_to :item

	before_save :default_values
	validates :user_id, presence: true
	validates :item_id, presence: true

	def default_values
		self.reuse ||= 0
		self.recycled ||= false
		self.trashed ||= false
	end
end
