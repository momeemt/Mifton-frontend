<template>
  <v-file-input
    v-model="image"
    @change="uploadImage($event)"
    :label="label"
    :placeholder="placeholder"
    accept="image/png, image/jpeg, image/bmp"
    prepend-icon="mdi-camera"
    outlined
    counter
    rounded
    color="orange darken-3"
  ></v-file-input>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: {
    modelProperty: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      image: []
    }
  },
  computed: {
    ...mapGetters('sessions', ['currentUser'])
  },
  methods: {
    async uploadImage(image) {
      await this.getBase64(image)
        .then((res) => (this.image = res))
        .catch((err) => err)
      const payload = {
        user: { id: this.currentUser.id, user: { icon: this.image } }
      }
      await this.updateProfile({ payload })
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    ...mapActions('users', ['updateProfile'])
  }
}
</script>

<style scoped></style>
