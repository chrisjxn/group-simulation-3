module.exports = {
    getAllUsers: (req, res) => {
        let db = req.app.get('db');
        db.get_all_users().then(users => {
            res.status(200).send(users)
        })
    }
}