<template>
    <div>
        <img :src="breed" alt="">
        <h4>{{name.toUpperCase()}}</h4>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://dog.ceo/api/breed/${params.breed}/images/random`
    )
    return { breed: data.message, name: params.breed }
  }
}
</script>
