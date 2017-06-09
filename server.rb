require 'sinatra'

set :public_folder, proc {File.join(root)}

before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

get '/temperature' do
  File.read('temperature.csv')
end

post '/temperature' do
  p params[:temperature]
  File.open("temperature.csv","w") do |f|
       f.write(params[:temperature])
    end

end
