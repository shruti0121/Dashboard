import React from "react";
import { useState, useEffect} from "react";
import DataTable from 'react-data-table-component';


export default function Datatable()
{
    const Columns= [
        {
            name: "UserId",
            selector:(row)=>row.userId,
        },
        {
            name: "id",
            selector:(row)=>row.id,
        },
        {
            name: "title",
            selector:(row)=>row.title,
        },
        {
            name: "completed",
            selector:(row)=>row.completed,            
        }
    ];
    
    const [data,setData]= useState([]);
    const [search, SetSearch]= useState('');
    
    const getProduct=async()=>{
        try{
            const req= await fetch("https://mocki.io/v1/07af4b5b-6c80-4651-a589-a0e412e9ae3c")
            const res= await req.json();
            setData(res);
        } catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>{
        getProduct();
    }, []);
    
    return(
        <React.Fragment>
            <h3>All Recent Files</h3>
            <DataTable>
                columns = {Columns}
                data = {data}
                highlightOnHover
                fixedHeader
                pagination

            </DataTable>
        </React.Fragment>
    )
}