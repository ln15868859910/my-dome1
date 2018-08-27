<template>
    <div>
        <label>学号：</label>
        <span>{{id}}</span><br>
        <label>姓名：</label>
        <span>{{name}}</span> <br>
        <label>性别：</label>
        <span>{{sex}}</span> <br>
        <label>班级：</label>
        <span>{{cla}}班</span> <br>
        <br>
        <label>电话：</label>
        <span>{{tel}}</span> <br>
        <br>
        <label>地址：</label>
        <span>{{addr}}</span> <br>
        <router-link to="/List">
            <Button type="primary">返回</Button>
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
            id:'',
            name:'',
            sex:'',
            tel:'',
            cla:'',
            addr:''
        }
    },
    methods:{
    },
    created:function(){
       this.item = this.$route.params.item; 
       var item = this.item;
       this.id = item.id;
       this.name = item.name;
       this.sex = item.sex; 
       this.tel = item.tel;      
       this.cla = item.class;
      this.addr = item.adderss
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
