<template>
  <div class="login">
    
    <section>
       
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
         <el-form-item label="用户名" prop="uname">
          <el-input type="password" v-model="ruleForm2.uname" auto-complete="off"></el-input>
        </el-form-item> 
        <el-form-item label="密码" prop="upwd">
          <el-input type="password" v-model="ruleForm2.upwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" round plain @click="submitForm('ruleForm2')">提交</el-button>
          <el-button type="info" round plain @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </section> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm2: {
        uname: "admin",
        upwd: "123456"
      },
      rules2: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        upwd: [{  required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    login(){
      this.$http.post(this.$api.login, this.ruleForm2).then((res)=>{
        //  if(res.data.status == 0) {
        //     this.$alert('登陆成功','提示',{
        //      callback:()=>{
        //        //保持用户名
        //        localStorage.setItem('uname',res.data.message.uname)
               
        //        //组件就拥有了该对象，对象有一个push方式，可以进行路由跳转
        //        this.$router.push({name:'admin'})
        //      }
          //  });
        //  }else{
        //     this.$alert(res.data.message);
        //  }
 
       
      })
          },
    submitForm(formName) {
                // validate传入一个回调, 如果valid为true, 证明通过校验, 否则不通过
                this.$refs[formName].validate(valid => {
                    if (valid) {
                    this.login();
                    } else {
                    this.$alert("账号或密码不合格!");
                    }
                });
            },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang='less'>
.login {
  height: 100%;
  background-color: rgb(38, 124, 183);
  section {
    width: 300px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 20px;
    padding: 20px;
  }
}
</style>
