<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header class="q-header bg-color-teal">
      <q-toolbar>
        <div class="spacer"></div>
        <div class="icon_buttons">
          <button>
            <a href="#"></a>
          </button>
          <button>
            <a href="#"></a>
          </button>
          <button>
            <a href="#"></a>
          </button>
        </div>
        <button class="etc-btn">
          <span>
            홍길동님
            <div class="icon_arrow">

            </div>
          </span>
        </button>

      </q-toolbar>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above class="bg-white">
      <q-list>
        <q-item-label header>
          <img src="../assets/logo.png" alt="로고">
        </q-item-label>

        <q-item class="menu01" clickable rel="noopener" href="">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>강사 서비스 홈</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu02" clickable rel="noopener" href="">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              <router-link to="/resume">이력서 등록</router-link>
            </q-item-label>
          </q-item-section>
        </q-item>


        <q-item class="menu03" clickable rel="noopener" href="http://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>이력서 관리</q-item-label>
          </q-item-section>
        </q-item>


        <q-item class="menu04" clickable rel="noopener" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>지원현황</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu05" clickable rel="noopener" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>취업활동 증명서</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu06" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>추천 채용정보</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu07" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>이력서 매칭 정보</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu08" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>스크랩 공고</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu09" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>관심학원</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu10" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>내 이력서 열람학원</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu11" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>연락처 공개요청 학원</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu12" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>파일관리</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu13" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>알림 수신 설정</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="menu14" clickable rel="noopener" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon />
          </q-item-section>
          <q-item-section>
            <q-item-label>로그인 관리</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>


      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
const linksList = [

  {
    title: 'Resume',
    to: '/Resume',
  },

];


</script>


<script setup>

import { ref } from "vue";
import EssentialLink from '../components/EssentialLink.vue';

const leftDrawerOpen = ref(false);
const essentialLinks = linksList
const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value;


</script>



<style lang="css" scoped></style>
