<template>
  <div class="content_header">
    <div class="full_name_user">
      <span>{{profileUser.lastName}}</span>
      <span>{{profileUser.firstName}}</span>
      <span>{{profileUser.surName}}</span>
    </div>
    <div class="data_user">{{profileUser.date}}</div>
    <div class="text">{{profileUser.tabName}}</div>
    <div class="text">{{profileUser.category}}</div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import {useGlobalStore} from "@/store/GlobalStore";
export default {
  name: "HeaderComponent",
  data () {
    return {}
  },
  computed: {
    ...mapState(useGlobalStore, ['profileUser'])
  }
}
</script>

<style scoped lang="scss">
.content_header {
  width: 100%;
  margin-bottom: 10px;
  background: var(--bg-color-light);
  border-radius: 5px;
  color: var(--text-color);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  .full_name_user {
    font-size: 32px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .data_user {
    font-size: 22px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .text {
    margin-bottom: 10px;
    margin-left: 10px;
  }
}
</style>
