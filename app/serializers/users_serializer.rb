class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :happiness, :pollution, :avatar, :likes
  # simpler API for Users Index API
end
