<template>
  <q-layout
    view="lHh Lpr lff"
    container
    style="height: 100vh"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="header" style="opacity: 0.95">
      <q-toolbar class="justify-end">
        <q-btn
          flat
          round
          dense
          icon="img:/images/icon_home.png"
          size="12px"
          class="q-mx-xs"
        />
        <q-btn
          flat
          round
          dense
          icon="img:/images/icon_star.png"
          size="12px"
          class="q-mx-xs"
        />
        <q-btn
          flat
          round
          dense
          icon="img:/images/icon_heart.png"
          size="12px"
          class="q-mx-xs"
        />

        <q-btn-dropdown class="myicon-dropdown" stretch flat label="홍길동님">
          <q-list class="my-box">
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>이력서 등록</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>이력서 관리</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>지원현황</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>메인 수신설정</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>비밀번호 변경</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>개인정보 수정</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup tabindex="0">
              <q-item-section>
                <q-item-label>로그인 관리</q-item-label>
              </q-item-section>
            </q-item>

            <q-btn class="btn-logout" icon="logout" label="로그아웃" />



          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above :width="270" class="aside">
      <q-scroll-area style="height: calc(100vh - 162px); margin-top: 120px">
        <q-list padding class="lnb_wrap">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage"
                >강사 서비스 홈</router-link
              ></q-item-section
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/select-resume"
                >이력서 등록</router-link
              ></q-item-section
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/manage-resume"
                >이력서 관리</router-link
              ></q-item-section
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/applications"
                >지원현황</router-link
              ></q-item-section
            >
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/certificates"
                >취업활동 증명서</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/recommend"
                >추천 채용정보</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/match"
                >이력서 매칭 정보</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/scrap"
                >스크랩 공고</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/cart"
                >관심학원</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/viewed-academy"
                >내 이력서 열람학원</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/requested-academy"
                >연락처 공개요청 학원</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/manage-files"
                >파일관리</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section
              ><router-link to="/teacher/mypage/set-alarm"
                >알림 수신 설정</router-link
              ></q-item-section
            >
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon />
            </q-item-section>

            <q-item-section>
              <router-link to="/teacher/mypage/access-history">로그인 관리</router-link>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" style="height: 125px;">
        <div class="absolute-bottom bg-transparent text-center flex justify-center items-center" style="height: 125px;">
          <img src="/images/top_logo.png" />
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// const linksList = [
//   {
//     title: '강사서비스홈',
//     to: '/Colors',
//   },
//   {
//     title: '이력서 등록',
//     to: '/IndexPage',
//   },
// ];

</script>

