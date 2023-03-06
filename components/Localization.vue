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
              <i></i>
            </div>
          </li>
          <li>
            <a href="#">
              Избранное
            </a>
          </li>
          <li>
            <a href="#">
              Регистрация
            </a>
          </li>
          <li
          ><a href="#">
            Личный кабинет
          </a>
          </li>

        </ul>
      </div>

    </div>
    <hr class="line1"/>
    <div class="header">

    </div>
    <div class="header">

    </div>
    <div class="header">

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
