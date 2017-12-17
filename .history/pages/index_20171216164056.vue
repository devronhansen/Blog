<template>
<div>
    <splash-background></splash-background>
    <blog-entries></blog-entries>
    <div class="border-t-1 border-b-1 border-grey bg-grey-lightest">
            <div class="w-2/3 p-8">
                <div class="text-3xl mb-4 text-center">
                    About me
                </div>
                <div class="text-grey-darker">
                    There's a <span class="font-bold">chance</span> you may already know me! A veteran in the PHP community, I am a co-host on the official Laravel podcast, have written <span class="font-bold">successful</span> books, built popular packages.
                    <br>
                    And if I may be so <span class="font-bold">bold</span>, I'm really good at teaching this stuff. You won't find boring, sleep-inducing slides and diagrams anywhere on this site. No, here, we're entirely focused on the code - just like we're sitting next to <span class="font-bold">each</span> other.
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


