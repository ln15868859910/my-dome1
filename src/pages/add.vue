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
        <label>爱好：</label>
        <CheckboxGroup v-model="myhobby">
            <Checkbox label="看书"></Checkbox>
            <Checkbox label="运动"></Checkbox>
            <Checkbox label="看电视"></Checkbox>
        </CheckboxGroup>
        <br>
        <label>电话：</label>
        <Input placeholder="请输入电话" v-model="tel" style="width: 300px" />
        <br>
        <router-link to="/List">
            <Button type="primary" @click="submit">保存</Button>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Add',
    data () {
        return {
            myhobby:[],
            value1: [],
            id:'',
            name:'',
            sex:'',
            data:[],
            tel:''
        }
    },
    methods:{
        submit:function(){
            console.log(this.value1)
            let content = {
                "id":this.id,
                "name":this.name,
                "sex":this.sex,
                "class":this.data,
                "hobby":this.myhobby,
                "tel":this.tel
                };
            fetch('http://localhost:3000/answer1', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
            }
            )
        }
    },
    created:function(){
           fetch('http://localhost:3001/class').then((response) => response.json()).then((data) => {
        // data就是我们请求的repos
           this.data = data.class;
          // console.log(data.class);
           //console.log(data.cal)
      });
    }
}
</script>

<style scoped>
    div{
        width: 300px;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
