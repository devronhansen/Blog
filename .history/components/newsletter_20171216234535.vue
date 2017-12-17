<template>
  <div class="border-t-1 border-b-1 border-grey bg-black-darkest flex justify-center items-center text-white flex-col py-32" v-in-viewport="startAnimation=true">
        <div>
            <transition appear name="slideDown">
                <div class="text-3xl text-center mb-4">
                    Keep in touch
                </div>
            </transition>
            <transition name="slideUp" appear>
                <div>
                    <form action="" method="post" target="_blank">
                        <input name="EMAIL" class="email" id="mce-EMAIL" type="email" placeholder="Email Address">
                        <input name="subscribe" class="button" id="mc-embedded-subscribe" type="submit" value="Subscribe">
                        <div style="position:absolute;left:-5000px" aria-hidden="true">
                            <input name="b_700e572cbaa3d58dcbd8f7db7_0a883d81c5" tabindex="-1">
                        </div>
                    </form>
                </div>
            </transition>
        </div>
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
.email{
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
.button{
    height: 42px;
    color: #000;
    border: 1px solid #ddd;
    background-color: #ddd;
    padding: 0 15px;
    cursor: pointer;
}
</style>




