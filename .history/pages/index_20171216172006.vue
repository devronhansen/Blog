<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <aboutme></aboutme>
    <div class="border-t-1 border-b-1 border-grey bg-black flex justify-center items-center text-white flex-col m-8">
        <div class="text-3xl text-center">
            Keep in touch
        </div>
        <div>
            <form action="//orion.us15.list-manage.com/subscribe/post?u=700e572cbaa3d58dcbd8f7db7&amp;id=0a883d81c5" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" target="_blank"><input name="EMAIL" class="Newsletter__Email required" id="mce-EMAIL" type="email" placeholder="Email Address"><input name="subscribe" class="Newsletter__Button" id="mc-embedded-subscribe" type="submit" value="Subscribe"><div style="position:absolute;left:-5000px" aria-hidden="true"><input name="b_700e572cbaa3d58dcbd8f7db7_0a883d81c5" tabindex="-1"></div></form>
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


