async function requestHandler(req,res){
    const user = await User.findById(req.userId)
    console.log(user);
}

async function requestHandler(req, res) {

    const user  = await User.findById(req.userId)
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    const ultima = await tasks.save();
    res.send('Tarea completada');

    try{

        

    }
    catch(error){
        
    }

}

async function requestHandler(req, res) {
    try{
        const user = await User.findById(req.userId)
        const tasks = Tasks.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Tarea completada');
    }
    catch(e){
        res.send('Error en la consulta de informacion');
    }    
}