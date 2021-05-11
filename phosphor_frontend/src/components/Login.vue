<template>
    <div class="wrap">
        <div class="container">
            <h1 style="color: white; margin: 0; text-align: center">Login</h1>
            <label>
                <input type="text" placeholder="Your username" name="username" id="user_name" v-model="username" @blur="check_username"/>
                <span class="error_tip" v-show="error_name" style="color:red;">{{ error_name_message }}</span>
            </label>
            <label>
                <input type="password" placeholder="password" name="password" id="pwd" v-model="password" @blur="check_password" />
                <span class="error_tip" v-show="error_password" style="color:red;">请输入6-12位的密码</span>
            </label>
            <label>
                <input type="password" name="password2" id="cpwd" v-model="cpwd" @blur="check_cpwd" placeholder="Please confirm your password"/>
                <span class="error_tip" v-show="error_cpwd" style="color:red;">两次输入的密码不一致</span>
            </label>
            <!-- <button @click="on_submit()">Sign up</button> -->
            <input type="submit" value="Sign up" @click="on_submit()"/>
        </div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import AppVue from '../App.vue';

export default {
    name : "Login",
    data() {
        return {
            // v-mode
            username:'',
            password:'',
            cpwd:'',

            // v-show
            error_name:false,
            error_password:false,
            error_cpwd:false,

            // error_message
            csrf_input : '', 
            error_name_message : '',
        }
    },
    methods: {
        check_username(){
            // 5-12个字符,使用正则校验
            let re = /^[a-zA-Z0-9]{5,12}$/;
            if (re.test(this.username)){
                this.error_name=false;
            }else{
                this.error_name_message = "请输入5-12个字符"
                this.error_name=true;
            };

        },
        check_password(){
            let re = /^[0-9a-zA-Z]{5,12}$/
            if(re.test(this.passwrod)){
                this.error_password = false;
            }else{
                this.error_password = true;
            }
        },
        check_cpwd(){
            if (this.passwrod != this.cpwd){
                this.error_cpwd = false;
            }else{
                this.error_cpwd = true;
            }
        },
        on_submit(){
            this.check_username();
            this.check_password();
            this.check_cpwd();

            // 全部校验后，注册数据中，只要有错误就禁止提交事件
            // if (this.error_name == true || this.error_password == true || this.error_cpwd == true){
            //     window.event.returnValue = false;
            // }else{
            //     axios.post('http://127.0.0.1:59003/user_api_v1/login',{
            //         "username":this.username,
            //         "password":this.password
            //     }).then(res=>{
            //         console.log(res.data);
            //         if(res.data.response == "successful"){
            //             this.$router.push('/')
            //         }
            //     })
                
            // }
            this.$router.push('/')
        },
    },
}
</script>

