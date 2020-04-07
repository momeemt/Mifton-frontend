<template>
  <div>
    <v-row>
      <v-dialog v-model="deleteLinkDialog" max-width="600px">
        <v-card>
          <v-card-title>このリンクを削除してもよろしいですか？</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(key, index) in deleteExpectedLink"
                >{{ index }} : {{ key }}</v-list-item
              >
            </v-list>
            <v-btn @click="deleteExpectedReset">キャンセル</v-btn>
            <v-btn @click="deleteConvenienceLink">OK</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row>
      <v-dialog v-model="editLinkDialog" max-width="600px">
        <v-card>
          <v-card-title>編集する</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="convenienceLinkData.name"
              label="リンク名"
              color="orange darken-3"
            ></v-text-field>
            <v-text-field
              v-model="convenienceLinkData.link"
              label="リンク"
              color="orange darken-3"
            ></v-text-field>
            <v-text-field
              v-model="convenienceLinkData.description"
              label="説明"
              color="orange darken-3"
            ></v-text-field>
            <v-checkbox
              v-model="convenienceLinkData.is_public"
              label="即公開する？"
              color="orange darken-3"
            ></v-checkbox>
            <div class="text-right">
              <v-btn
                @click="updateConvenienceLink"
                color="orange darken-3"
                class="white--text"
              >
                更新する
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="convenienceLinks"
      :search="pubTableSearch"
      show-select
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>便利リンク管理</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <create-modal
            :modelObject="convenienceLinksObjectForModal"
          ></create-modal>
          <v-btn outlined rounded>公開する</v-btn>
        </v-toolbar>
        <v-toolbar flat>
          <v-text-field
            v-model="pubTableSearch"
            append-icon="mdi-magnify"
            label="検索する"
            hide-details
            color="orange darken-3"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon @click="openEditLinkDialog(item)" small class="mr-2">
          mdi-pencil
        </v-icon>
        <v-icon @click="openDeleteLinkDialog(item)" small>
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import createModal from '~/components/manages/createModal'
import convenienceLinkJsonData from '~/assets/json/modelobject/convenience_links.json'
export default {
  name: 'ConvenienceLinksVue',
  layout: 'pc/manage',
  components: {
    createModal
  },
  data() {
    return {
      convenienceLinks: [],
      editLinkDialog: false,
      deleteLinkDialog: false,
      deleteExpectedLink: {},
      pubTableSearch: '',
      selected: [],
      convenienceLinkData: {
        name: '',
        description: '',
        link: '',
        is_public: false
      },
      headers: [
        { text: 'リンク名', value: 'name' },
        { text: '公開中', value: 'is_public' },
        { text: 'ユーザーID', value: 'user_id' },
        { text: '操作', value: 'actions', sortable: false }
      ],
      convenienceLinksObjectForModal: convenienceLinkJsonData
    }
  },
  async asyncData(context) {
    const convenienceLinksObject = await context.app.$api.ConvenienceLinks.index()
    const convenienceLinks = convenienceLinksObject.convenienceLink
    return { convenienceLinks }
  },
  methods: {
    updateConvenienceLink() {
      this.$api.ConvenienceLinks.update(this.convenienceLinkData)
      this.editLinkDialog = false
      this.convenienceLinkData = {}
    },
    deleteConvenienceLink() {
      const data = this.deleteExpectedLink
      this.$api.ConvenienceLinks.delete(data)
      const convenienceLinks = this.convenienceLinks.filter(
        (l) => l.id !== data.id
      )
      this.convenienceLinks = convenienceLinks
      this.deleteLinkDialog = false
    },
    deleteExpectedReset() {
      this.deleteExpectedLink = {}
      this.deleteLinkDialog = false
    },
    openDeleteLinkDialog(data) {
      this.deleteLinkDialog = true
      this.deleteExpectedLink = data
    },
    openEditLinkDialog(data) {
      this.editLinkDialog = true
      this.convenienceLinkData = data
    }
  }
}
</script>

<style scoped></style>
