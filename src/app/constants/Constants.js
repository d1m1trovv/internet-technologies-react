import styled from "styled-components";
import {TableCell, TableRow, TextField} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";


const Constants = {

    BASE_URL: "https://jsonplaceholder.typicode.com/",

    BODY: styled.div`
    
    header {
    background-color: #498CD7;
    padding: 30px;
    text-align: center;
    font-size: 35px;
    color: white;
    }
    
    ul {
    background-color: #1C2C43;
    width: 100%;
    float: left;
    margin: 0 0 3em 0;
    padding: 0;
    list-style: none; }
    
    ul li {
    float: left; }
    
    ul li a:hover{
    background-color: #fff; }

    ul li a {
    display: block;
    padding: 13px 16px;
    text-decoration: none;
    font-weight: bold;
    color: #498CD7; }
    `
}
export default Constants;
