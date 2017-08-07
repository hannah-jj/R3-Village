class BoxSerializer < ActiveModel::Serializer
  attributes :id, :active, :reuse, :recycled, :trashed, :user_id, :item_id
end
