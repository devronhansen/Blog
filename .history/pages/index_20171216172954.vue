<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <aboutme></aboutme>
    <div class="border-t-1 border-b-1 border-grey bg-black flex justify-center items-center text-white flex-col py-8">
        <div>
            <div class="text-3xl text-center mb-4">
                Keep in touch
            </div>
            <div>
                <form action="" method="post" target="_blank">
                    <input name="EMAIL" class="newsletter__Email required" id="mce-EMAIL" type="email" placeholder="Email Address">
                    <input name="subscribe" class="Newsletter__Button" id="mc-embedded-subscribe" type="submit" value="Subscribe">
                    <div style="position:absolute;left:-5000px" aria-hidden="true">
                        <input name="b_700e572cbaa3d58dcbd8f7db7_0a883d81c5" tabindex="-1">
                    </div>
                </form>
            </div>
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

<style>
.newsletter__Email{
    float: left;
    height: 42px;
    border: 1px solid #ddd;
    background-color: #000;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 400px;
}
.Newsletter__Button{
    height: 42px;
    color: #000;
    border: 1px solid #ddd;
    background-color: #ddd;
    padding: 0 15px;
    cursor: pointer;
}
</style>



