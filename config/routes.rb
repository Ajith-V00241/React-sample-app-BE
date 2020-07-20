Rails.application.routes.draw do
  root 'pages#index'
  resources :books
  get '*path' => 'pages#index', via: :all
end
