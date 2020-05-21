User.destroy_all
Order.destroy_all
Product.destroy_all
Cart.destroy_all

require "faker"




10.times do 
    User.create({username: Faker::Name.first_name,password:"123",address: Faker::Address.full_address,email: Faker::Internet.email})
end

10.times do
    Product.create({name: Faker::Commerce.product_name, price: Faker::Commerce.price, description: Faker::Commerce.department, image:"https://www.nme.com/wp-content/uploads/2019/06/Tool-Download-Festival-2019-6.jpg"})
end

10.times do 
    Cart.create({user_id: User.all.sample.id})
end


10.times do
    Order.create({product_id: Product.all.sample.id ,cart_id: Cart.all.sample.id})
end


