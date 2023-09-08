<template>
  <div class="menu">
    <MenuItem :name-item="$t('get_started')" :path="routePath.Job">
      <JobIcon width-icon="60%" height-icon="60%" color-icon="var(--text-color)"/>
    </MenuItem>
    <MenuItem :name-item="$t('notifications')" :path="routePath.mail" :count-message="'5'">
      <MailIcon width-icon="60%" height-icon="60%" color-icon="var(--text-color)"/>
    </MenuItem>
    <MenuItem :name-item="$t('education')" :path="routePath.book">
      <BookIcon width-icon="60%" height-icon="60%" color-icon="var(--text-color)"/>
    </MenuItem>
    <MenuItem :name-item="$t('achievements')" :path="routePath.starmedal">
      <StarMedalIcon width-icon="60%" height-icon="60%" color-icon="var(--text-color)"/>
    </MenuItem>
  </div>
</template>

<script>
import MenuItem from "@/components/navigate/MenuItem";
import JobIcon from "@/components/IconComponents/JobIcon";
import MailIcon from "@/components/IconComponents/MailIcon";
import StarMedalIcon from "@/components/IconComponents/StarMedalIcon";
import BookIcon from "@/components/IconComponents/BookIcon";
import {RoutesPath} from "@/router/RouterPaths";
export default {
  name: "HomeComponent",
  components: {
    BookIcon,
    StarMedalIcon,
    MailIcon,
    JobIcon,
    MenuItem,
  },
  data () {
    return {}
  },
  computed: {
    routePath () {
      return RoutesPath
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  display: grid;
  grid-template-columns: repeat(2, 20%);
  justify-content: center;
  align-items: center;
  gap: 50px;
}

</style>
