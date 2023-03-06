<template>
  <div class="container">
    <Localization/>
    <TheHeader/>
  </div>
</template>

<script>
import Vue from 'vue'
import Localization from "~/components/Localization.vue";
import TheHeader from "~/components/TheHeader.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Localization,
    TheHeader,

  }
})

</script>


<style scoped>
* {

  padding: 0px;
  font-family: "Open Sans", sans-serif;

}
</style>
