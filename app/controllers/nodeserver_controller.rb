class NodeserverController < ApplicationController
  def show
  require 'net/http'
  @nodeserver = Net::HTTP.get(URI.parse("http://127.0.0.1:2000"))
  #  @user = User.find(params[:id])
  render json: @nodeserver
  end
end
