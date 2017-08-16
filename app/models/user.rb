class User < ApplicationRecord
	has_many :boxes, class_name: "Box"

	before_save :default_values

	def default_values
		self.name ||= "guest"
		self.limit ||= 9
		self.happiness ||= 0
		self.pollution ||= 0
		self.likes ||=0
	end

	def self.world_pollution
		User.all.inject(0){|sum, user| sum + user.pollution}
	end

	# return an array of all active boxes
	def show_boxes
		self.boxes.select {|box| box.active == true}
	end

	def full_room?
		self.show_boxes.size >= self.limit
	end
end
