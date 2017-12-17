<template>
<div class="bg">
    <div class="flex justify-center items-center h-full text-white flex-col">
        <div class="text-5xl p-6">
            The progressive Programmer
        </div>
        <div class="text-xl text-grey font-bold">
            A blog from Ron Hansen
        </div>

        <div>
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
</div>
</template>

<script>

export default{
}
</script>

<style>
.bg{
    background-image: url(/galaxy.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #000;
    background-attachment: fixed;
    height: 100vh;
}
</style>
