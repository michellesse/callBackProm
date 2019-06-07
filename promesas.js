function requestHandler(req,res){
    User.findById(req.userId);        
}

function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user){
            res.send(user);
        })
        .catch(function(err){
            res.send(err);
        })
}

function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function (user) {
            return Tasks.findById(user.tasksId)
        })
        .then(function(taks){
            tasks.completed = true;
            tasks.save();            
        })
        .catch(function (errores) {
            res.send(errores);
        })
}

function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function (user) {
            return Tasks.findById(user.tasksId)
        })
        .then(function (taks) {
            tasks.completed = true;
            return  tasks.save();
        })
        .then(function(){
            res.send('Tareas completadas')
        })
        .catch(function (errores) {
            res.send(errores);
        })
}