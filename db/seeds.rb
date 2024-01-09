# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?
Category.create!(title: 'Автономна Республіка Крим',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Widok_na_Ja%C5%82t%C4%99_ze_statku_01.JPG/1920px-Widok_na_Ja%C5%82t%C4%99_ze_statku_01.JPG')
Category.create!(title: 'Ві́нницька о́бласть ',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%B0._%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%B0%D1%8F_%D0%A0%D0%B0%D0%B4%D0%B0..JPG/308px-%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%B0._%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%B0%D1%8F_%D0%A0%D0%B0%D0%B4%D0%B0..JPG')
Category.create!(title: 'Волинська область',image:'https://restpark.com.ua/wp-content/uploads/2017/01/lutsk.jpg')
Category.create!(title: 'Дніпропетровська область',image:'https://www.ebrd.com/image/1395293676359.jpg')
Category.create!(title: 'Донецька область',image:'https://s0.tchkcdn.com/g-ThgHKbxvAa6jglR0JnOOGA/17/189890/660x480/f/0/26_donbass_arena.jpg')
Category.create!(title: 'Житомирська область',image:'https://wrs.com.ua/uploads/touragent_resort/content/0009/48/01.jpg')
Category.create!(title: 'Закарпатська область',image:'https://pravdaye.com.ua/wp-content/uploads/2023/03/a18.jpg')
Category.create!(title: 'Запорізька область',image:'https://zphoto.zp.ua/wp-content/uploads/513-770x550.jpg')
Category.create!(title: 'Івано-Франківська область',image:'https://f.discover.ua/city/21/RF5VP.jpg')
Category.create!(title: 'Київська область',image:'https://fakty.com.ua/wp-content/uploads/2023/04/13/novyj-proekt-58.jpg')
Category.create!(title: 'Кіровоградська область',image:'https://dostyp.com.ua/media/CACHE/images/photos/45dd3911-4e74-4d2c-8b25-8f0d2a98369d/90f1dbdf9f54be9630fec68488125a8b.webp')
Category.create!(title: 'Луганська область',image:'https://vokzal.org.ua/wp-content/uploads/1425192911_130399_7001.jpg')
Category.create!(title: 'Львівська область',image:'https://gohotels.com.ua/images/stories/f08072159a443e07501f3df97987f8a3.jpg')
Category.create!(title: 'Миколаївська область',image:'https://f.discover.ua/city/125/udQmd.jpg')
Category.create!(title: 'Одеська область',image:'https://uamedtours.com.ua/storage/images/0b72f48967d33b504c7b742bba050f4d.jpg')
Category.create!(title: 'Полтавська область',image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9b/72/79/poltava-central-square.jpg?w=700&h=500&s=1')
Category.create!(title: 'Рівненська область',image:'https://f.rivne.travel/city/190/ro5B6.jpg')
Category.create!(title: 'Сумська область',image:'https://visit.sumy.ua/wp-content/uploads/2019/04/345345-1.png')
Category.create!(title: 'Тернопільська область',image:'https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHdQIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1dbc7d43a3ada3e6d8defc6de266834e86793032/%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%20%D0%B4%D0%B5%20%D1%81%D0%BC%D0%B0%D1%87%D0%BD%D0%BE%20%D0%BF%D0%BE%D1%96%CC%88%D1%81%D1%82%D0%B8.jpeg')
Category.create!(title: 'Харківська область',image:'https://sho.org.ua/wp-content/uploads/2023/04/harkiv.webp')
Category.create!(title: 'Херсонська область',image:'https://www.arr.ks.ua/wp-content/uploads/2019/03/41039_800x600_Screenshot_1.png')
Category.create!(title: 'Хмельни́цька о́бласть ',image:'https://ikhmelnychanyn.com/wp-content/uploads/sites/9/2022/12/e262172-705.jpg')
Category.create!(title: 'Черкаська область',image:'https://photo.in.ck.ua/article/5b06/6714/c101/0525/b100/4b45/naberezhnaya-eto-vse-chto-imeyut-cherkassy.12.jpeg?1540370106')
Category.create!(title: 'Чернівецька область',image:'https://molbuk.ua/uploads/posts/2020-10/1601715683_im578x383-university-of-chernivtsi.png')
Category.create!(title: 'Чернігівська область',image:'https://chernigiv-rada.gov.ua/storage/images/22/05/16/15/02cb08fb232014359783c5978afcdaa5-medium66.jpg')