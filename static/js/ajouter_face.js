var btnAjouter = document.getElementsByClassName('btn');

console.log(btnAjouter.innerHTML);

function ajouter_face(){

    var PythonShell = require("python-shell");
    var path = require("path");
    var nom = document.getElementById("personne").value

    var options ={
        
        pythonPath: 'usr/local/bin/python3',
        scriptPath: path.join(__dirname, '../../controller'),
        args: ["cam", nom]
    }

    PythonShell.PythonShell.run('face.py', options, function (err, results) {
        if (err) throw err;
        
        console.log('results: %j', results);
        //swal("Face ajouté!", "Nous pouvons maintenant reconnaître votre face", "Réussi")
        document.getElementsById("ajouter").innerHTML = "Nouvelle face ajoutée";
    });
}