'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', [
        {
          title: 'Off-Grid itHouse',
          price: '481',
          ecoFeatures: 'Solar panels, sliding doors made from Solarban 60 Glass, minimal living, fresh pressed juice delivery',
          description: "The house is 100% off-grid, powered by solar panels for energy and hot water, and is located in a pristine remote valley in the beautiful California high desert. The house observes key green principals of smaller footprint, minimal disturbance to the natural beauty of the surrounding landscape, use of renewable resources, and living simply and minimally.",
          imageUrl: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?im_w=1200',
          address: '5500 Roy Rodgers Rd',
          city: 'Pioneertown',
          state: 'California',
          zip: '92268',
          country: 'United States',
          ownerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The Roost Treehouse',
          price: '92',
          ecoFeatures: 'Toxin-free, foam-free, constructed with local & sustainable materials, LED lights',
          description: "The Roost is located 9 feet in the air and only has access via stairs. You can enjoy the cool breeze of the trees from the deck, where you also get a great view of the sunrise. Building The Roost has been a labor of love for me and my community of friends. The purpose was to build a beautiful structure that focused on natural, healthy, and local materials where possible. Many have contributed to it's success, and the result is a unique and beautiful, peaceful and healthy structure. Every time I enter The Roost, I love the fact that the only smell is that of wood!",
          imageUrl: 'https://a0.muscache.com/im/pictures/5f7953f6-1007-490c-8aef-e3af23e9b607.jpg?im_w=1200',
          address: '1607 Roseland St',
          city: 'Greensboro',
          state: 'North Carolina',
          zip: '27408',
          country: 'United States',
          ownerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'The O2Haus',
          price: '115',
          ecoFeatures: 'Certified as one of the most energy efficient homes in the world, solar panels, net-zero energy, reclaimed shipping crate hardwood floors, heat-recovery ventilation system',
          description: "Guests can rent a private room in The O2Haus, a 1,950-square-foot home overlooking the Tulatin Hills. The home sits on top of a 11,000-gallon potable water cistern and features composting toilets, stormwater catchment, and systems incorporated into the landscape for rainwater infiltration. The home potentially produces more energy than it consumes.",
          imageUrl: 'https://pdxlivingllc.files.wordpress.com/2013/10/o2haus-0011-dsc09493_4_5.jpg',
          address: '15657 NW Energia St',
          city: 'Portland',
          state: 'Oregon',
          zip: '97229',
          country: 'United States',
          ownerId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Dreamy Tropical Tree House',
          price: '300',
          ecoFeatures: 'Solar power, rainwater catchment, natural lighting, cork shower, bamboo construction',
          description: "Red cinder leads you through the dense jungle to your secluded bamboo treehouse. Nestled on top of stilts 15' up in the canopy of the local flora, ascend to your retreat via the trapdoor or begin your adventure in Volcano National Park 10 miles away. Upon arrival, let the red cinder path be your yellow brick road as you are lead through the jungle to your personal paradise. At ground level you will encounter a hanging bed, suspended beneath the floor of your new living quarters. Stop and relax or continue up the staircase to the trapdoor. It is through this trapdoor that you are allowed access to the lanai amongst the canopy of trees. A beautiful wrap around lanai allows for a 360 degree view of the lush jungle, while two sliding glass doors grant access to the bedroom.",
          imageUrl: 'https://a0.muscache.com/pictures/58855361/020a3302_original.jpg',
          address: '15 Lehuanani St',
          city: 'Mountain View',
          state: 'Hawaii',
          zip: '96771',
          country: 'United States',
          ownerId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Modern Beach Container Home',
          price: '141',
          ecoFeatures: 'Recycled shipping container, organic linens, paperstone countertops, original mahogany floors.',
          description: "Located a short walk from the beach, these modern container homes offer everything a couple or small family could want for a fun surf trip or beach vacation. The homes, recently profiled in the New York Times, Coastal Living and Apartment Therapy feature modern and well-equipped interior spaces situated in a peaceful and private setting. The Conchs are two shipping container houses that were thoughtfully constructed in an effort to create unique but low profile vacation rentals for visitors to Carolina Beach, NC. The containers are located on adjoining lots so that they can be rented independently or together for a larger group. The siting of the units on the lots ensures plenty privacy and lots of space to spread out.",
          imageUrl: 'https://a0.muscache.com/pictures/c7e714bb-0bff-4cd1-b96c-89beed9eb2bf.jpg',
          address: '1408 Swordfish Ln',
          city: 'Carolina Beach',
          state: 'North Carolina',
          zip: '28428',
          country: 'United States',
          ownerId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Silo Studio Cottage',
          price: '220',
          ecoFeatures: 'Built from wood and locally sourced materials. Completely off the grid.',
          description: "Who says green rental properties have to be ugly? This stunning, eco-friendly vacation rental is stylish and good for the environment. The Silo Studio is a unique round-shaped cottage with a 35-foot cone ceiling. It was once a former sculpting studio and it’s located in Tyringham, Massachusetts. Inside the cottage, you’ll find all the amnesties that you need, with a kitchenette, queen bed, coffee table, coffee maker, and bathroom. The cottage lies on four acres of gardens and woodland, and you can really feel like you’ve got off the grid and kick back surrounded by stunning natural scenery. Wooden tree-house-like properties are some of the best eco-friendly vacation rentals out there, as many of them use barely any electricity and have minimal impact on the landscape.",
          imageUrl: 'https://i0.wp.com/www.alltherooms.com/blog/wp-content/uploads/2019/06/Screen-Shot-2019-06-18-at-17.34.58.png?resize=640%2C442&ssl=1',
          address: '25 Webster Rd',
          city: 'Tyringham',
          state: 'Massachusetts',
          zip: '01264',
          country: 'United States',
          ownerId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Glamping Eco-Pod',
          price: '220',
          ecoFeatures: 'Large windows heat the pod during the day and a completely off the grid setup offers full peace of mind. Take an eco-tour in a state of the art, low emission vehicle.',
          description: "The ultimate desert 'get away from it all' destination. Set on 480 acres and surrounded by public land. Your nearest neighbor is 3 miles away, but you're only 6 miles away from the City of Ridgecrest, CA, a Gateway to Death Valley. Completely off-grid, but with modern amenities. Use the pods as a convenient stop between Death Valley, Tahoe/Mammoth Mountain and the California Coastal cities.Designed for indoor/outdoor living, the space is small and intimate, meant to celebrate the stark desert environment. You feel the intensity of the sun and wind, hear it when it rains, and experience the quiet solitude of the dark, starry sky.",
          imageUrl: 'https://a0.muscache.com/im/pictures/744ad97f-aee0-4e12-b9f1-2dea90059020.jpg?im_w=1440',
          address: '400 Palm Dr',
          city: 'Ridgecrest',
          state: 'California',
          zip: '93555',
          country: 'United States',
          ownerId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Eco-Friendly Villa',
          price: '500',
          ecoFeatures: 'Solar and wind power combine to give this villa an intimate relationship with the natural surroundings.',
          description: "Reconnect with nature at this three-bedroom vacation villa with a panoramic view of the Sangre de Cristo Mountains in Mora County, New Mexico. Located at the peak of a hill, this accommodation sleeps up to 13 people and is perfect for special events. A large kitchen and dining alcove can easily fit up to eight people, but the peaceful yoga room can be transformed into a dining room for 20 with an adjacent patio for additional outdoor seating. This accommodation in Cleveland, New Mexico allows for access to a community retreat center and 10 acres of vegetated land with walkways and benches for guests to enjoy. Guests can go off the grid with solar and wind power at this home, but will never have to worry due to a trustworthy backup generator. A yoga/movement room will bring peace and rehabilitation to any getaway while still allowing for the use of Wi-Fi all across the accommodation.",
          imageUrl: 'https://media.glampinghub.com/CACHE/images/accommodations/hawk-hill-retreat-house-1489487711808/074dadaab0701443a76ea41934b8782c.jpg',
          address: '2525 Rio La Casa Rd',
          city: 'Cleveland',
          state: 'New Mexico',
          zip: '87715',
          country: 'United States',
          ownerId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Tree House Cabin',
          price: '300',
          ecoFeatures: 'This eco-friendly rental utilizes recycled paper products or cloth alternatives, solar outdoor light, water-saving kitchen and bathroom fixtures, energy-saving windows, low-impact environmental furnishings. Even the toilet is a composting toilet.',
          description: "Located near Asheville, North Carolina, this tree house-style elevated cabin is 600 square feet in size and is situated at an elevation of 2,100 feet, accommodating six guests. There is one bedroom with a queen-size bed, as well as another queen-size bed found in the sleeping loft, and a sofa bed in the living room. Guests should note that the sleeping loft is accessed by a fixed ladder and is best for school-aged children or mobile adults. It is not suitable for younger children and older adults. Linens are kindly provided by the hosts at his rental in Asheville, North Carolina. This treehouse camping site is dedicated to being an eco-friendly accommodation option. This includes a number of different practices and processes, such as denim insulation in the walls, an advanced greywater treatment system, wood milled from the property that is untreated and chemical free, a waterless toilet (doesn't waste water and creates high-quality fertilizer), recycling and composting, and utilizing a large number of energy-saving and environmentally friendly products.",
          imageUrl: 'https://media.glampinghub.com/CACHE/images/accommodations/eco-friendly-elevated-cabin-rental-for-tree-house-experience-near-1563810398131/12722569e82256140dcd2b2925cd3186.jpg',
          address: '84 Hopson Hollow',
          city: 'Green Mountain',
          state: 'North Carolina',
          zip: '28740',
          country: 'United States',
          ownerId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Hand-Made Hut',
          price: '150',
          ecoFeatures: 'The hut uses no electricty and the showers are heated with solar power. It is located in an eco-village with a communal kitchen and like-minded residents.',
          description: "This rustic hut is made of sandbags and cob, located off the beaten track, in a forming Eco Village, in Ephraim, Utah. Surrounded by forested mountains, lakes, and valleys, glampers will be completely immersed in nature. The hut boasts a living tree in the center, comfortable seating areas and a pull out sofa that sleeps two guests. There is an outhouse for the guests to use, as well as solar-heated showers. The property camp area with a fire pit and a sweat house for spiritual experiences. The hut is located in a forming Eco Village and therefore everything is eco-friendly. There is a communal camp kitchen available for the guests to use, as well as a cozy fire pit for nights under the stars.",
          imageUrl: 'https://media.glampinghub.com/CACHE/images/accommodations/dragon-cottage-cabin-1487583045304/21e7a6d9f6a6b8e5f6980b50e27d4e7d.jpg',
          address: '600 E 700 N St',
          city: 'Ephraim',
          state: 'Utah',
          zip: '84627',
          country: 'United States',
          ownerId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
