<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>

    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">
        <meta charset="UTF-8">
        <title>Insert title here</title>
    </head>

    <body>
        <p class=" mt-5 text-center"> <c:out value="${success}"></c:out> </p>
        <div class="mt-3 container card">
            <h1 class=" card-header"> show car"> </h1>
            <p>maker: <c:out value="${carMaker }"></c:out>  </p>
            <p>model: <c:out value="${carModel }"></c:out> </p>
            <p>year: <c:out value="${carYear }"></c:out> </p>
            color: <p style="background-color = ${carColor}"><c:out value="${carColor }"></c:out></p>
            <p><c:out value="${car.toString() }"></c:out></p>
            <p><c:out value="${car.getMaker() }"></c:out></p>
        </div>
    </body>

</html>