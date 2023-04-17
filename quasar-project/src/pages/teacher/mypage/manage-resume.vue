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
    <div class="my_txtbox">
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
    <div class="my_subtxtbox flex justify-between items-center">
      <q-img src="images/img_resume_hold.png" style="width:112px; height:95px;"></q-img>
      <ul>
        <li class="title text-subtitle1">현재 강사님의 이력서는 <b class="resume_state">비공개 중</b> 입니다.</li>
        <li class="text-subtitle4 text-black">연락처 공개가 부담스러우시다고요?</li>
        <li class="text-subtitle4">1. 안심번호를 사용하시면 실제 휴대폰 번호가 공개되지 않고 이력서를 공개할 수 있습니다.</li>
        <li class="text-subtitle4">2. 이력서 작성 시 면접제의를 받겠다고 하면 연락처가 비공개 되고, 요청 받은 학원에 대해서만 공개 선택할 수 있습니다.</li>
      </ul>
    </div>


  </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
