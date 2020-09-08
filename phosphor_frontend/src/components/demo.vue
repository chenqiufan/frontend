<template>
    <div class="r-con fr">
        <div class="reg_title clearfix">
            <h1>用户注册</h1>
        </div>
        <div reg_form clearfix>
            <form action="post" class="register_form" @submit="on_submit" v-cloak >
                {{ csrf_input }}
                <ul>
                    <li style="list-style: none;">
                        <label> 用户名:</label>
                        <input type="text" name="username" id="user_name" v-model="username" @blur="check_username">
                        <span class="error_tip" v-show="error_name">{{ error_name_message }}</span>
                    </li>
                    <li style="list-style: none;">
                        <label>  密码:</label>
                        <input type="password" name="password" id="pwd" v-model="password" @blur="check_password">
                        <span class="error_tip" v-show="error_password">请输入6-12位的密码</span>
                    </li>
                    <li style="list-style: none;">
                        <label>确认密码:</label>
                        <input type="password" name="password2" id="cpwd" v-model="cpwd" @blur="check_cpwd">
                        <span class="error_tip" v-show="error_cpwd">两次输入的密码不一致</span>
                    </li>
                    <li style="list-style: none;">
                        <label> 手机号:</label>
                        <input type="text" name="mobile" id="phone" v-model="phone" @blur="check_phone">
                        <span class="error_tip" v-show="error_phone">{{ error_phone_message }}</span>
                    </li>
                    <li class="agreement" style="list-style: none;">
                        <input type="checkbox" name="allow" id="allow" v-model="allow" @change="check_allow">
                        <label>同意"陈cc美瞳馆的用户使用协议"</label>
                        <span class="error_tip" v-show="error_allow">请勾选用户协议</span>
                    </li>
                    <li class="reg_sub" style="list-style: none;">
                        <input type="submit" value="注 册">
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name : "Register",
    data() {
        return {
            // v-mode
            username:'',
            password:'',
            cpwd:'',
            phone:'',
            allow:'',

            // v-show
            error_name:false,
            error_password:false,
            error_cpwd:false,
            error_phone:false,
            error_allow:false,

            // error_message
            csrf_input : '', 
            error_name_message : '',
            error_phone_message: ''
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
            let re = /^[0-9a-zA-Z](5,12)$/
            if(re.test(this.passwrod)){
                this.error_password = false;
            }else{
                this.error_password = true;
            }
        },
        check_cpwd(){
            if (this.passwrod != this.cpwd){
                this.error_cpwd = true;
            }else{
                this.error_cpwd = false;
            }
        },
        check_phone(){
            let re = /^1[0-9]{9}$/;
            if(re.test(this.phone)){
                this.error_phone = false;
            }else{
                this.error_phone_message = "您输入的手机号码格式不正确";
                this.error_phone=true;
            }
        },
        check_allow(){
            if(!this.allow){
                this.error_allow=true;
            }else{
                this.error_allow=false;
            }
        },
        on_submit(){
            this.check_username();
            this.check_password();
            this.check_cpwd();
            this.check_phone();
            this.check_allow();

            // 全部校验后，注册数据中，只要有错误就禁止提交事件
            if (this.error_name == true || this.error_password == true || this.error_cpwd == true || this.error_phone == true || this.error_allow ==true){
                window.event.returnValue = false;
            }
        }
    },
}
</script>

<style>
    .r-con {
        width: 30%;
        margin-left: 40%;
        
    };
    
</style>