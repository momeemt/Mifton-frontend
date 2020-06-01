<template>
  <div>
    <div class="positionBadgeContainer">
      <JobBadge
        v-if="job.admin"
        display-text="管理者"
        icon-class="fas fa-user-cog"
        color="red"
        tool-tip-text="Mifton全体を管理し、全ての権限を持ちます。"
      />
      <JobBadge
        v-if="job.manager"
        display-text="運営者"
        icon-class="fas fa-user-graduate"
        color="green"
        tool-tip-text="Miftonを運営するユーザーです。"
      />
      <JobBadge
        v-if="job.staff"
        display-text="スタッフ"
        icon-class="fas fa-user-tie"
        color="teal"
        tool-tip-text="Miftonにおいて何らかの仕事に就いているユーザーです。"
      />
      <JobBadge
        v-if="job.trust_user"
        display-text="トラストユーザー"
        icon-class="fas fa-user-check"
        color="blue"
        tool-tip-text="Miftonに良い影響を与えている優良ユーザーです。"
      />
    </div>
    <div class="jobBadgeContainer">
      <JobBadge
        v-if="job.web_developer"
        display-text="Web版 開発者"
        icon-class="fas fa-user-shield"
        color="orange"
        tool-tip-text="Web版のMiftonの開発者・コントリビュータです。"
      />
      <JobBadge
        v-if="job.app_developer"
        display-text="アプリ版 開発者"
        icon-class="fas fa-user-shield"
        color="orange darken-2"
        tool-tip-text="スマホアプリ版のMiftonの開発者です。"
      />
      <JobBadge
        v-if="job.topic_writer"
        display-text="トピックライター"
        icon-class="fas fa-user-edit"
        color="indigo"
        tool-tip-text="運営に依頼されてトピックを執筆しているユーザーです。"
      />
      <JobBadge
        v-if="job.director"
        display-text="ディレクター"
        icon-class="fas fa-user-astronaut"
        color="pink"
        tool-tip-text="Miftonの運営や方向性に関わっているユーザーです。"
      />
      <JobBadge
        v-if="job.crawl"
        display-text="クロール"
        icon-class="fas fa-user-secret"
        color="blue-grey"
        tool-tip-text="Miftonの治安維持に関わっているユーザーです。"
      />
      <JobBadge
        v-if="job.public_relation"
        display-text="広報"
        icon-class="fas fa-child"
        color="purple"
        tool-tip-text="Miftonの広報活動に関わっているユーザーです。"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import JobBadge from '~/components/Atoms/JobBadge'
export default {
  components: {
    JobBadge
  },
  computed: {
    ...mapGetters('users', ['job'])
  }
}
</script>

<style scoped></style>
