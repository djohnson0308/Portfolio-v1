Rails.application.routes.draw do

  get 'work/index'

  root 'home#index'

  get 'home/index'

  get 'home/work'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
