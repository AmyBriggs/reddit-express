
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({users_id: 1, title: 'Western States 100', author: 'Amy Briggs', image_url:'http://www.dirtproof.co.uk/wp-content/uploads/2014/07/Western-States-100M-2014-135.jpg' , description: 'The Western States ® 100-Mile Endurance Run is the world’s oldest 100-mile trail race. Starting in Squaw Valley, California near the site of the 1960 Winter Olympics and ending 100.2 miles later in Auburn, California, Western States, in the decades since its inception in 1974, has come to represent one of the ultimate endurance tests in the world.', votes: 5, created_at: new Date('Sat Nov 5 2016 9:23:11 GMT-0600 (MDT)')}),
        knex('posts').insert({users_id: 3, title: 'Zion 100', author: 'Gordon Graham', image_url:'https://www.ultrarunning.com/wp-content/uploads/2014/04/Zion-12-600x336.jpg' , description: 'A challenging, scenic run through the southern Utah desert adjacent to Zion National Park. 4 distances will be offered in 2015- a Half Marathon, 50k, 100k, and a 100 miler. The 100 miler and 100k will be run on Friday, with the half marathon and 50k on Saturday. The 100 mile course includes 4 steep climbs onto mesas that offer incredible views of the varied geological features of the area.', votes: 3, created_at: new Date('Sun Nov 6 2016 12:45:04 GMT-0600 (MDT)') }),
        knex('posts').insert({users_id: 2, title: 'Vermont 100', author: 'Lisa Ma', image_url:'http://levelrenner.com/wp-content/uploads/2015/07/emily-levan-vt-100k-ben-kimball-7.29.151.jpg' , description: 'The Vermont 100 Endurance Race is one of the original 100 mile runs in the USA and a part of the Grand Slam Series of Ultrarunning. Each year, 300 runners attempt to finish this hilly race over beautiful Vermont back roads and trails under the 30 hour cutoff point, and a well-trained few finish in under 24 hours. The race proceeds support Vermont Adaptive.', votes: '4', created_at: new Date('Sun Nov 6 2016 14:01:23 GMT-0600 (MDT)') }),
        knex('posts').insert({users_id: 1, title: 'Ultra Trail Mont Blanc', author: 'Amy Briggs', image_url:'http://jogging.lavenir.net/wp-content/uploads/2013/12/UTMB9.jpg' , description: 'Mountain race, with numerous passages in high altitude (>2500m), in difficult weather conditions (night, wind, cold, rain or snow), that needs a very good training, adapted equipment and a real capacity of personal autonomy.', votes: 7, created_at: new Date('Sat Nov 5 2016 8:20:11 GMT-0600 (MDT)') })

      ]);
    });
};
