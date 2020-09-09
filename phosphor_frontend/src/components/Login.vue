<template>
    <div>
        <h1>
            爱秋
        </h1>
        <p>
            <label for="username">用户名:</label>
            <input type="text" id="username">
        </p>
        <p>
            <label for="pwd">密码:</label>
            <input type="password" id="pwd">
        </p>
        <p>
            <label for="pwd">确认密码:</label>
            <input type="password" id="pwd">
        </p>
        <p>
            <router-link to="Index"><button v-on="LogIn()">登录</button></router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name : "Login",
    methods: {
        LogIn(){
            const data = {
                "name":"zhu jian"
            }
            axios.post('http://127.0.0.1:59003/login',data)
            .then(response => {
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
        }
    },
}
</script>
