module.exports = urlNotfound = (req, res) => { res.status(500).json({ msg: "url doesn't exisist" }) }
