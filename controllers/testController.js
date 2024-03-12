const testController = (req, res) => {
    res.status(200).json({
        name: "Test Controller",
        working: true
    })
}

module.exports = testController;