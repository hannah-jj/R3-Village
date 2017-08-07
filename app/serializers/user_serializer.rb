class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :happiness, :pollution, :active_boxes

  def active_boxes
  	boxes = object.show_boxes
  	results = []
  	boxes.each do |box|
  		box_hash = {}
  		box_hash[:box_id] = box.id
  		box_hash[:item_name] = box.item.name
  		box_hash[:item_url] = box.item.picture
  		results << box_hash
  	end
  	results
  end

end
