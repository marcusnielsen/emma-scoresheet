module.exports = function (router, userRepository, isAuthenticated) {
    router.route('/users')
        .post(function (req, res) {
            console.log('req.body: ' + req.body.name + req.body.password);
            userRepository.postUser(req.body, function (err, data) {
                if(err) {
                    console.error(err);
                    return;
                }

                res.json(data);
            });
        })
        .get(isAuthenticated, function (req, res) {
            userRepository.getUsers(function (err, data) {
                if(err) {
                    console.error(err);
                    return;
                }

                res.json(data);
            });
        });
};