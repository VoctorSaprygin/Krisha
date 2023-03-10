<template>
<div class="container">
  <div class="centerMenu">
  <div class="logo">
    <nuxt-link to="#"><img class="krisha" src="@/assets/Krisha.kz.png"></nuxt-link>
  </div>
  <div class="menu">
    
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
    
  </div>
</div>
  <span class="peoples"> 415 567 уже на сайте</span>
  <div class="background-color">
    <form class="filter">
    <div class="categories">
    <select name="select1">
      <option selected="selected">Купить</option>
      <option>Аредовать</option>
    </select>
    <select name="select2">
      <option selected="selected">Квартиру</option>
      <option>Дом</option>
      <option>Дачу</option>
      <option>Участок</option>
      <option>Офис</option>
      <option>Помещение</option>
      <option>Здание</option>
      <option>Магазин,бутик</option>
      <option>Промбазу,склад</option>
      <option>Прочую недвижемость</option>
    </select>

    <select name="select3">
      <option selected="selected">Любой комнатости</option>
      <option>1 - комн.</option>
      <option>1-2 - комн.</option>
      <option>2 - комн.</option>
      <option>2-3 - комн.</option>
      <option>3 - комн.</option>
      <option>3-4 - комн.</option>
      <option>4 - комн.</option>
      <option>4-5 - комн.</option>
      <option>5 и более комн.</option>

    </select>
  </div>
  <div class="filter1">
    <input type="text" placeholder="От">
    <span>-</span>
    <input type="text" placeholder="До">
   <span>тг</span>
  </div>
<div class="buttonsSearch">
<button class="searchButton">Найти</button>
<button class="map"><img  src="@/assets/marker.png">На Карте</button>
</div>

 

</form>
<form class="checkbox">
  <label id="checkbox1">
    <input type="checkbox"  value="#">
    есть фото
  </label>
  <div class="hoverNewBuildings">
  <label id="checkbox1" class="newBuildings">
    <input type="checkbox"   value="#">
    <img  class="kursor" src="@/assets/kursor.png">
    новостройки
  </label>
  <!-- <p>Первичное жильё</p>
  <h>Ищите проверенные объявления от застройщиков.</h> -->
</div>
  <label id="checkbox1">
    <input type="checkbox"  value="#">
    от хозяев
  </label >
  <label id="checkbox1">
    <input type="checkbox"  value="#">
    От Крыша Агентов
  </label>
</form>
</div>
</div>

</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped >
.container{

  max-width: 1180px;
  margin: 0 auto;

}
.centerMenu{
  display: flex;
  justify-content: space-between;
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
 
li{
  list-style-type: none;
  /*padding: 0 5% ;*/
}
.peoples{
 display: flex;
 justify-content: flex-end;
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
   color:#2a81dd;
   cursor:pointer;
   font-size: 14px;
   min-width: 188px;
 min-height: 36px;
 border-radius: 8px;
    border: 1px solid rgba(42,129,221,.1);
    background: #fff;
    box-shadow: 0 2px 4px rgba(28,24,25,.1);
    transition: box-shadow .3s ease;
    cursor:pointer;
}
.btn {
  display: flex;
  justify-content: center;

}
.filter{
  display: flex;
  
}
.searchButton{
color:#fff;
background-color:#2a81dd;
border: none;
border-radius: 3px;
padding: 5px 15px;
margin-right: 10px;
}
.buttonsSearch{
display: flex;
margin: 1%;
}
.map{
  display: flex;
  border:none;
  align-content: center;
  border-radius: 3px;
}
.map img{
  height: 13px;
  margin-right: 3px;
  
}
.background-color{
  width: 100%;
  background-color: #FFCC66;
  height: 10vh;
}
.checkbox{
  display: flex;
  
}
#checkbox1{
  /* margin: 0 20px; */
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
}
.newBuildings{
 
border-radius: 3px;

}
.newBuildings :hover{
  background: white;
border-radius: 3px;

}
.hoverNewBuildings {
  background: #fde8a3;
}
.hoverNewBuildings a  {
display: none;
}
.hoverNewBuildings p  {
  display: none;
}

.hoverNewBuildings:hover{
  background: white;
  color: black;
position: relative;
display:block;
  /* border:  solid black 2px; */
}
.kursor{
  position: relative;
  top:15px ;
  left:10px;
 height:20px;
 transform: rotate(-35deg);
}
.categories{
  margin:1%;
}
.categories select{
  margin: 0 5px;
  font-size: 12px;
  color:grey;
}
.filter1{
  margin: 1%;
}
.filter1 input{
  width: 4vw;
  font-size: 12px;
}





</style>
