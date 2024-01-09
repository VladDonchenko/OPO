Rails.application.routes.draw do
  get '/aboutus', to: 'pages#aboutus'
  get '/pay', to: 'orders#pay'
  get 'orders/show'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
     resources :products do
    get 'search', on: :collection
  end
  resources :categories, only: :show do
    resources :products, only: %i[index show]
  end

resources :comments

resources :products do
    resources :order_items, only: %i[create update destroy] do
      member do
        get 'add_quantity'
        get 'remove_quantity'
      end
    end
end

  resources :categories do
    member do
      get 'show_categories'
    end
  end

  resources :orders, only: %i[create update destroy] do
      member do
        get 'complete'
      end
    end

  resources :users do
    member do
      get 'profile'
    end
    patch :save_profile, on: :collection
  end

    resources :orders, only: :show
  root 'categories#index'
end