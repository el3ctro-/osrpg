class WelcomeController < ApplicationController
  def index
  end

  def monsters
  render layout: "monsters"
#  render "welcome/monsters"
  end

end

