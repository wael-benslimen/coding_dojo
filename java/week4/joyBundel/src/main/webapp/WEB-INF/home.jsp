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
        <div class="container mt-5">
            <div class="d-flex align-items-center justify-content-between">
                <h1 class="text-success fw-bold">Hello, <c:out value="${user.username }"></c:out> Here are some name suggestions</h1>
                <a href="/logout">logout</a>
            </div>
            <div>
            <c:if test="${allNames.size()==0 }">
                <p class="alert alert-warning fw-bold text-center">no names yet ToT</p>
            </c:if>
                
            <c:if test="${allNames.size()!=0 }">
                <h3 class="fw-semibold">Baby names</h3>
                <table class="table table-borderless">
                    <thead>
                        <tr class="border-bottom border-black">
                            <th>vote for it</th>
                            <th>name</th>
                            <th>gender</th>
                            <th>origin</th>
                            <th>votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="name" items="${allNames }">
                        <tr class="border-bottom border-black">
                        <c:if test="${name.upvotes.contains(user) }">
                            <td>you upvoted this :)</td>
                        </c:if>
                        <c:if test="${!name.upvotes.contains(user) }">
                            <td> <a href="/baby/upvote/${name.id }" class="btn btn-secondary">upvote</a> </td>                        
                        </c:if>
                            <td> <a href="/names/${name.id }"> <c:out value="${name.name }"> </c:out></a> </td>
                            <td> <c:out value="${name.gender }"></c:out> </td>
                            <td> <c:out value="${name.origin }"></c:out> </td>
                            <td> <c:out value="${name.upvotes.size() }"></c:out> </td>
                        </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </c:if>
                
            </div>
            <a href="/names/new" class=" btn btn-success mt-3">+new name</a>
        </div>
    </body>

</html>