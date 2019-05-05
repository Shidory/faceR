function ajouter_face(){

    var PythonShell = require("python-shell");
    var path = require("path");

    var options ={
        
        pythonPath: 'usr/local/bin/python3',
        scriptPath: path.join(__dirname, '../../controller')
    }

    var face = new PythonShell("face.py", options);

    face.end(function(err, code, message) {
      swal("Face added!", "We can now recognize your face", "success")
      document.getElementsById("add").innerHTML = "Add a new face";
    })
}