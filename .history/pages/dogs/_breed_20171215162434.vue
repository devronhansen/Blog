<template>
  
</template>

<script>
import axios from 'axios'
export default {
  export default {
        async asyncData ({params}) {
            const { data } = await axios.get(`https://dog.ceo/api/breed/${params.breed}/images/random`)
            return { breed: data.message, name: params.breed }
        }
    }
}
</script>
