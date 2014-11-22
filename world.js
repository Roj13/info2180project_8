
window.onload = load();

function load(){
      var box = document.getElementById("check");
      var see = document.getElementById("lookup").onclick;
       var co = document.getElementById("term").value;
       
       new Ajax.Request("world.php",
          {
             parameters:{lookup:co},
            method: "get",
            onSuccess: show
 
          }
       
       );
       alert(co);
      }
      function show(re){
        alert(re.responseText);
        document.getElementById("result").innerHTML = re.responseText;
       
       
       
      }
 
 
 
