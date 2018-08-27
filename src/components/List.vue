<template>
    <div>
        <Table :columns="columns1" :data="list" :row-class-name="rowClassName"></Table>
        <router-link to="/Add">
            <span @click="storage">
                <Icon type="md-add" />
            </span>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      visible: false,
      columns1:[
              {
                  title: 'id',
                  key: 'id'
              },
              {
                  title: 'Name',
                  key: 'name'
              },
              {
                  title: 'Sex',
                  key: 'sex'
              },
                {
                  title: 'Class',
                  key: 'class'
              },
                {
                  title: 'Tel',
                  key: 'tel'
              },
              {
                  title: 'Edit',
                  key: 'edit',
                  width: 150,
                  align: 'center',
                   render: (h, params) => {
                      return h('div', 
                      [                         
                        h('Button',{
                             props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                            on: {
                                click:() => {
                                    this.clickEdit(params.index,params.row);
                                }
                            }
                        },'编辑'),
                        h('Button',{
                             props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                            on: {
                                click:() => {
                                    this.clickDetail(params.index,params.row);
                                }
                            }
                        },'详情'),

                      ],
                    );
                  }
               }
                          
      ],
      list:[]
    }
  },
  created:function(){

      fetch('http://localhost:3000/answer').then((response) => response.json()).then((data) => {
           this.list = data.list;
           console.log(this.list[0].adderss)
      }).catch(
          function(e){
              alert('error!');
          }
      );
    
 },
    methods:{
      clickEdit:function(index,row){
         this.$router.push({ name: 'Edit',params:{item:this.list[index]}});
         },
        clickDetail:function(index,row){
         this.$router.push({ name: 'Detail',params:{item:this.list[index]}});
         }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
   