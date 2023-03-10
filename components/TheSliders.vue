<template>
    <div class="container">
       
        <div class="offer">
        <p > Горячие предложения недвижимости в Казахстане</p>
        <nuxt-link to="#">Как сюда попасть?</nuxt-link>
        </div>
        <div class="sliders">
            <div class="links">
            <p>Продажа</p>
            <nuxt-link to="#">Квартиры</nuxt-link>
            <nuxt-link to="#">Дома</nuxt-link>
            <nuxt-link to="#">Дачи</nuxt-link>
            <nuxt-link to="#">Здания</nuxt-link>
            <nuxt-link to="#">Магазины</nuxt-link>
            <nuxt-link to="#">Офисы</nuxt-link>
            <nuxt-link to="#">Участки</nuxt-link>
            <nuxt-link to="#">Промбазы</nuxt-link>
            <nuxt-link to="#" >Прочее</nuxt-link>
            <nuxt-link to="#">Помещения</nuxt-link>
            <nuxt-link to="#">Зарубежная недвижимость</nuxt-link>
         </div>
            <div class="Turkey">
              <img src="@/assets/Turkey.png">
<nuxt-link to="#">Недвижимость в Турции</nuxt-link>

</div>
        </div>

    </div>
  
   
 
    </template>
    
    <script>
    export default {
      name: "TheSliders"
    }
    </script>
    
    <style scoped >
    .container{

max-width: 1180px;
margin: 0 auto;

}
.sliders{
    display: flex;
    border: 5 sodid rgb(228, 7, 7);
    justify-content: space-around;
}
.Turkey{
   display: flex;
   align-items: center;
   
   font-size: 14px;
}
.Turkey a{
   color:#2a81dd;
}
.Turkey img{
    height: 20px;
    width: 30px;
    margin-right: 5px;
}
.links{
    display: flex;
    align-items: center;
    font-size: 14px;
}
.links a{
    margin: 0 5px;
    color:#2a81dd;

}
.offer{
    display: flex;
    align-items: center

}
.offer a {
   color:#2a81dd;
   margin-left: 5px;
   
}
    </style>