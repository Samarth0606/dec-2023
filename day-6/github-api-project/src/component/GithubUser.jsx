import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GithubUser = ({username}) => {
    let [user,setUser] = useState({
                            imgUrl : "",
                            following:0,
                            followers:0
                        })

    useEffect(function(){
        async function getUser(username){
            let data = await fetch(`https://api.github.com/users/${username}`)
            let resp = await data.json();
            setUser(()=>{
                return{
                    imgUrl:  resp.avatar_url,
                    following: resp.following,
                    followers: resp.followers
                }
            })
        }
        getUser(username)
        // console.log("hello ji");
    },[])

  return (
    <div>
        <img src={user.imgUrl} alt="" />
        <h1>Username:{username} </h1>
        <h1>Followers:{user.followers} </h1>
        <h1>Followings:{user.following} </h1>
    </div>
  )
}

export default GithubUser