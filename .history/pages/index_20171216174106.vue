<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <aboutme></aboutme>
    <newsletter></newsletter>
    <footer></footer>
</div>
</template>

<script>
import splashBackground from '../components/splashBackground.vue'
import blogEntries from '../components/blogEntries.vue'
import aboutme from '../components/aboutme.vue'
import newsletter from '../components/newsletter.vue'
import footer from '../components/footer.vue'

export default {
  components: { splashBackground, blogEntries, aboutme, newsletter, footer }
}
</script>
