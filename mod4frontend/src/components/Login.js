import React, { useState } from 'react'
// import SignUp from './SignUp'
  
export function Login(props){

    let [ user, changeUser ] = useState({
        username: '',
        password: ''
    })

    let [ new_user, changeNewUser ] = useState({
        new_username: '',
        new_password: '',
        new_address: '',
        new_email: ''
    })

    async function handleSubmit(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
        // .then(res => res.json())
        // .then(p => {
        //     // console.log(props, p)
        //     if(p.success){
        //         props.history.push('/home', id)
        //         console.log(id)
        //     }else{
        //         alert("incorrect")
        // }
    // })
        let { success, id } = await response.json()
        if(success){
            props.history.push('/home', id)
        }else{
            alert("incorrect")
        }
    }

    async function handleCreate(e){
        e.preventDefault()
        let response = await fetch('http://localhost:3000/users', {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: new_user.new_username,
                password: new_user.new_password,
                address: new_user.new_address,
                email: new_user.new_email
            })
        })
        let { success, id } = await response.json()
        if(success){
            props.history.push('/home', id)
        }else{
            alert("taken username")
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div>
                        <label>Username</label>
                        <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
            <div>
                <form onSubmit={handleCreate}>
                    <h1>Sign Up</h1>
                    <div>
                        <label>Username</label>
                        <input type="text" value={new_user.new_username} onChange={ e => changeNewUser({ ...new_user, new_username: e.target.value })} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={new_user.new_password} onChange={ e => changeNewUser({ ...new_user, new_password: e.target.value })} />
                    </div>
                    <div>
                        <label>address</label>
                        <input type="text" value={new_user.new_address} onChange={ e => changeNewUser({ ...new_user, new_address: e.target.value })} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={new_user.new_email} onChange={ e => changeNewUser({ ...new_user, new_email: e.target.value })} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}  