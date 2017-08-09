Rails.application.routes.draw do
	
  resources :boxes, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create, :update]
  resources :ingredients, only: [:index]
  scope '/api' do
    resources :users, only: [:index, :show, :create, :update]
    resources :items, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
