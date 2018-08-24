document.addEventListener('DOMContentLoaded',applycss, false);
     function applycss(){
        var classname = document.getElementsByClassName("close");
        for (var i = 0; i < classname.length; i++) {
               classname[i].addEventListener('click', mainwidgetclose);
           }
         }
         window.onload = function(){
endereco
            document.getElementById('rightside').onkeydown = function(event) {
                if (event.keyCode == 13) {
                    var text = document.getElementById("rightside").value; 
                
                    if(text){
                    var node = document.createElement("li");
                    var textnode=document.createTextNode(text);
                    node.appendChild(textnode);
                    node.classList.add("rcorners1");
                    document.getElementById("list_item").appendChild(node);

                    var text = document.getElementById("rightside").value=""; 
                    scrollbottom();
                    }
                    else{
                    alert("enter text");
                    }
                   
                }
            }
            document.getElementById('endereco').onkeydown = function(event) {
                if (event.keyCode == 13) {
                    var text = document.getElementById("endereco").value; 
                    if(text){
                    var node = document.createElement("li");
                    var textnode=document.createTextNode(text);
                    node.appendChild(textnode);
                    node.classList.add("rcorners2");
                    document.getElementById("list_item").appendChild(node);
                    var text = document.getElementById("endereco").value=""; 
                    scrollbottom();
                    }
                    else{
                    alert("enter text");
                    }
                   
                }
            }    
         
         }
        function scrollbottom(){
            var objDiv = document.getElementsByClassName("overflow")[0];
            objDiv.scrollTop = objDiv.scrollHeight;
        }
       
        function displayfaq(){
        document.getElementsByClassName("chatindex")[0].style.display = 'none';
        document.getElementsByClassName("frequentlyasked")[0].style.display = 'block';
        document.getElementsByClassName("indexwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("frequentlyaskedwidgettop")[0].style.display = 'block';
        document.getElementsByClassName("frequentlyaskedpage")[0].style.display = 'none';
        document.getElementsByClassName("modernmessengerwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("chatbox")[0].style.display = 'none';
        document.getElementsByClassName("productwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("faq")[0].style.borderBottomColor="#1FA5D9";
        document.getElementsByClassName("chat")[0].style.borderBottomColor="#EBECF0";
        }
        function displaychat() {
        document.getElementsByClassName("chatindex")[0].style.display = 'block';
        document.getElementsByClassName("frequentlyasked")[0].style.display = 'none';
        document.getElementsByClassName("indexwidgettop")[0].style.display = 'block';
        document.getElementsByClassName("frequentlyaskedwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("frequentlyaskedpage")[0].style.display = 'none';
        document.getElementsByClassName("modernmessengerwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("chatbox")[0].style.display = 'none';
        document.getElementsByClassName("productwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("faq")[0].style.borderBottomColor="#EBECF0";
        document.getElementsByClassName("chat")[0].style.borderBottomColor="#1FA5D9";
        }
        function card1display() {
        document.getElementsByClassName("frequentlyasked")[0].style.display = 'none';
        document.getElementsByClassName("frequentlyaskedpage")[0].style.display = 'block';
        document.getElementsByClassName("frequentlyaskedwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("modernmessengerwidgettop")[0].style.display = 'block';
        }
        function catergorydisplay() {
        document.getElementsByClassName("chatindex")[0].style.display = 'none';
        document.getElementsByClassName("chatbox")[0].style.display = 'block';
        document.getElementsByClassName("indexwidgettop")[0].style.display = 'none';
        document.getElementsByClassName("productwidgettop")[0].style.display = 'block';
        }
        function fqarrowdisplay() {
        document.getElementsByClassName("frequentlyasked")[0].style.display = 'block';
        document.getElementsByClassName("frequentlyaskedpage")[0].style.display = 'none';
        document.getElementsByClassName("frequentlyaskedwidgettop")[0].style.display = 'block';
        document.getElementsByClassName("modernmessengerwidgettop")[0].style.display = 'none';
        }
        function pdarrowdisplay() {
        document.getElementsByClassName("chatindex")[0].style.display = 'block';
        document.getElementsByClassName("chatbox")[0].style.display = 'none';
        document.getElementsByClassName("indexwidgettop")[0].style.display = 'block';
        document.getElementsByClassName("productwidgettop")[0].style.display = 'none';
        }
        function mainwidgetdisplay() {
        document.getElementsByClassName("mainwidget")[0].style.display = 'none';
        document.getElementsByClassName("container")[0].style.display = 'block';
       
        }
        function mainwidgetclose() {
      
        document.getElementsByClassName("mainwidget")[0].style.display = 'block';
        document.getElementsByClassName("container")[0].style.display = 'none';
        }  
       
