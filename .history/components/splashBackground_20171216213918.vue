<template>
  <div class="bg">
    <div class="flex justify-center items-center h-full text-white flex-col relative">
        <div class="text-5xl p-6">
            The progressive Programmer
        </div>
        <div class="text-xl text-grey font-bold">
            A blog from <span class="text-grey">Ron Hansen</span>
        </div>

        <div class="absolute pin-b cursor-pointer bounce" v-scroll-to="'#highlight'">
            <svg class="mt-auto fill-current text-white h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style>
.bg{
    /* background-image: url(/galaxy.jpg); */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000;
    background-attachment: fixed;
    height: 100vh;
    background: linear-gradient(
      rgba(0, 0, 0, 0.9), 
      rgba(0, 0, 0, 0.9),
      url(/galaxy.jpg)
    ),
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@-moz-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>

