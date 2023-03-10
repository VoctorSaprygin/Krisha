<template>
  <div class="container">
    <Localization/>
    <TheHeader/>
    <TheSliders/>
  </div>
</template>

<script>
import Vue from 'vue'
import Localization from "~/components/Localization.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheSliders from "~/components/TheSliders.vue";
export default Vue.extend({
  name: 'IndexPage',
  components: {
    Localization,
    TheHeader,
    TheSliders,
  }
})

</script>


<style scoped>
* {

  padding: 0px;
  font-family: "Open Sans", sans-serif;

}
</style>
