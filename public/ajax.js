$('#form').submit(function(e){
	e.preventDefault();
	$.post('/',$(this).serialize(),function(data,status){
		alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
	});
});

$("#get").click(function(){
  $.get("/get", function(data, status){
    alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
  });
});

$('#post').click(function(e){
	$.post('/post',{Speciman:"i love you"},function(data,status){
    alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
	});
});

$('#put').click(function(e){
	$.ajax({
		url:'/put',
		data:{Speciman:"hello"},
		type:'PUT',
		anItem:'Item shown',
		success:function(data,status){
			alert("Data: " + JSON.stringify(data) + "\nStatus: " + status+"\n"+this.anItem);
		}
	});
});

$('#delete').click(function(e){
	$.ajax({
		url:'/delete/1234',
		data:{Speciman:"hola"},
		type:'DELETE',
		success:function(data,status){
			alert("Data: " + JSON.stringify(data) + "\nStatus: " + status);
		}
	});
});