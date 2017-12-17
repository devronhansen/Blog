<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <aboutme></aboutme>
    <div class="border-t-1">

    </div>
</div>
</template>

<script>
import splashBackground from '../components/splashBackground.vue'
import blogEntries from '../components/blogEntries.vue'
import aboutme from '../components/aboutme.vue'

export default {
  components: { splashBackground, blogEntries, aboutme }
}
</script>


