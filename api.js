//  Mongoose database schema
var Element = require("./models/element.js");

var api = {

    viewAllElements: function(req, res) {
        Element.find(function(err, elements) {
            if (err) {
                res.send(err);
            }
            res.json(elements);
        });
    },

    addElement: function(req, res) {
        var element = new Element();
        element.name = req.body.name;
        element.description = req.body.description;

        element.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({
                "message": "Element created!",
                "element": element
            });
        });
    },

    viewElement: function(req, res) {
        Element.findById(req.params.element_id, function(err, element) {
            if (err) {
                res.send(err);
            }
            res.json(element);
        });
    },

    updateElement: function(req, res) {
        Element.findById(req.params.element_id, function(err, element) {
            if (err) {
                res.send(err);
            }

            element.name = req.body.name;
            element.description = req.body.description;

            element.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    "message": "Element updated!",
                    "element": element
                });
            });
        });
    },

    deleteElement: function(req, res) {
        Element.remove({
            "_id": req.params.element_id
        }, function(err, element) {
            if (err) {
                res.send(err);
            }
            res.json({
                "message": "Element deleted!"
            });
        });
    }

};

module.exports = api;