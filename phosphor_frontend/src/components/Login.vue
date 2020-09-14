<template>
    <div>
        <input type="text" name="username" v-model="postForm.username">
        <input type="password" name="password" v-model="postForm.password">
        <input type="submit" @click="test" value="登录">
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            postForm:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        demo(){
            axios.get('http://127.0.0.1:59003/demo')
                .then(res=>{
                    console.log(res)
                })
        },
        test(){
            axios.post("http://127.0.0.1:59003/user_api_v1/register",this.postForm)
                .then(res=>{
                    console.log(res);
                    if(parseInt(res.status)==200){
                        window.location.href = "index"
                    }
                })
        }
    },
}
</script>