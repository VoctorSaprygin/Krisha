<template>
  <div class="header">
    <div class="localization">
      <div>
        <ul class="kri-kol">
          <li><span>Kolesa.kz</span></li>
          <li><span>Krisha.kz</span></li>
        </ul>

      </div>
      <div >
        <ul class="navBar">
          <li>
            <div>
              ru
              <i class="mini">

              </i>
            </div>
          </li>
          <li>
            <nuxt-link to="#"> Избранное</nuxt-link>

          </li>
          <li>
            <nuxt-link to="#">Регистрация</nuxt-link>

          </li>
          <li>
            <nuxt-link to="#">Личный кабинет</nuxt-link>
          </li>

        </ul>
      </div>

    </div>
 
  </div>

</template>

<script>
export default {
  name: "Localization"
}
</script>

<style scoped>
.localization{
  display: flex;
justify-content: space-between;
  height:4vh ;
  align-items: center;
  /*border-bottom: 1px solid gray;*/
  max-width: 1180px;
  margin: 0 auto;
  line-height: 1.42857;
}
.kri-kol{
  display: flex;
}
.kri-kol li{
  margin-right: 24px;
}
.navBar{
  display: flex;
}
.navBar li{
  margin-left: 24px;
  color: #2a81dd
}
.navBar a{
  color: #2a81dd

}
.navBar a:hover{
  color: #ff3333;
  text-decoration: underline;
}
.line1{
 width: 100%;
  size: 2px;
  color:silver;
}
li{
  list-style-type: none;
/*padding: 0 5% ;*/
}
a {
  text-decoration:none;
}
/* .mini ::before{
  font-family: 'font-icon';
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  font-weight: 400;
  font-style: normal;
  speak: none;
  text-decoration: inherit;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 24px;
} */
</style>
