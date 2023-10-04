<template>
  <div class="row">

      <div class="col-8">
          <div class="card card-default">
              <div class="card-header">Messages</div>
              <div class="card-body p-0">
                  <ul class="list-unstyled" style="height:300px; overflow-y:scroll">
                      <li class="p-2" v-for="(message, index) in messages" :key="index">
                          <strong>{{ message.users.name }}</strong>
                          {{ message.message }}
                      </li>
                  </ul>
              </div>

              <input
    
    type="text"
    name="user"
    placeholder="Enter your name..."
    v-model="userName"
    class="form-control">


              <input
    
                   type="text"
                   name="message"
                   placeholder="Enter your message..."
                   class="form-control"
                   v-model="userMessage">


          </div>
           <span class="text-muted">{{ userName }} is typing...</span><br>
           <button class="bg-primary" @click="add_message">send</button>
      </div>



       <div class="col-4">
           <div class="card card-default">
               <div class="card-header">All Users (getting users using api call)</div>
               <div class="card-body">
                   <ul>
                       <li class="py-2" v-for="(user, index) in users" :key="index">
                         {{ user.name }} {{ userId }}
                       </li>
                   </ul>
               </div>
           </div>
       </div>
{{ yo }}
  </div>
</template>

<script>
   export default {

       data() {
           return {
            users:[],
            messages:[],
            userMessage:'',
            userName:'',
            userId:'',
            yo:'',
           }
       },

       async mounted(){
        await this.getUsers();
        await this.getMessages();
       },
       methods: {
        async getUsers(){
          await this.axios.get('http://localhost:8000/api/getUsers').then(res =>{
           this.users = res.data;
      }).catch((error)=>{
      });
        },
        async getMessages(){
          await this.axios.get('http://localhost:8000/api/getMessages').then(res =>{
           this.messages = res.data;
      }).catch((error)=>{
      });
      Echo.channel('chat')
                .listen('chatEvent',(event) => {
                  this.yo = event.message;
                    this.messages.push(event.message);
                })
        },
        async add_message(){
          await this.axios.get('http://localhost:8000/api/getUsers/'+ this.userName).then(res =>{
           res.data.map(userID=>{
            this.userId = userID.id;
           });
      }).catch((error)=>{
      });
      let data = {
          'user_id': this.userId,
          'message': this.userMessage,
                  };
            await this.axios.post('http://localhost:8000/api/sendMessages', data).then(res =>{
              this.getMessages();
      }).catch((error)=>{
 
      });
    },
       }
   }
</script>