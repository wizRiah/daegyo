<template>
  <div class="container-inner">
    <ul class="location flex justify-end content-center row nowrap">
      <li class="material-icons">
        <q-img src="/images/icon_house_black.png" style="width:14px; height:15px;"></q-img>
      </li>
      <li class="material-icons">강사 서비스</li>
      <li class="material-icons active">이력서 등록</li>
    </ul>

    <!-- 타이틀 -->
    <div class="my_txtbox">
      <strong class="text-h1">이력서 등록</strong>
        <ul class="text-subtitle4">
          <li>훈장마을의 이력서는 총3개의 Type으로 구성되어 있어, 강사님이 원하는 Type으로 선택하신 후 이력서를 작성할 수 있습니다.</li>
          <li>이력서는 최대 5개까지 등록이 가능하고, Type별로 중복 등록이 가능합니다.</li>
          <li>파일이력서, 링크 이력서도 기본적인 입력항목은 존재하고, 해당 이력서로도 훈장마을 온라인 지원을 이용할 수 있습니다.</li>
          <li>이력서는 자동 임시저장 기능이 적용되어 있어서 작성 중에 대기화면으로 5분 이상이 지나면 임시저장 됩니다.</li>
          <li>일반 이력서만 PDF저장이 가능합니다.</li>
          <li class="text-black">입사지원 후에 이력서가 수정되더라도 지원한 내용은 수정되지 않습니다.</li>
        </ul>
    </div>

    <ul class="resumebox flex justify-between cursor-pointer">
      <li class="resumbtn">
          <div class="text-h2">일반 이력서</div>
          <div class="text-subtitle4">학력사항, 경력사항, 자기소개서, 각종 증명 등 채용담당자가 강사님을 잘 알 수 있도록 일반 이력서 작성을 이용해 보세요.</div>
          <button class="ico_arrow" type="button"></button>
        <img src="images/img_resume_01.png" class="img" style="max-width:120px;">
        <img src="images/img_resume_on_01.png" class="img-on">
      </li>

      <li class="resumbtn">
          <div class="text-h2">파일 이력서</div>
          <div class="text-subtitle4">강사님이 가지고 있는 이력서 파일을 PDF로 변환 및 업로드 하시면 훈장마을 온라인 지원을 이용해서 학원에 지원할 수 있습니다.</div>
          <button class="ico_arrow" type="button"></button>
        <img src="images/img_resume_02.png" class="img" style="max-width:120px;">
        <img src="images/img_resume_on_02.png" class="img-on">
      </li>

      <li class="resumbtn">
          <div class="text-h2">링크 이력서</div>
          <div class="text-subtitle4">온라인에 올려놓은 개인 프로필, 블로그 및 파일등록 링크(URL)를 입력하면 이력서가 완성되고 훈장마을 온라인 지원을 이용해서 학원에 지원할 수 있습니다.</div>
          <button class="ico_arrow" type="button"></button>
        <img src="images/img_resume_03.png" class="img" style="max-width:120px;">
        <img src="images/img_resume_on_03.png" class="img-on">
      </li>
    </ul>
    <!-- // -->


  </div>

</template>

<script setup></script>

<style lang="scss" scoped></style>
