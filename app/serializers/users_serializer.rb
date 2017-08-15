class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :happiness, :pollution, :avatar
  # simpler API for Users Index API
end
