<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  		<meta name="description" content="">
  		<meta name="author" content="">
		<title>CONWAY'S GAME OF LIFE</title>
		<!-- BOOTSTRAP CSS SOURCE-->
		<link rel="stylesheet" href="..//resources/bootstrap/css/bootstrap.min.css"/>
		<link rel="stylesheet" href="..//resources/csscode/ConwayGOL.css" />
		<!-- P5 JS SOURCE -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
    	
	</head>

	<body>
      <header>
        <input id="button1" type="button" onclick="inGame()" value="RANDOM"/>
      </header>
      <div id="container">
        <p id="parrafo"></p>
      </div>
      
    
  </body>
  <script src="sketch.js"></script>
</html>