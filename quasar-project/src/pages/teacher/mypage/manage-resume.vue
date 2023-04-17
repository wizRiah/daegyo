<template>
  <div class="container-inner">
    <ul class="location flex justify-end content-center row nowrap">
      <li class="material-icons">
        <q-img src="/images/icon_house_black.png" style="width:14px; height:15px;"></q-img>
      </li>
      <li class="material-icons">강사 서비스</li>
      <li class="material-icons active">홈</li>
    </ul>

    <!-- 타이틀 -->
    <div class="my-txtbox">
      <strong class="text-h1">이력서 관리</strong>
      <ul class="text-subtitle4">
        <li>작성하신 이력서의 공개 여부 및 기간을 수정 하실 수 있습니다.</li>
        <li>자신의 이력서를 필요에 따라 각각 작성/관리 하실 수 있으며 최대 5개까지 보유하실 수 있습니다.</li>
        <li>이력서는 비공개 상태에서도 입사지원이 가능하며, 학원의 채용 담당자가 이력서를 열람할 수 있습니다.</li>
        <li>온라인지원을 한 후 해당 이력서 수정해도 지원한 이력서는 수정되지 않습니다.</li>
        <li>인재정보에 노출되는 이력서는 한 개의 공개된 이력서만 공개 가능합니다.</li>
        <li>가장 최근에 업데이트 하신 이력서를 기본이력서로 지정하시면 최근 내용을 불러오실 수 있습니다.</li>
      </ul>
    </div>

    <strong class="text-h2">이력서 공개 상태</strong>
    <div class="my-subtxtbox flex justify-between items-center">
      <q-img src="images/img_resume_hold.png" style="width:112px; height:95px;"></q-img>
      <ul>
        <li class="title text-subtitle1">현재 강사님의 이력서는 <b class="resume-state">비공개 중</b> 입니다.</li>
        <li class="text-subtitle4 text-black">연락처 공개가 부담스러우시다고요?</li>
        <li class="text-subtitle4">1. 안심번호를 사용하시면 실제 휴대폰 번호가 공개되지 않고 이력서를 공개할 수 있습니다.</li>
        <li class="text-subtitle4">2. 이력서 작성 시 면접제의를 받겠다고 하면 연락처가 비공개 되고, 요청 받은 학원에 대해서만 공개 선택할 수 있습니다.</li>
      </ul>
    </div>

    <div class="q-gutter-xs flex justify-end q-mt-md ">

      <button tabindex="0" type="button" class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle q-btn--actionable q-focusable q-hoverable text-subtitle4 q-underline">
        <span class="q-focus-helper" tabindex="-1"></span>
        <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">이력서를 3분 안에 등록하고 싶다면?</span>
      </button>

      <button class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--actionable q-focusable q-hoverable buttonBasic color-grey-3" tabindex="0" type="button">
        <span class="q-focus-helper" tabindex="-1"></span>
        <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
          <span class="block">파일로 이력서 등록</span>
        </span>
      </button>

      <button class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--actionable q-focusable q-hoverable buttonBasic color-grey-3" tabindex="0" type="button">
        <span class="q-focus-helper" tabindex="-1"></span>
        <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
          <span class="block">링크로 이력서 등록</span>
        </span>
      </button>

      <button class="q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle q-btn--actionable q-focusable q-hoverable buttonBasic color-teal" tabindex="0" type="button">
        <span class="q-focus-helper" tabindex="-1"></span>
        <span class="q-btn__content text-center col items-center q-anchor--skip justify-center row">
          <span class="block">이력서 작성하기</span>
        </span>
      </button>

    </div>

    <div class="my-resumebox">
      <div class="contxt" style="width:500px; height:240px;">
        <p>지금 이력서를 등록하시면 <span class="text-teal-6">훈장마을</span>의 학원 채용공고에 지원하실<br>
        수 있습니다. <span class="text-grey-7">작성하실 이력서를 선택하여 등록해 주시고,<br>
        채용공고에 지원하세요.</span></p>
      </div>
      <div class="contxt-btns flex">
        <button>
          <q-img src="images/img_resume_01.png" style="width:85px; height:77px;"></q-img>
          <strong class="text-subtitle1 text-white">일반 이력서</strong>
          <p class="text-subtitle5">학력사항, 경력사항 등<br>상세 이력서 작성</p>
        </button>
        <button>
          <q-img src="images/img_resume_01.png" style="width:85px; height:77px;"></q-img>
          <strong class="text-subtitle1 text-white">파일 이력서</strong>
          <p class="text-subtitle5">가지고 계신 이력서 파일을<br>등록하여 이력서 작성</p>
        </button>
        <button>
          <q-img src="images/img_resume_01.png" style="width:85px; height:77px;"></q-img>
          <strong class="text-subtitle1 text-white">링크 이력서</strong>
          <p class="text-subtitle5">등록된 파일 링크(URL)를<br>입력하여 이력서 작성</p>
        </button>
      </div>
    </div>

    <!-- 등록된 이력서가 없는 경우 -->
    <div class="resume-count">
      <p class="count-tit text-subtitle2">내 이력서 - <span class="sum">총 0건</span></p>
      <div class="bg-white text-center cont-inner none flex justify-center column">
        <strong class="text-subtitle1 text-bold">등록된 이력서가 없습니다.</strong>
        <p class="text-subtitle4">지금 이력서를 등록하시면 <span class="count">2,000개</span>의 학원공고에 지원하실 수 있습니다.<br>이력서 등록 버튼을 클릭하시고 채용공고에 지원하세요.</p>
      </div>
    </div>

    <!-- 등록된 이력서가 있는 경우 -->
    <div class="resume-count">
      <p class="count-tit text-subtitle2">내 이력서 - <span class="sum">총 4건</span></p>
      <div class="bg-white text-center cont-inner flex justify-center column">
        <strong>인내와 성실을 무기로 장착한 이세상 단 하나뿐인 웹기획자~!</strong>
        <span>파일</span>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>




  </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
