<template>
  <v-card id="newDropContainer">
    <v-dialog v-model="is_dialog_show" width="500">
      <v-card>
        <no-ssr>
          <Picker @select="addEmoji" style="width: 500px" />
        </no-ssr>
      </v-card>
    </v-dialog>
    <v-flex>
      <div class="flexBox">
        <div>
          <img src="/default_icon.png" />
        </div>
        <v-textarea
          v-model="drop.content"
          :rules="max_char_rule"
          placeholder="日常の体験や進捗を発信しよう"
          auto-grow
          color="#017ABB"
          rounded
          rows="1"
        />
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="is_dialog_show = true"
          class="mx-2"
          icon
          dark
          small
          color="pink"
        >
          <v-icon dark>mdi-face</v-icon>
        </v-btn>
        <v-btn class="mx-2" icon dark small color="blue">
          <v-icon>mdi-calendar</v-icon>
        </v-btn>
        <v-btn
          id="drop-button"
          @click="addDrop"
          :disabled="empty_content"
          class="ma-2 blue white--text darken-3"
          rounded
          width="200"
        >
          ドロップする
        </v-btn>
      </v-card-actions>
      <v-alert v-show="showingErrorAlert" dense outlined type="error">
        ドロップに失敗しました。不正な操作が行われたか、サーバーがダウンしている可能性があります。Mifton運営にご連絡ください。
      </v-alert>
    </v-flex>
  </v-card>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
}
</style>

<style lang="scss">
.v-messages__message {
  margin-left: 20px !important;
}
#newDropContainer {
  box-shadow: none !important;
}
.flexBox {
  display: flex;
}
</style>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  components: {
    Picker
  },
  data() {
    return {
      drop: {
        content: '',
        user_id: -1
      },
      openEmoji: false,
      is_dialog_show: false,
      max_char_rule: [
        (v) => v.length <= 140 || '140字以上のドロップはできません！'
      ],
      showingErrorAlert: false
    }
  },
  computed: {
    empty_content(val) {
      return !this.drop.content
    }
  },
  methods: {
    async addDrop() {
      this.drop.user_id = this.$store.state.currentUser.id
      const res = await this.$api.create('drops', this.drop)
      const resCode = res.resCode
      const drop = {
        ...res.res,
        type: 'drop',
        user: this.$store.getters.currentUser
      }
      if (resCode === 200) {
        this.removeText()
        this.$emit('add', drop)
        this.$emit('close')
      } else {
        this.showingErrorAlert = true
      }
    },
    removeText() {
      this.drop.content = ''
    },
    addEmoji(emoji) {
      this.drop.content += emoji.native
      this.is_dialog_show = false
    }
  }
}
</script>
