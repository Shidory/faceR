function ajouter_face(){

    var PythonShell = require("python-shell")
    
    var path = require("path")
    var name = document.getElementById("personne").value
  
      var options = {
      scriptPath : path.join(__dirname, '/controller/'),
      pythonPath : '/usr/local/bin/python3',
      args : ["cam", name]
    }
  
    /*var face = new python("add_face.py", options);
  
    face.end(function(err, code, message) {
      swal("Face added!", "We can now recognize your face", "success")
      document.getElementsById("add").innerHTML = "Add a new face";
    })*/
    PythonShell.PythonShell.run('ajouter_face.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
      swal("Face added!", "We can now recognize your face", "success")
      document.getElementsById("add").innerHTML = "Add a new face";
    });
  }

  function detecter_face() {

    document.getElementById("detect").value = "Hang on..."
    var PythonShell = require("python-shell")
    var path = require("path")
  
      var options = {
      scriptPath : path.join(__dirname, '/controller/'),
      pythonPath : '/usr/local/bin/python3'
    }
  
    /*var face = new python("faces.py", options);
  
    face.end(function(err, code, message) {
      document.getElementById("detect").value = "Detect faces";
      })*/
  
      PythonShell.PythonShell.run('detecter_face.py', options, function (err, results) {
        if (err) throw err;
        document.getElementsById("detect").value = "Detect faces";
      });
  }
  