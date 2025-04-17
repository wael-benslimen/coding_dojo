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
            <h1> <c:out value="${celeb.name }"></c:out> </h1>
            <a href="/home">home</a>
            <p class="h5 fw-bold">page maneger : <c:out value="${celeb.creator.username }"></c:out> </p>
            <p class="h5 fw-semibold">contact : <c:out value="${celeb.creator.email }"></c:out> </p>
            <p>details: <br> <c:out value="${celeb.details }"></c:out> </p>
            <h3 class="text-primary">followers</h3>
            <ul class=" list-unstyled border border-1 border-primary p-2">
            <c:if test="${celeb.followers.size()==0 }">
            <li>no followers yet </li>
            </c:if>
            <c:forEach var="follower" items="${celeb.followers }">
                <li> <c:out value="${follower.username }"></c:out> - <c:out value="${follower.email }"></c:out> </li>
            </c:forEach>
            </ul>
            <c:if test="${!celeb.followers.contains(user) }">
            <a href="/celebrities/follow/${celeb.id }" class="btn btn-primary d-block">follow</a>
            </c:if>
            <c:if test="${celeb.followers.contains(user) }">
            <p  class="btn btn-primary d-block">you are following this celebrity</p>
            </c:if>
            <c:if test="${celeb.creator.equals(user) }">
            <a href="/celebrities/${celeb.id}/edit" class="mt-3">edit</a>
            </c:if>
        </div>
    </body>

</html>