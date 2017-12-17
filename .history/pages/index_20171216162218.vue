<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <div class="border-t-1 border-grey">

    </div>
</div>
</template>

<script>
import splashBackground from '../components/splashBackground.vue'
import blogEntries from '../components/blogEntries.vue'

export default {
  components: { splashBackground, blogEntries }
}
</script>

<style>
</style>


