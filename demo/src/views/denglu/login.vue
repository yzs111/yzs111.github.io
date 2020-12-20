<template>
  <div>
      <layout>
        <a-layout-content>
           <right ref="right"></right>
        </a-layout-content>
      </layout>
  </div>
</template>

<script>
import right from './chlidren/right'
export default {
  data () {
    return {

    }
  },
  components: {
    right
  }
}
</script>

<style>
</style>
