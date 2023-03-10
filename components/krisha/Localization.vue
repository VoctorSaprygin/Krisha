<template>
  <div class="header">
    <div class="localization">
      <div>
        <ul class="kri-kol">
          <li><span>Kolesa.kz</span></li>
          <li><span>Krisha.kz</span></li>
        </ul>

      </div>
      <div>
        <ul class="navBar">
          <li>
            <div>
              <div id="lang">
                <span>
                  RU
                </span>
                <div class="modal-window-lang">
                  <div class="lang-kz">
                    <a class="lang-menu" href="/">
                      Қазақша
                    </a>
                  </div>
                  <div class="lang-ru">
                    <a class="lang-menu" href="/">
                      Русский
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <nuxt-link to="#">
            <li>
              Избранное
            </li>
          </nuxt-link>
          <nuxt-link to="#">
            <li>
              Регистрация
            </li>
          </nuxt-link>
          <nuxt-link to="#">
            <li>
              Личный кабинет
            </li>
          </nuxt-link>
        </ul>
      </div>

    </div>
    <!-- <hr class="line1"/> -->
    <div class="header">

    </div>
    <div class="header">

    </div>
    <div class="header">

    </div>
  </div>

</template>

<script>

</script>

<style scoped>
#lang {
  visibility: hidden;
  height: 40px;
}
#lang span{
  visibility: visible;
}
#lang:hover {
  visibility: visible;
  text-decoration: none;
}
#lang .lang-kz {
  position: fixed;
  position: absolute;
  z-index: 10;
  background-color: #FFFFFF;  
  border-radius: 5px;  
}
#lang .lang-ru {
  position: fixed;
  position: absolute;
  z-index: 10;
  margin-top: 45px;
  background: #FFFFFF;  
  border-radius: 5px;  
}
.modal-window-lang {
  position: absolute;
  border: 1px solid black;
  width: 80px;
  height: 70px;
  padding: 7px 8px;
  left: 60%;
  top: 6%;
}
.lang-menu {
  cursor: pointer;
  color: #2981dd;
}
.lang-menu:hover {
  color: red;
}
.lang-menu:focus {
  color: black;
}
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
  margin-top: 40px;
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
</style>
