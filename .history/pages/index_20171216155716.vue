<template>
<div>
    <splash-background></splash-background>
    <div class="highlight border-t-1 border-grey">
        <div class="m-6">
            <div class="flex justify-center w-full text-3xl m-4">
                Recent blog entries
            </div>

            

            <div class="px-2">
                <div class="flex -mx-2">
                    <div class="w-1/3 px-2">
                    <div class="bg-grey-light h-12"></div>
                    </div>
                    <div class="w-1/3 px-2">
                    <div class="bg-grey h-12"></div>
                    </div>
                    <div class="w-1/3 px-2">
                    <div class="bg-grey-light h-12"></div>
                    </div>
                </div>
                </div>
            
        </div>
    </div>
</div>
</template>

<script>
import splashBackground from '../components/splashBackground.vue'

export default {
  components: { splashBackground }
}
</script>

<style>
.highlight {
  height: 50vh;
}
</style>


