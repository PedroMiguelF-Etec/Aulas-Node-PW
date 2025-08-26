const express = require("express");
const router = express.Router();

// pagina de equipe
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Sobre o Epa",
        view: "sobre o epa/epa",
    });
});

module.exports = router;