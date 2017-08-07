class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :happiness, :pollution, :limit
end
