<template>
<div>
    <splash-background></splash-background>
    <div class="highlight border-t-1 border-grey">
        <div>
            <div>
                Recent blog entries
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
  height: 100vh;
}
</style>


