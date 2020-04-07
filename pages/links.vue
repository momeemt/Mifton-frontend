<template>
  <div>
    <h1>便利リンク集</h1>
    <v-list>
      <v-list-item
        v-for="data in linkDatas"
        :href="data.link"
        three-line
        target="_blank"
      >
        <v-list-item-content>
          <v-list-item-title v-text="data.name"></v-list-item-title>
          <v-list-item-subtitle
            v-text="data.description"
          ></v-list-item-subtitle>
          <v-list-item-subtitle v-text="data.tags"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'LinksVue',
  layout: 'pc/general',
  data() {
    return {
      linkDatas: [
        {
          title: 'Minecraft Wiki',
          description: 'Minecraftの情報が多く記載されています。',
          tags: '日本語',
          link:
            'https://minecraft-ja.gamepedia.com/Minecraft_Wikihttps://minecraft.gamepedia.com/Bedrock_Edition_beta_scripting_documentation'
        },
        {
          title: 'Resource Pack 開発チュートリアル',
          description: 'Resource Packを開発するためのチュートリアル資料です。',
          tags: 'MCBE, 日本語',
          link:
            'https://minecraft-ja.gamepedia.com/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB/Bedrock_Edition/%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%83%91%E3%83%83%E3%82%AF%E3%81%AE%E4%BD%9C%E6%88%90'
        },
        {
          title: 'Behavior Pack 開発チュートリアル',
          description: 'Behavior Packを開発するためのチュートリアル資料です。',
          tags: 'MCBE, 日本語',
          link:
            'https://minecraft-ja.gamepedia.com/%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB/Bedrock_Edition/%E3%83%93%E3%83%98%E3%82%A4%E3%83%93%E3%82%A2%E3%83%BC%E3%83%91%E3%83%83%E3%82%AF%E3%81%AE%E4%BD%9C%E6%88%90'
        },
        {
          title: 'ScriptingAPI ドキュメント',
          description:
            'MinecraftBE Behavior Packの要素の一つであるScriptingAPIの公式ドキュメントです。',
          tags: 'MCBE, 英語',
          link:
            'https://minecraft.gamepedia.com/Bedrock_Edition_beta_scripting_documentation'
        },
        {
          title: 'Resource Pack ダウンロード(1.13.0)',
          description: 'Resource Pack テンプレートのダウンロードができます。',
          tags: 'MCBE, Download',
          link: 'https://aka.ms/resourcepacktemplate'
        },
        {
          title: 'Behavior Pack ダウンロード(1.13.0)',
          description: 'Behavior Pack テンプレートのダウンロードができます。',
          tags: 'MCBE, Download',
          link: 'https://aka.ms/behaviorpacktemplate'
        },
        {
          title: 'パーティクルパック ダウンロード',
          description:
            'MinecraftBEでパーティクルを追加するためのテンプレートをダウンロードできます。',
          tags: 'MCBE, Download',
          link: 'https://aka.ms/MCParticlesPack'
        }
      ]
    }
  },
  async asyncData({ $axios }) {
    const linkDatas = await $axios
      .$get('/api/v1/convenience_links')
      .catch((err) => {
        console.log(err)
      })
    return { linkDatas }
  }
}
</script>

<style scoped></style>
