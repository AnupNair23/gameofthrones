const warModel = require('../models/wars.model');
const _ = require('lodash');


exports.listBattles = async function (req, res) {
  let war = {};
  
  if (req.query.type) {
    console.log(req.query);
    req.query.battle_type = req.query.type;
    delete req.query.type;
  }
  if (req.query.king) {
    let king = req.query.king;
    req.query.$or = [{
      attacker_king: king
    }, {
      defender_king: king
    }]
    delete req.query.king;
  }
  console.log(req.query);
  war = await warModel.find(req.query);

  if (war.length > 0) {
    res.status(200).json({
      message: "war successfully listed",
      data: war
    })

  } else {
    res.status(203).json({
      message: "no wars found"
    })
  }

}


exports.listLocation = async function (req, res) {
  const war = await warModel.find({}, {
    _id: 0,
    location: 1
  });

  let locations = await war.map((loc) => {
    return loc.location;
  })

  locations = await [...new Set(locations)];

  if (locations) {
    res.status(200).json({
      message: "locations successfully listed",
      data: locations
    })
  } else {
    res.status(203).json({
      message: "no location listed"
    })
  }

}

exports.countWars = async function (req, res) {
  let count = await warModel.find().countDocuments();
  console.log('count ==== ', count);
  if (count > 0) {
    res.status(200).json({
      count: count
    })
  } else {
    res.status(203).json({
      message: "no wars"
    })
  }
}