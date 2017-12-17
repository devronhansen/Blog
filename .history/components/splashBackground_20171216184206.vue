<template>
  <div class="bg">
    <div class="flex justify-center items-center h-full text-white flex-col relative">
        <div class="text-5xl p-6">
            The progressive Programmer
        </div>
        <div class="text-xl text-grey font-bold">
            A blog from <span class="text-grey">Ron Hansen</span>
        </div>

        <div class="absolute pin-b cursor-pointer bounce">
            <svg class="mt-auto fill-current text-white h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</div>
</template>


<style lang="scss">
.bg{
    background-image: url(/galaxy.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000;
    background-attachment: fixed;
    height: 100vh;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

include keyframes(bounce) {
	0%, 20%, 50%, 80%, 100% {
    @include transform(translateY(0));
  }
	40% {
    @include transform(translateY(-30px));
  }
	60% {
    @include transform(translateY(-15px));
  }
}
</style>

