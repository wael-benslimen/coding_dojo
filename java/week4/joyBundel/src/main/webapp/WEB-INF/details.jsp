<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %> 
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>

    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <meta charset="UTF-8">
        <title>Login and Registration</title>
    </head>

    <body>
        <div class=" container mt-5 border-bottom border-black">
            <h1> <c:out value="${name.name }"></c:out> </h1>
            <p class=" fw-bold h5"> (added by <c:out value="${name.creator.getUsername() }"></c:out> )</p>
            <p class=" fw-bold">gender : <c:out value="${name.gender }"></c:out> </p>
            <p class="fw-bold"> origin : <c:out value="${name.origin }"></c:out> </p>
            <c:if test="${name.upvotes.contains(user)}">
            <p class="text-primary"> you voted for this </p>
            </c:if>
            <c:if test="${!name.upvotes.contains(user)}">
            <a href="/baby/upvote/${name.id }" class="btn btn-secondary">upvote</a> 
            </c:if>
            <p> meaning : <c:out value="${name.meaning }"></c:out> </p>
        </div>
        <div class="container">
            <a href="/home" class="btn btn-primary mt-5">home</a>
        </div>
        <c:if test="${name.creator.getId() == userId }">
        <div class="container mt-3">
        <a href="/names/${name.id}/edit" class="btn btn-success">edit</a>
        </div>
        </c:if>
    </body>

</html>