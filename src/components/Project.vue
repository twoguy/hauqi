<template>
  <div class="elegant-aero" >
    <label>
      <span>项目名称</span>
      <input id="name" type="text" name="projectName" v-model="project.projectName" placeholder="" required/>
    </label>

    <label>
      <span>项目简介</span>
      <textarea id="info" name="projectIntroduce"  v-model="project.projectIntroduce" placeholder="" required></textarea>
    </label>

    <label>
      <span>目标资金</span>
      <input id="email" type="number" v-model="project.projectAim" name="projectAim" placeholder="" required/>
    </label>

    <label>
      <span>截止日期</span>
      <input id="date" type="date" v-model="project.projectEndTime" name="projectEndTime" placeholder="" required/>
    </label>

    <label>
      <span>项目图片</span>
      <input id="image"  @change="uploading($event)" type="file" name="projectImage" accept="image/*" required/>
    </label>
    <label v-show="isEmpty">
      <span></span>
      <b style="text-align: right;color: red">项目信息填写不完整</b>
    </label>
    <label v-show="status">
      <span></span>
      <b style="text-align: right;color: red">发布项目失败</b>
    </label>
    <label>
      <span>&nbsp;</span>
      <input type="submit" @click="submit" class="button" value="Send" />
    </label>
  </div>
</template>

<script>
    export default {
        name: "project",
        data () {
          return {
            linkActived: '/',
            project:{
              file: ""
            },
            isEmpty: false,
            status: ""
          }
        },
        created: function(){
          let userId = sessionStorage.getItem('userId');
          if(userId === null){
            this.$router.push('/')
          }
        },
        methods: {
          uploading(event){
            this.project.file = event.target.files[0];//获取文件
          },
          submit: function () {
            let formData = new FormData();
            formData.append("projectName", this.project.projectName);
            formData.append("projectIntroduce", this.project.projectIntroduce);
            formData.append("projectAim", this.project.projectAim);
            formData.append("projectEndTime", this.project.projectEndTime);
            formData.append("projectImage", this.project.file);
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
              }
            };
            if (this.project.projectName&&this.project.projectIntroduce&&this.project.projectAim&&this.project.projectEndTime&&this.project.file)
            {
              this.isEmpty = false
              this.axios.post('/startNew', formData, config).then( (res) => {
                this.$router.push('/user')
              }).catch((error) =>{
                if (error.response.status != 200){
                  this.status = 'failed'
                  setTimeout(function(){
                    this.status = ''
                  }.bind(this),3000)
                }
              });
            }
            else {
              this.isEmpty = true
            }

          }
        }
    }

</script>

<style  scoped>
  .elegant-aero {
    margin-left:auto;
    margin-right:auto;
    padding: 20px;
    font-size: 16px;
    color: #666;
  }

  .elegant-aero label>span {
    float: left;
    margin-top: 10px;
    color: #5E5E5E;
  }
  .elegant-aero label {
    display: block;
    margin: 0px 0px 5px;
  }
  .elegant-aero label>span {
    float: left;
    width: 20%;
    text-align: right;
    padding-right: 15px;
    margin-top: 10px;
    font-weight: bold;
  }
  .elegant-aero input, .elegant-aero textarea, .elegant-aero select {
    color: #888;
    width: 70%;
    padding: 0px 0px 0px 5px;
    border: 1px solid #C5E2FF;
    background: #FBFBFB;
    outline: 0;
    -webkit-box-shadow:inset 0px 1px 6px #ECF3F5;
    box-shadow: inset 0px 1px 6px #ECF3F5;
    font: 200 12px/25px Arial, Helvetica, sans-serif;
    height: 30px;
    line-height:15px;
    margin: 2px 6px 16px 0px;
  }
  .elegant-aero textarea{
    height:100px;
    padding: 5px 0px 0px 5px;
    width: 70%;
  }
  .elegant-aero select {
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    width: 70%;
  }
  .elegant-aero .button{
    padding: 10px 30px 10px 30px;
    background: #66C1E4;
    border: none;
    color: #FFF;
    box-shadow: 1px 1px 1px #4C6E91;
    -webkit-box-shadow: 1px 1px 1px #4C6E91;
    -moz-box-shadow: 1px 1px 1px #4C6E91;
    text-shadow: 1px 1px 1px #5079A3;

  }
  .elegant-aero .button:hover{
    background: #3EB1DD;
  }
</style>
