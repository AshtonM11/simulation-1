module.exports = {
    getInventory: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_inventory()
        .then(inventory => console.log('this is inventory', inventory) || res.status(200).send(inventory))
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
    }
  };