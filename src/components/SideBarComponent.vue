<template>
  <div class="sidebar">
    <div class="header">
      <div class="data">
        <div class="date">{{ getDate() }}</div>
        <div class="time">{{ `${hours} : ${minutes} : ${seconds}` }}</div>
      </div>
      <div class="exit">
        <div class="text">{{$t('logOut')}}</div>
        <div class="icon">
          <LogoutIcon class="ic" color-icon="var(--text-color)"/>
        </div>
      </div>
    </div>
    <div class="widgets_sidebar">
      <LangWidget/>
      <ThemeWidget @click="changeTheme"/>
    </div>
    <div class="content">
      <HeaderComponent/>
      <div class="content_content">
        <InfoEntity
            :text-info="$t('briefing')"
            :value-number="profileUser.widgets.briefing"
            :full-number="100"
            color-icon="var(--progressbar-color)"
        >
          <SchoolIcon color-icon="var(--text-color)" height-icon="65%" width-icon="65%"/>
        </InfoEntity>
        <InfoEntity
            :text-info="$t('pre_shift_Examiner')"
            :value-number="profileUser.widgets.preShiftExaminer"
            :full-number="100"
            color-icon="var(--progressbar-color)"
        >
          <TestIcon color-icon="var(--text-color)" height-icon="65%" width-icon="65%"/>
        </InfoEntity>
        <InfoEntity
            :text-info="$t('tests_completed')"
            :value-number="profileUser.widgets.testsCompleted"
            :full-number="profileUser.widgets.fulTest"
            color-icon="var(--progressbar-color)"
        >
          <span style="font-size: 200%;">{{ profileUser.widgets.testsCompleted }}</span>
        </InfoEntity>
        <InfoEntity
          :text-info="$t('attestation_through')"
          :value-number="profileUser.widgets.attestationThrough"
          :full-number="profileUser.widgets.allDaysAttes"
          color-icon="var(--progressbar-color)"
      >
        <span style="font-size: 200%;">{{ profileUser.widgets.attestationThrough }} {{$t('day')}}</span>
      </InfoEntity>
      </div>
    </div>
  </div>
</template>

<script>
import LangWidget from "@/components/widgets/LangWidget";
import LogoutIcon from "@/components/IconComponents/LogoutIcon";
import ThemeWidget from "@/components/widgets/ThemeWidget";
import {mapActions, mapState} from "pinia";
import { useGlobalStore } from "@/store/GlobalStore";
import HeaderComponent from "@/components/HeaderComponent";
import InfoEntity from "@/components/entities/InfoEntity";
import SchoolIcon from "@/components/IconComponents/SchoolIcon";
import TestIcon from "@/components/IconComponents/TestIcon";
export default {
  name: "SideBarComponent",
  components: {TestIcon, SchoolIcon, InfoEntity, HeaderComponent, ThemeWidget, LogoutIcon, LangWidget},
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  computed: {
    ...mapState(useGlobalStore, ['profileUser'])
  },
  methods: {
    ...mapActions(useGlobalStore, [ 'changeTheme']),
    getDate () {
      const date = new Date()
      let day = date.getDate()
      if (day.toString().length === 1) day = `0${day}`
      let month = date.getMonth()
      if (month.toString().length === 1) month = `0${month}`
      this.getTime()
      return `${day}. ${month}. ${date.getFullYear()} г.`
    },
    getTime () {
      setTimeout(() => {
        const date = new Date()

        let hours = date.getHours()
        if (hours.toString().length === 1) hours = `0${hours}`
        this.hours = hours

        let minutes = date.getMinutes()
        if (minutes.toString().length === 1) minutes = `0${minutes}`
        this.minutes = minutes

        let seconds = date.getSeconds()
        if (seconds.toString().length === 1) seconds = `0${seconds}`
        this.seconds = seconds
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  width: 33%;
  height: 100%;
  border-radius: 0 15px 15px 0;
  background: var(--bg-color);
  box-shadow: 4px 0 7px var(--bg-color);
  padding: 20px;
  color: var(--text-color);
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
.date {
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
}
.time {
  font-size: 22px;
  font-weight: bold;
}
.exit {
  display: flex;
}
.text {
  font-size: 22px;
  margin-right: 8px;
}
.theme {
  width: 10%;
  margin-left: auto;
  margin-bottom: 20px;
  margin-top: 20px;
}
.progress_theme {
  background: var(--bg-color-light);
  width: 63px;
  height: 20px;
  border-radius: 10px;
  position: relative;
}
.progress_theme .ic {
  position: absolute;
  left: -16px;
  top: -17px;
}
.widgets_sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.content_content {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 9.5%;
}
</style>
