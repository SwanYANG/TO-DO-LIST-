var sname=prompt("请给自己取一个昵称吧","");
alert("点击一下editor和publish date有惊喜哦");
classnum=0
//添加代办事项
function add(s) {

        var s=document.getElementById("tododay").value;
        var CHILD1=document.createElement("li");
        var childinput=document.createElement("input");
        var childspan=document.createElement("span");
        var childselect=document.createElement("select");
        var childoption1=document.createElement("option");
        var childoption2=document.createElement("option");
        var childoption3=document.createElement("option");
        var childoption4=document.createElement("option");
        var childoption5=document.createElement("option");
        var CHILD1id = "item" + classnum;
        var childinputid= "check"+classnum;
        var childspanid="span"+classnum;
        var childselectid="select"+classnum;
        

        CHILD1.setAttribute("id",CHILD1id);
        childinput.setAttribute("type", "checkbox");
        childinput.setAttribute("onclick", "reduce(this.id)");
        childinput.setAttribute("id",childinputid);
        childspan.setAttribute("id",childspanid)
        childspan.setAttribute("onclick", "modify(this.id)");
        childselect.setAttribute("id",childselectid);
        childselect.setAttribute("onchange","colo(this.id)");
        
        childoption1.setAttribute("value","重要且紧急");
        
        childoption2.setAttribute("value","紧急");
        
        childoption3.setAttribute("value","重要");
    
        childoption4.setAttribute("value","不重要且不紧急");
        classnum++;
        
        



        childspan.innerHTML=s;
        childoption1.innerText="紧重"
        childoption2.innerText="紧"
        childoption3.innerText="重"
        childoption4.innerText="轻松"
        childoption5.innerText=""


        CHILD1.appendChild(childspan);
        CHILD1.appendChild(childinput);
        childselect.appendChild(childoption5);
        childselect.appendChild(childoption1);
        childselect.appendChild(childoption2);
        childselect.appendChild(childoption3);
        childselect.appendChild(childoption4);
        CHILD1.appendChild(childselect);


      
        document.getElementById("todoooo").appendChild(CHILD1);
         
      document.getElementById("tododay").value="";
    
}
//删除代办事项
function reduce(id) { 
     var  p=document.getElementById(id).parentNode;
     var  t=document.getElementById(id).parentNode.childNodes[0];
     var  reduspan=document.createElement("span");
     var  reduli=document.createElement("li")
     var  reduliid = "item" + classnum;
     var  reduspanid="span"+classnum;


     var  s=t.innerHTML;
     reduli.setAttribute("id",reduliid);
     reduspan.className="reduli";
     reduspan.setAttribute("id",reduspanid)
     reduspan.setAttribute("onclick", "repair(this.id)");
     classnum++;

     reduspan.innerHTML=s;
     reduli.appendChild(reduspan);

     document.getElementById("totaldone").appendChild( reduli);
     document.getElementById("todoooo").removeChild(p);
  }

//修改代办事项
function modify(id) {
  var  p=document.getElementById(id);
 var childinput=document.createElement("input");
  var childinputid= "check"+classnum;
  classnum++;

  childinput.setAttribute("type", "checkbox");
  childinput.setAttribute("onclick", "reduce(this.id)");
  childinput.setAttribute("id",childinputid);
  var  f=prompt("请输入修改内容","");
  p.innerText=f;
}
//标记事件的重要性；
function colo(id) {

  if (document.getElementById(id).value=="重要且紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="imandur"
    
  }
  if (document.getElementById(id).value=="紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="ur"
    
  }
  if (document.getElementById(id).value=="重要") {
    var  p=document.getElementById(id).parentNode;
    p.className="im"
    
  }
  if (document.getElementById(id).value=="不重要且不紧急") {
    var  p=document.getElementById(id).parentNode;
    p.className="notimandur"
    
  }
}

function repair(id) {
  var  p=document.getElementById(id).parentNode;
  var  t=p.childNodes[0];
  var  a=t.innerText;
  add( document.getElementById("tododay").value=a );
  document.getElementById("totaldone").removeChild(p);
}
function  aa() {
  document.getElementById("name1").innerHTML=sname 
}
function bb() {
          var p=Date();
          document.getElementById("date").innerHTML=p
}
function add1() {
  var  p=document.getElementById("SURPRISE").value;
  document.getElementById("sur").innerHTML=p; 
  document.getElementById("SURPRISE").value="";

}
function add2() {
  var  p=document.getElementById("PITY").value;
  document.getElementById("pit").innerHTML=p; 
  document.getElementById("PITY").value="";

}
function add3() {
  var  p=document.getElementById("FOCUS").value;
  document.getElementById("foc").innerHTML=p; 
  document.getElementById("FOCUS").value="";

}
function add4() {
  var  p=document.getElementById("SHARE").value;
  document.getElementById("sha").innerHTML=p; 
  document.getElementById("SHARE").value="";

}
var i=0
function reduceall() {
  
  if(document.getElementById("totaldone").hasChildNodes()==true){
    document.getElementById("totaldone").innerHTML=""
  }
  else{alert("已清空")}
  
}