<style>
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font: 16px/20px microsft yahei;
    }
    .wrap {
        width: 100%;
        height: 100%;
        padding: 10% 0;
        position: fixed;
        opacity: 0.8;
        background: linear-gradient(to bottom right,#000000, #656565);
        background: -webkit-linear-gradient(to bottom right,#50a3a2,#53e3a6);
    }
    .container {
        width: 60%;
        margin: 0 auto;
    }
    .container h1 {
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
    }
    .container input {
        width: 320px;
        display: block;
        height: 36px;
        border: 0;
        outline: 0;
        padding: 6px 10px;
        line-height: 24px;
        margin: 32px auto;
        -webkit-transition: all 0s ease-in 0.1ms;
        -moz-transition: all 0s ease-in 0.1ms;
        transition: all 0s ease-in 0.1ms;
    }
    .container input[type="text"] , .container input[type="password"]  {
        background-color: #FFFFFF;
        font-size: 16px;
        color: #50a3a2;
    }
    .container input[type='submit'] {
        font-size: 16px;
        letter-spacing: 2px;
        color: #666666;
        background-color: #FFFFFF;
    }
    .container input:focus {
        width: 400px;
    }
    .container input[type='submit']:hover {
        cursor: pointer;
        width: 400px;
    }
    .to_login{
        color: #a7c4c9;
    }
    .text{
        color: #e2dfe4;
    }
    .wrap ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -20;
    }
    .wrap ul li {
        list-style-type: none;
        display: block;
        position: absolute;
        bottom: -120px;
        width: 15px;
        height: 15px;
        z-index: -8;
        border-radius: 50%;
        box-shadow: inset -30px -30px 75px rgba(0, 0, 0, .2),
        inset 0px 0px 5px rgba(0, 0, 0, .5),
        inset -3px -3px 5px rgba(0, 0, 0, .5),
        0 0 20px rgba(255, 255, 255, .75);
        background-color:rgba(255, 255, 255, 0.15);
        
    }
    .wrap ul li:nth-child(1) {
        left: 0;
        animation-duration: 10s;
        -moz-animation-duration: 10s;
        -o-animation-duration: 10s;
        -webkit-animation-duration: 10s;
    }
    .wrap ul li:nth-child(2) {
        width: 40px;
        height: 40px;
        left: 10%;
        animation-duration: 15s;
        -moz-animation-duration: 15s;
        -o-animation-duration: 15s;
        -webkit-animation-duration: 11s;
    }
    .wrap ul li:nth-child(3) {
        left: 20%;
        width: 25px;
        height: 25px;
        animation-duration: 12s;
        -moz-animation-duration: 12s;
        -o-animation-duration: 12s;
        -webkit-animation-duration: 12s;
    }
    .wrap ul li:nth-child(4) {
        width: 50px;
        height: 50px;
        left: 30%;
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
        -o-animation-delay: 3s;
        animation-delay: 3s;
        animation-duration: 12s;
        -moz-animation-duration: 12s;
        -o-animation-duration: 12s;
        -webkit-animation-duration: 12s;
    }
    .wrap ul li:nth-child(5) {
        width: 60px;
        height: 60px;
        left: 40%;
        animation-duration: 10s;
        -moz-animation-duration: 10s;
        -o-animation-duration: 10s;
        -webkit-animation-duration: 10s;
    }
    .wrap ul li:nth-child(6) {
        width: 75px;
        height: 75px;
        left: 50%;
        -webkit-animation-delay: 7s;
        -moz-animation-delay: 7s;
        -o-animation-delay: 7s;
        animation-delay: 7s;
    }
    .wrap ul li:nth-child(7) {
        left: 60%;
        width: 30px;
        height: 30px;
        animation-duration: 8s;
        -moz-animation-duration: 8s;
        -o-animation-duration: 8s;
        -webkit-animation-duration: 8s;
    }
    .wrap ul li:nth-child(8) {
        width: 90px;
        height: 90px;
        left: 70%;
        -webkit-animation-delay: 4s;
        -moz-animation-delay: 4s;
        -o-animation-delay: 4s;
        animation-delay: 4s;
    }
    .wrap ul li:nth-child(9) {
        width: 50px;
        height: 50px;
        left: 80%;
        animation-duration: 20s;
        -moz-animation-duration: 20s;
        -o-animation-duration: 20s;
        -webkit-animation-duration: 20s;
    }
    .wrap ul li:nth-child(10) {
        width: 75px;
        height: 75px;
        left: 90%;
        -webkit-animation-delay: 6s;
        -moz-animation-delay: 6s;
        -o-animation-delay: 6s;
        animation-delay: 6s;
        animation-duration: 30s;
        -moz-animation-duration: 30s;
        -o-animation-duration: 30s;
        -webkit-animation-duration: 30s;
    }
    @keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
        100% {
            bottom: 400px;
            -webkit-transform: translateY(-500);
            transform: translateY(-500)
        }
    }
    @-webkit-keyframes square {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0)
        }
        100% {
            bottom: 400px;
            -webkit-transform: translateY(-500);
            transform: translateY(-500)
        }
    }
</style>