<html>

<head><title>Default Page</title>
<meta name="keywords" content="asp.net sql asp .net hosting ajax 4.5 3.5 2.0 1.1 MSSQL2014 MSSQL2012 components windows webhosting framework iis7 iis8 iis8.5">
<meta name="description" content="ASP.NET hosting, SQL hosting, AJAX Hosting, Silverlight hosting, LINQ Hosting, Microsoft Windows 2012 hosting, iis8 hosting, Windows 2012 R2 hosting, iis8.5 hosting."></head>

<body>
	Dear customer,<br /><br />This is a temporary homepage we created to show that your temporary URL is working properly.<br />You MUST delete this page before or after you upload your own webpage. The file name of this page is "Default.asp" and it's located in your site root folder.<br /><br />Thank you.
	<hr/>
	<a href="test.html">lets start</a>
	
	<hr/>
	<div ID="demo" >RRRR</div>

	<button onclick="go_fun()">TXT</button>
	<button onclick="get_serv_data_X()">ASPX</button>
	<button onclick="get_serv_data()">ASP</button>
	
	<script>
		function go_fun ()
		{
			var xhttp = new XMLHttpRequest();
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				 document.getElementById("demo").innerHTML = this.responseText;
				}
			  };
			  xhttp.open("GET", "ajax_info.txt", true);
			  xhttp.send();
		};
		
		
		
	function get_serv_data ()
	{
			var xhttp = new XMLHttpRequest();
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				 document.getElementById("demo").innerHTML = this.responseText;
				}
			  };
			  xhttp.open("GET", "fun_library.asp", true);
			  xhttp.send();
	};
	
	function get_serv_data_X ()
	{
			var xhttp = new XMLHttpRequest();
			
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				 document.getElementById("demo").innerHTML = this.responseText;
				}
			  };
			  xhttp.open("GET", "fun_library.aspx/GetData", true);
			  xhttp.send();
	};
		
	</script>

</body>

</html>