module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(inventory => console.log('this is inventory', inventory) || res.status(200).send(inventory))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
    },
    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product()
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." });
                console.log(err)
            });
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." });
                console.log(err)
            });
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." });
                console.log(err)
            });
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product()
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong." });
                console.log(err)
            });
    }
};
