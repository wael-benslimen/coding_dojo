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
        <div class=" container mt-5">
            <h1>Add a name !</h1>
        
        <form:form modelAttribute="baby" action="/names/create" method="POST" class="col-8">
            <div class="form-group">
                <form:label path="name">enter name</form:label>
                <form:input path="name" type="text" placeholder="enter name" class="form-control" />
                <form:errors class="badge text-danger" path="name" />
            </div>
            <div class=" form-group">
                <form:label path="gender">typical gender</form:label>
                <form:select path="gender" class="form-select">
                    <form:option value="male">male</form:option>
                    <form:option value="male">female</form:option>
                    <form:option value="male">neutral</form:option>
                </form:select>
                <form:errors class="badge text-danger" path="gender" />
            </div>
            <div class="form-group">
                <form:label path="origin">enter origin</form:label>
                <form:input path="origin" type="text" class="form-control" />
                <form:errors class="badge text-danger" path="origin" />
            </div>
            <div class="form-group">
                <form:label path="meaning">enter meaning</form:label>
                <form:textarea path="meaning" class="form-control" ></form:textarea>
                <form:errors class="badge text-danger" path="meaning" />
            </div>
            <input type="submit" class="btn btn-success mt-3"/>
            <a href="/home" class="btn btn-danger mt-3">cancel</a>
        </form:form>
        </div>
    </body>

</html>