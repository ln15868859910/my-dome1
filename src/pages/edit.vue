<template>
    <div>
        <label>学号：</label>
        <Input placeholder="请输入学号" v-model="id" style="width: 300px" />
        <br>
        <label>姓名：</label>
        <Input placeholder="请输入姓名" v-model="name" style="width: 300px" />
        <br>
        <label>性别：</label>
        <RadioGroup v-model="sex">
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
        </RadioGroup>
        <br>
        <label>班级：</label>
        <Cascader :data="data" v-model="value1"></Cascader>
        <br>
        <br>
        <label>电话：</label>
        <Input placeholder="请输入电话" v-model="tel" style="width: 300px" />
        <br>
        <label>
            地址：</label>
        <Input placeholder="请输入通信地址" v-model="addr" style="width: 300px" />
        <br>
        <router-link to="/List">
            <Button type="primary" @click="submit">保存</Button>
        </router-link>
        <span>

        </span>
    </div>
</template>

<script>
export default {
    name:'edit',
    data () {
        return {
            item : [],
            value1: [],
            id:'',
            name:'',
            sex:'',
            data:[],
            tel:'',
            addr:''
        }
    },
    methods:{
        submit:function(){
            let content = {
                "id":this.id,
                "name":this.name,
                "sex":this.sex,
                "class":this.value1,
                "tel":this.tel,
                "addr":this.addr
                }
            fetch('http://localhost:3000/answer1', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
            }
            ).then(function(){
                alert('保存成功！')
            }).catch(function(){
                alert('保存失败！');
            })
        }
    },
    created:function(){
           fetch('http://localhost:3001/class').then((response) => response.json()).then((data) => {
           this.data = data.class;
      });
       this.item = this.$route.params.item; 
       var item = this.item;
       this.id = item.id;
       this.name = item.name;
       this.sex = item.sex; 
       this.tel = item.tel;  
      this.addr = item.adderss
       
    },
}
</script>

<style scoped>
    div{
        width: 300px;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
