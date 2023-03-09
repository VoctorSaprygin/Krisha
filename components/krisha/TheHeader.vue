<template>
<div class="container">
  <div class="logo">

  </div>
  <div class="menu">
    <nuxt-link to="#"><img class="krisha" src="@/assets/Krisha.kz.png"></nuxt-link>
    <ul>
      <li><nuxt-link to="#">Продажа</nuxt-link></li>
      <li><nuxt-link to="#">Аренда</nuxt-link></li>
      <li><nuxt-link to="#">Оценка<span class="New">New</span></nuxt-link></li>
      <li><nuxt-link to="#">Компании и специалисты</nuxt-link></li>
      <li><nuxt-link to="#">Новостройки</nuxt-link></li>
      <li><nuxt-link to="#">Новости</nuxt-link></li>
      <li><nuxt-link to="#">Крыша и гид</nuxt-link></li>
    </ul>
  </div>
  <div class="btn">
    <button >Подать заявление</button>
    <span class="peoples"> 415 567 уже на сайте</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  max-width: 1180px;
  margin: 0 auto;

}
.menu{
  display: flex;
  justify-content: space-between;
}
.menu ul{
  display: flex;
 
}
.menu li {
  padding: 0 8px;
  
}
a{
  text-decoration:none;
  color:#2a81dd;}
.btn{
  display: flex;
  flex-direction: column;
}
li{
  list-style-type: none;
  /*padding: 0 5% ;*/
}
.peoples{
  padding-top: 100px;
}
.New{
background-color: #f33;
color: #fff;
border-radius: 3px;
margin-left: 3px;
padding: 2px 4px ;
}
.krisha{
  width: 149px;
}
.btn button{
  border: none;
   outline: none;
}
</style>
