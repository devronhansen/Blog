<template>
  <div id="highlight" class="highlight border-t-1 border-grey">
        <div class="mx-16">
            <div class="flex justify-center w-full text-3xl py-6">
                Recent blog entries
            </div>
            <div class="flex mb-4 flex-wrap -mx-2">
                        <div class="w-1/2 my-4 px-4 card" v-for="post in blogEntries" :key="post.id" v-scroll-reveal>
                            <div class="w-full lg:flex">
                                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
                                </div>
                                <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div class="mb-6">
                                        <p class="text-sm text-grey-dark flex items-center">
                                            <svg class="fill-current text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                            </svg>
                                            Members only
                                        </p>
                                        <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                        <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                        </div>
                                        <div class="flex items-center">
                                        <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
                                        <div class="text-sm">
                                            <p class="text-black leading-none">Jonathan Reinink</p>
                                            <p class="text-grey-dark">Aug 18</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="flex justify-end w-full mr-4 mt-2" v-show="showBtn">
                                <div v-scroll-reveal class="bg-black-darkest text-white px-6 py-2 rounded uppercase hover:bg-white hover:text-black-darkest border-2 border-black cursor-pointer">
                                    More
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
</template>

<script>
import blogEntries from '../serverdata'

export default {
  data () {
    return {
      blogEntries: [],
      showBtn: false
    }
  },
  created () {
    setTimeout(() => { this.blogEntries = blogEntries }, 1)
    setTimeout(() => {
      this.showBtn = true
    }, 50)
  }
}
</script>

<style>
.highlight{
    height: 100vh;
}

.card{
    box-shadow: 10px 10px 20px 0 rgba(46,61,73,.15);
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.card:hover{
    box-shadow: 3px 3px 3px 0 rgba(46,61,73,.15);
}
</style>


