<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>car form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
</head>
<body>
	<h1 class="text-center mt-4">Car's Form</h1>
    <form action="/processCar" method="post" class=" container mt-5">
        <div class="form-group mt-2">
            <label for="maker">make</label>
            <input type="text" name="maker" class="form-control" 
                placeholder="make">
        </div>

        <div class="form-group mt-2">
            <label for="model">model</label>
            <input type="text" name="model" class="form-control" placeholder="model">
        </div>
        
        <div class="form-group mt-2">
            <label for="year">year</label>
            <input type="number" name="year" class="form-control" placeholder="year">
            <p class="text-danger"> <c:out value="${yearError }"></c:out> </p>
        </div>
        
        <div class="form-group mt-2">
            <label for="color">color</label> <br>
            <input type="color" name="color" class="" placeholder="color">
        </div>
        
        <input type="submit" class="mt-3 btn btn-success">
    </form>
</body>
</html>