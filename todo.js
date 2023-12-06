new Vue({
    el:"#Shar",
    data(){
        return{
            tasklist:[],
            task:"",
            color:""
        }
    },

    methods:{
        // add task function

        addTask:function(){
            if (this.task !=""){
                this.tasklist.push(this.task);
                this.task="";
                this.color="#fff";
            }else{
                this.color="#e74c3c";
            }
        },
        

        // remove task function
        removeTask:function(index){
            this.tasklist.splice(index,1)
        }

    }
})