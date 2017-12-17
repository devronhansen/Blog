<template>
  <div class="border-t-1 border-b-1 border-grey bg-grey-lightest flex p-16" v-in-viewport="startAnimation=true">
            <div class="w-1/2 p-8">
                <transition name="slideDown">
                    <div class="text-3xl mb-4 text-center" v-if="startAnimation">
                        About
                    </div>
                </transition>

                <transition name="slideLeft">
                    <div class="text-grey-darker" v-show="startAnimation">
                        There's a <span class="font-bold">chance</span> you may already know me! A veteran in the PHP community, I am a co-host on the official Laravel podcast, have written <span class="font-bold">successful</span> books, built popular packages.
                        <br>
                        And if I may be so <span class="font-bold">bold</span>, I'm really good at teaching this stuff. You won't find boring, sleep-inducing slides and diagrams anywhere on this site. No, here, we're entirely focused on the code - just like we're sitting next to <span class="font-bold">each</span> other.
                        <br>
                        Aliquam molestie, odio sed rhoncus vehicula, urna sem pretium est, condimentum porta massa libero nec leo. Aenean nisl ex, tristique a semper vel, pretium vitae eros. Nunc odio libero, porttitor ut nibh suscipit, pulvinar gravida mauris. 
                        <br>
                        Aliquam elementum vel tortor nec viverra. Pellentesque maximus turpis sit amet urna blandit congue. Integer vehicula, quam vel faucibus dapibus, neque tellus convallis urna, nec mollis sem ligula eget augue. 
                        <br>
                        Suspendisse libero elit, efficitur et nibh sit amet, blandit consectetur orci. Cras molestie non dui nec eleifend. Cras interdum felis purus, ac auctor justo sollicitudin non.
                    </div>
                </transition>
            </div>
            <transition appear name="slideRight">
            <div class="w-1/2 p-8" v-show="startAnimation">
                <div class="conference rounded"></div>
            </div>
            </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      startAnimation: false
    }
  }
}
</script>


<style>
.conference{
    background-image: url('/conference.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
</style>