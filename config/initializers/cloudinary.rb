Cloudinary.config do |config|
  config.cloud_name = ENV["cloudinary_cloud_name"]
  config.api_key = ENV["cloudinary_api_key"]
  config.api_secret = ENV["cloudinary_api_secret"]
  config.cdn_subdomain = true
end
