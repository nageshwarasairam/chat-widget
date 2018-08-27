document.addEventListener('DOMContentLoaded',applyCss);
     function applyCss(){
        var classname = document.getElementsByClassName("close");
        for (var i = 0; i < classname.length; i++) {
               classname[i].addEventListener('click', mainwidgetclose);
           }
         }
         window.onload = function(){
            document.getElementById('agentsideinput').onkeydown = function(event) {
                if (event.keyCode == 13) {
                 var x=document.getElementById("chat-container").lastElementChild.className;
                   var text = document.getElementById("agentsideinput").value; 
                   if(x=="ul-agent")
                   {
                     var node = document.createElement("LI");
                       var textnode = document.createTextNode(text);
                       node.appendChild(textnode);
                       node.classList.add("agent");
                       document.getElementById("chat-container").lastElementChild.appendChild(node)
                   }
                   else{
                       var ulnode = document.createElement("UL");
                       ulnode.classList.add("ul-agent");
                       var node = document.createElement("LI");
                       var textnode = document.createTextNode(text);
                         node.appendChild(textnode);
                       node.classList.add("agent");
                       ulnode.appendChild(node);
                document.getElementById("chat-container").appendChild(ulnode);
                       }
                       var text = document.getElementById("agentsideinput").value="";
                       scrollBottom();
                         }
                      }
            document.getElementById('customersideinput').onkeydown = function(event) {
                if (event.keyCode == 13) {
                 var x=document.getElementById("chat-container").lastElementChild.className;
                     var text = document.getElementById("customersideinput").value; 
                    if(x=="ul-customer")
                    {
                    var node = document.createElement("LI");
                       var textnode = document.createTextNode(text);
                         node.appendChild(textnode);
                       node.classList.add("customer");
                       document.getElementById("chat-container").lastElementChild.appendChild(node)
                    }
                    else{
                    var ulnode = document.createElement("UL");
                       ulnode.classList.add("ul-customer");
                       var node = document.createElement("LI");
                       var textnode = document.createTextNode(text);
                         node.appendChild(textnode);
                       node.classList.add("customer");
                       ulnode.appendChild(node)
                         document.getElementById("chat-container").appendChild(ulnode);
                    }
                       var text = document.getElementById("customersideinput").value=""; 
                       scrollBottom();
                      }
                   } 

         
         }
        function scrollBottom(){
            var objDiv = document.getElementById("chat-container")
            objDiv.scrollTop = objDiv.scrollHeight;
        }
       
        function displayFaq(){
                document.getElementsByClassName("chatindex")[0].style.display = 'none';
                document.getElementsByClassName("frequentlyasked")[0].style.display = 'block';
                document.getElementsByClassName("index-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("frequentlyasked-widget-top")[0].style.display = 'block';
                document.getElementsByClassName("frequentlyasked-page")[0].style.display = 'none';
                document.getElementsByClassName("modernmessenger-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("chatbox")[0].style.display = 'none';
                document.getElementsByClassName("product-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("faq")[0].style.borderBottomColor="#1FA5D9";
                document.getElementsByClassName("chat")[0].style.borderBottomColor="#EBECF0";
        }
        function displayChat() {
                document.getElementsByClassName("chatindex")[0].style.display = 'block';
                document.getElementsByClassName("frequentlyasked")[0].style.display = 'none';
                document.getElementsByClassName("index-widget-top")[0].style.display = 'block';
                document.getElementsByClassName("frequentlyasked-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("frequentlyasked-page")[0].style.display = 'none';
                document.getElementsByClassName("modernmessenger-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("chatbox")[0].style.display = 'none';
                document.getElementsByClassName("product-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("faq")[0].style.borderBottomColor="#EBECF0";
                document.getElementsByClassName("chat")[0].style.borderBottomColor="#1FA5D9";
        }
        function card1Display() {
                document.getElementsByClassName("frequentlyasked")[0].style.display = 'none';
                document.getElementsByClassName("frequentlyasked-page")[0].style.display = 'block';
                document.getElementsByClassName("frequentlyasked-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("modernmessenger-widget-top")[0].style.display = 'block';
        }
        function catergoryDisplay() {
                document.getElementsByClassName("chatindex")[0].style.display = 'none';
                document.getElementsByClassName("chatbox")[0].style.display = 'block';
                document.getElementsByClassName("index-widget-top")[0].style.display = 'none';
                document.getElementsByClassName("product-widget-top")[0].style.display = 'block';
        }
        function fqarrowDisplay() {
                document.getElementsByClassName("frequentlyasked")[0].style.display = 'block';
                document.getElementsByClassName("frequentlyasked-page")[0].style.display = 'none';
                document.getElementsByClassName("frequentlyasked-widget-top")[0].style.display = 'block';
                document.getElementsByClassName("modernmessenger-widget-top")[0].style.display = 'none';
        }
        function pdarrowDisplay() {
                document.getElementsByClassName("chatindex")[0].style.display = 'block';
                document.getElementsByClassName("chatbox")[0].style.display = 'none';
                document.getElementsByClassName("index-widget-top")[0].style.display = 'block';
                document.getElementsByClassName("product-widget-top")[0].style.display = 'none';
        }
        function mainwidgetDisplay() {
                document.getElementsByClassName("mainwidget")[0].style.display = 'none';
                document.getElementsByClassName("container")[0].style.display = 'block';
            
        }
        function mainwidgetclose() {
      
                document.getElementsByClassName("mainwidget")[0].style.display = 'block';
                document.getElementsByClassName("container")[0].style.display = 'none';
        }  
       
