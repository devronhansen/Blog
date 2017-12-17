<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <div class="border-t-1 border-b-1 border-grey bg-grey-lighter">
            <div class="w-1/2 p-6">
                <div class="text-2xl">
                    About me
                </div>
                <div class="text-grey-darker">
                    There's a chance you may already know me! A veteran in the PHP community, I am a co-host on the official Laravel podcast, have written successful books, built popular packages, contributed to many open-source projects, spoken at every Laracon conference, been a guest on countless podcasts (including PHP Town Hall, Shop Talk, No Capes, and Full Stack Radio), and have contributed to the largest web dev magazines in the world.
                    <br>
                    And if I may be so bold, I'm really good at teaching this stuff. You won't find boring, sleep-inducing slides and diagrams anywhere on this site. No, here, we're entirely focused on the code - just like we're sitting next to each other.
                </div>
            </div>
            <div class="w-1/2">

            </div>
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


