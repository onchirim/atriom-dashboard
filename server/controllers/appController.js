const App = require('../models/AppModel');
const appController = {};

//Gets a specific app from the database
appController.getApp = (req, res, next) => {
  const id = req.params.id;
  App.findById({});
};

//Creates a new app in the database
appController.createApp = (req, res, next) => {
  const { appName, userID, appID, appArray } = req.body;
  App.Create({ appName, userID, appID, appArray }, (req, res) => {
    const newApp = new App({
      //need name of app
      name: appName,
      user_id: userID,
      data: appArray,
      creation_date: { type: Date, default: Date.now },
    });
    newApp.save().then((app) => res.json(reflection));
  });
};

//Updates data for one app
appController.updateApp = (req, res, next) => {
  const { userID, appID, appArray } = req.body;
};

//Deletes an app from the database
appController.deleteApp = (req, res, next) => {
  const { userID, appID } = req.body;
};

module.exports = appController;
