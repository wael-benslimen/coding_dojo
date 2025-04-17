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
        <title>create</title>
    </head>

    <body>
        <div class="container mt-5">
            <h1>Edit Celebrity Page</h1>
            <a href="/home">home</a>
            <form:form modelAttribute="celebrity" action="/celebrities/${celebrity.id}/edit" method="POST">
                <div class="form-group">
                    <form:label path="name">enter name</form:label>
                    <form:input path="name" type="text"  class="form-control" />
                    <form:errors class="badge text-danger" path="name" />
                </div>
                <div class="form-group">
                    <form:label path="details">enter details</form:label>
                    <form:textarea path="details" class="form-control" ></form:textarea>
                    <form:errors class="badge text-danger" path="details" />
                </div>
                <input type="submit" class="btn btn-success mt-2">
            </form:form>
            <a href="/celebrities/delete/${celebrity.id}" class="btn btn-danger mt-3">delete</a>
        </div>
    </body>

</html>