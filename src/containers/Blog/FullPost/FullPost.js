import React, { useState ,useEffect} from 'react';
import axios from 'axios'

import './FullPost.css';
import { useParams,Route} from 'react-router-dom'



const FullPost= props => {
  
const[dataDetails,SetDataDetails]=useState(null);

let slug= useParams();


    useEffect(()=>{

      
    if(slug.id){
        // if(!this.state.dataDetails || (this.state.dataDetails && this.state.dataDetails.id !== this.props.id))
            if(!dataDetails || dataDetails.id !=slug.id ){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+slug.id)
                .then(res=>{
                        SetDataDetails(res.data)
                    console.log(res.data)
                })
            }}
     
    },[])

    const deleteData=()=>{
        axios.delete('/posts/'+slug.id)
        .then(response=>{
            console.log(response)
            
        })
    }


    let post = <p style={{textAlign:"center"}}>Please select a Post!</p>;
    if(slug.id){
    if(dataDetails){
        post = (
            <div className="FullPost">
                <h1>{dataDetails.title}</h1>
                <p>{dataDetails.body}</p>
                <div className="Edit">
                    <button onClick={deleteData} className="Delete">Delete</button>
                </div>
            </div>

        );
    } }

    return post;
  
    
}

export default FullPost;