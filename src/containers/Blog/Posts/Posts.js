import React, { useState,useEffect,useReducer } from 'react'
import Axios from './../../../Axios' ;
import Post from '../../../components/Post/Post';
import './Posts.css'
import { Route,Link} from 'react-router-dom'



const postReducer=(state,action)=>{
switch (action.type) {
    case 'GET':
        return {post : action.upPosts}
    case 'ERROR':
        return {error:true}
    case 'SELECT':
        return {postSelected: action.idN}
    default:
        throw new Error('should not get there');
        
}


}

const Posts=()=> {


 const [postsReduce,Dispatch]=useReducer(postReducer,{
    post:[],
    postSelected:null,
    error:false
})

    useEffect(() => {
        
     Axios.get('/posts')
     .then(res=>{
         const trimPost=res.data.slice(1,10);
         const updatePost=trimPost.map(trimpost=>{
             return {
                 ...trimpost,
                 author: 'mhpolas'
             }
         })

         //this.setState({post:updatePost})
         Dispatch({type:'GET',upPosts:updatePost});
      
     })
     .catch(error=>{
     //this.setState({error:true})
     Dispatch({type:'ERROR'})
     })
        
    }, [])

 

   const  postSelected=(id)=>{
        //this.setState({postSelected:id})
        Dispatch({type:'SELECT',idN:id})
//add link programitacily without Link
        // this.props.history.push('/'+id)
        // this.props.history.push({pathname:'/'+id})
     }
     


        let dataList=<p style={{textAlign:'center'}}>Your link is not valid</p>
        if(!postsReduce.error){
            dataList= postsReduce.post.map(post=>{
                return( <Link key={post.id} to={'/'+post.id}>
                <Post 
                title={post.title}
                author={post.author}
                clicked={()=>postSelected(post.id)}/>
                  </Link>
            )}) 
        }
        return(
                <section className="Posts">
                   {dataList}
                </section>
        )
  



}


export default  Posts