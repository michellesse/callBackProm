function requestHandler(req, res){
    User.findById(req.userId);    
}

function requestHandler(req, res) {
    User.findById(req.userId, function(err,user){
        if(err){
            res.send(err);
        } else {
            Tasks.findById(user.tasksId);
        }
    });
}

function requestHandler(req, res) {
    User.findById(req.userId, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId,function(err,tasks){
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(req,res, function(){}); //esto finalmente solo devuelve un error
                }
            });
        }
    });
}

function requestHandler(req, res) {
    User.findById(req.userId, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId, function (err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err){
                        if (err){
                            return res.send(err);
                        } else {
                            res.send('Tarea completada');
                        }
                    }); //esto finalmente solo devuelve un error
                }
            });
        }
    });
}