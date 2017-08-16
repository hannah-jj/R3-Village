class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :happiness, :pollution, :avatar, :likes, :active_boxes

  def active_boxes
  	boxes = object.show_boxes
  	results = []
  	boxes.each do |box|
  		box_hash = {}
  		box_hash[:box_id] = box.id
  		box_hash[:name] = box.item.name
  		box_hash[:picture] = box.item.picture
      box_hash[:reuse] = box.reuse
  		results << box_hash
  	end
  	results
  end

end
