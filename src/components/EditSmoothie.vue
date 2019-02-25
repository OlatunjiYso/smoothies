<template>
  <div class="edit-smoothie container">
    <h2 v-if="smoothie">Edit {{ smoothie.title }}</h2>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'EditSmoothie',
  data(){
    return{
      slug: this.$route.params.smoothie_slug,
      smoothie: null
    }
  },
  created() {
    let ref = db.collection('smoothies').where('slug', '==', this.slug);
    ref.get()
    .then(snapshot => {
      console.log(snapshot)
      snapshot.forEach(doc => {
        this.smoothie = doc.data();
        this.smoothie.id = doc.id
      })
    })
  }
}
</script>
 
<style>
 
</style>