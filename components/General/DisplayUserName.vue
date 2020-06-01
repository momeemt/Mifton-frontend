<template>
  <div class="DisplayUserName">
    <v-tooltip
      v-for="(data, key) in authorities"
      :key="key"
      v-if="userJob[key]"
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-icon v-on="on" :color="data.color">
          fas fa-star
        </v-icon>
      </template>
      <div>{{ data.title }}</div>
      <div>{{ data.description }}</div>
    </v-tooltip>
    {{ userName }}
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    userJob: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      authorities: {
        admin: {
          title: '【管理者】',
          description: 'Miftonのサービス全体を管理しているユーザーです。',
          color: 'red'
        },
        manager: {
          title: '【マネージャー】',
          description:
            '特に優秀なスタッフです。わからないことがあれば聞いてみましょう。',
          color: 'orange'
        },
        staff: {
          title: '【スタッフ】',
          description: 'Miftonで働くスタッフです。',
          color: 'green'
        },
        trust_user: {
          title: '【トラストユーザー】',
          description:
            'Miftonを長く使っていて、運営に貢献しているユーザーです。',
          color: 'light-blue darken-1'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.displayUserName {
  font-size: 28px;
  display: flex;
  i {
    margin-right: 8px;
    font-size: 15px;
  }
}
</style>
