<template>
  <div class="lang_widget">
    <select v-model="selectLang">
      <option value="ru" selected>{{$t('lang_ru')}}</option>
      <option value="en">{{$t('lang_en')}}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useGlobalStore } from '@/store/GlobalStore'
export default {
  name: "LangWidget",
  data () {
    return {
      selectLang: 'ru'
    }
  },
  watch: {
    selectLang (newLang) {
      this.changeLang(newLang)
    }
  },
  methods: {
    ...mapActions(useGlobalStore, ['changeLang'])
  }
}
</script>

<style scoped lang="scss">
.lang_widget {
  select {
    background: var(--bg-color-light);
    font-size: 18px;
    border-radius: 4px;
    color: var(--text-color);
  }
}
</style>
