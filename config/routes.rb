Rails.application.routes.draw do
  get '*path', to: 'react#home'
  root "react#home"
end
