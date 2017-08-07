class User < ApplicationRecord
	has_many :boxes, class_name: "Box"

	before_save :default_values

	def default_values
		self.name ||= "guest"
		self.limit ||= 9
		self.happiness ||= 0
		self.pollution ||= 0
	end
end
