<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <aboutme></aboutme>
    <div class="border-t-1 border-b-1 border-grey bg-black flex justify-center items-center text-white">
        <div class="text-3xl m-4 text-center">
            Keep in touch
        </div>
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


