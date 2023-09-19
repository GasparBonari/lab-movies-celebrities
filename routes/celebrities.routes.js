// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", (req, res) => 
{
    res.render("celebrities/new-celebrity")
})

router.post("/celebrities/create", (req, res, next) => 
{
    const {name, occupation, catchPhrase} = req.body;
    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect("/celebrities"))
    .catch((err) => { 
        res.render("celebrities/new-celebrity")
        next(err)
    })
})

module.exports = router;