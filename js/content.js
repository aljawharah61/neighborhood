var categories = [
    'all', //0
    'coffee shop', //1
    'store', //2
    'Bank',//3
    'Restaurant'//4

  ];

var cityLocations = [];
//coffee shop
cityLocations.push({
    name: 'dr.CAFE COFFEE',
    location: {
        lat:24.681243,
        lng:46.777904
    },
    tags: [categories[0],categories[1]],
    fourSqrID: 'bc5fb4b42419521c95c031d'
});
cityLocations.push({
    name: 'Address Cafe',
    location: {
        lat:24.720328,
        lng:46.789575
    },
    tags: [categories[0],categories[1]],
    fourSqrID: 'eb41a5f6da1df9ff9e53eaf'
});
cityLocations.push({
    name: 'Brew Crew',
    location: {
        lat:24.765260,
        lng:46.725169
    },
    tags: [categories[0],categories[1]],
    fourSqrID: 'e47a598b379e6c3e94b'
});

//shops
cityLocations.push({
    name: 'FIXTAG',
    location: {
        lat: 24.778267,
        lng: 46.689480
    },
    tags: [categories[0],categories[2]],
    fourSqrID: '591b559fdb04f50b17a07464'
});

//banks
cityLocations.push({
    name: 'Samba Bank',
    location: {
        lat: 24.7783383,
        lng:46.68980529999999
    },
    tags: [categories[0], categories[3]],
    fourSqrID: '4bb9bbc653649c74b63048fb'
});
cityLocations.push({
    name: 'SAAB Bank',
    location: {
      lat: 24.778878,
      lng: 46.69128669999998
    },
    tags: [categories[0], categories[3]],
    fourSqrID: '568b9374498e7ae073d1c12a'
});
//Restaurant
cityLocations.push({
    name: 'LA RUSTICA Pizzeria',
    location: {
        lat:24.694658,
        lng: 46.683464
    },
    tags: [categories[0],categories[5]],
    fourSqrID: '55eeb16a498e9c059a869117'
});
cityLocations.push({
    name: 'Lusin',
    location: {
        lat:24.697986,
        lng: 46.683501
    },
    tags: [categories[0],categories[5]],
    fourSqrID: 'db599fc81543d71da5b8e83'
});
cityLocations.push({
    name: 'Nozomi',
    location: {
        lat:24.700138,
        lng: 46.704775
    },
    tags: [categories[0],categories[5]],
    fourSqrID: 'f4ac57498e3bd97f602bb3'
});
