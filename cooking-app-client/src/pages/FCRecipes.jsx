import { Component } from "react";
import { useContext, useEffect, useState } from 'react';
import axios from "axios";
export default function FCRecipes() {
    const apiUrl = "https://localhost:44347/api/ingredients";


    useEffect(() => {
        axios.get(apiUrl).then((res) => console.log(res.data))
    }, [])



    return <div>recipes
        <div></div> <br />

    </div>;



}
