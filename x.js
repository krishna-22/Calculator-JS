
var buttons= document.getElementsByClassName("col");
var dispaly=document.getElementById("display");
var op1=null;
var op2=null;
var op;
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
        var value= this.getAttribute("data");
        if(value=="AC")
        dispaly.innerText="";
        else if(value=="%")
        {
            op="%";
            op1=dispaly.innerText;
            dispaly.innerText="";
        }
        else if(value=="*")
        {
            op="*";
            op1=dispaly.innerText;
            dispaly.innerText="";
        }
        else if(value=="+")
        {
            op="+";
            op1=dispaly.innerText;
            dispaly.innerText="";
        }
        else if(value=="-")
        {
            op="-";
            op1=dispaly.innerText;
            dispaly.innerText="";
        }
        else if(value=="/")
        {
            op="/";
            op1=dispaly.innerText;
            dispaly.innerText="";
        }
        else if(value=="x")
        {
            let s=dispaly.innerText;
            s=s.slice(0,-1);
            dispaly.innerText=s;
        }
        else if(value=="=")
        {
            op2=dispaly.innerText;
            var result=eval(op1+op+op2);
            dispaly.innerText=result;
            op1=result;
        }
        else{
             dispaly.innerText=dispaly.innerText+value;
        }

    })
}