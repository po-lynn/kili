
function converter(event) {
  var x = event.which || event.keyCode;
  if(x>=65&&x<=122){
    var cValue = document.getElementById("cValue");
    var filtered=data.filter(function(item){
        return item.en === cValue.value
      });
      if(filtered.length>0)
      document.getElementById("demo").innerHTML = "The MM  value is: " + filtered[0].mm;
  }

}
