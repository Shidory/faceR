function ajouter_face(){

    var PythonShell = require("python-shell");
    var path = require("path");
    var nom = document.getElementById(person).value

    var options ={
        
        pythonPath: 'usr/local/bin/python3',
        scriptPath: path.join(__dirname, '../../controller')
    }

    PythonShell.PythonShell.run('face.py', options, function (err, results) {
        if (err) throw err;
        
        console.log('results: %j', results);
        //swal("Face ajouté!", "Nous pouvons maintenant reconnaître votre face", "Réussi")
        document.getElementsById("add").innerHTML = "Nouvelle face ajoutée";
    });
}