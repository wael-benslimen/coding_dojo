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
        <title>home</title>
    </head>

    <body>
        <div class="container mt-5">
            <h1>Welcome, <c:out value="${user.username }"></c:out> !</h1>
            <a href="/logout" class="d-block">logout</a>
            <a href="/celebrities/new" class="btn btn-outline-primary mt-3">Add Celebrity Page</a>
            <form action="/celebrities/search" method="GET" class="mt-3">
                <div class="d-flex align-items-center justify-content-between">
                    <input type="text" name="quary" class="form-control border-primary">
                    <input type="submit" value="search" class="btn btn-primary">
                </div>
            </form>
            <c:if test="${allCelebs.size()==0}">
                <p class="alert alert-warning m-2 text-center text-danger fw-bold">not records yet 😢</p>
            </c:if>
            <c:if test="${allCelebs.size()!=0}">
            <ul class="mt-3">
                <c:forEach var="celeb" items="${allCelebs }">
                <li class=" list-unstyled">
                    <a href="/celebrities/${celeb.id}"> <c:out value="${celeb.name }"></c:out> </a>
                    <p>page maneger <c:out value="${celeb.creator.username }"></c:out> </p>
                    <p class="mt-0 text-primary"> <c:out value="${celeb.followers.size() }"></c:out> </p>
                </li>
                </c:forEach>
            </ul>
            </c:if>
        </div>
        
    </body>

</html>