<template>
  <q-page class="q-pa-xl">



      <!--
        01. 텍스트박스
      -->
      <section class="q-mb-xl guideSection">
          <div class="text-h4">TEXT INPUT</div>
          <q-separator class="q-my-md" />

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">① 이력서등록쪽 큰것. (default)</h7>
          <div class="q-gutter-lg">
                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          학교명
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput q-field--float q-field--highlighted q-field--focused">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          활성화 미리보기
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput" readonly>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          비활성 : readonly
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput error--text">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          오류 : .error--text
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>
          </div>
          <br>
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">② 강사서비스 쪽 작은 것 : dense 옵션값 추가.</h7>
          <div class="q-gutter-lg">
                    <q-input outlined v-model="text" label-slot class="basicInput" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          학교명
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput q-field--float q-field--highlighted q-field--focused" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          활성화 미리보기
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput error--text" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          오류 : .error--text
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput error--text q-field--float q-field--highlighted q-field--focused" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          오류 : .error--text
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>
          </div>
          <br>
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">③ 이력서등록쪽 아주큰것 : basicInput_Big 클래스 추가.</h7>
          <div class="q-gutter-lg">
                    <q-input outlined v-model="text" label-slot class="basicInput basicInput_Big" counter maxlength="100">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          이력서 제목을 입력하세요. (본인의 강점을 제목에 요약해 보세요.)
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>
          </div>
          <div class="q-gutter-lg q-my-xs">
                    <q-input outlined v-model="text" label-slot class="basicInput basicInput_Big">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          이력서 링크 (URL)
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-input>
          </div>
          <br>
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">④ 인풋안에 버튼</h7>
          <div class="q-gutter-lg">
                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰 번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="buttonBasic color-grey-3" unelevated label="인증요청" />
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰 번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="buttonBasic color-cyan" unelevated label="인증완료" />
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput" readonly>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <span class="input_unit certified">인증</span>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput" readonly>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <span class="input_unit uncertified">미인증</span>
                      </template>
                    </q-input>

          </div>
          <div class="q-gutter-lg q-my-xs">
                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰 번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="visibility" /></q-btn>
                        <q-btn class="buttonBasic color-grey-3" unelevated label="인증요청" />
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰 번호
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="visibility_off" /></q-btn>
                        <q-btn class="buttonBasic color-grey-3" unelevated label="인증요청" />
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          휴대폰 번호를 입력해 주세요
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="buttonBasic button03 color-grey-3" unelevated label="전송" />
                      </template>
                    </q-input>
          </div>
          <br>
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">⑤ 파일첨부</h7>
          <div class="q-gutter-lg">
                    <q-file outlined v-model="model" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          첨부파일
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="buttonBasic color-grey-3" unelevated label="파일선택" />
                      </template>
                    </q-file>
          </div>

          <br><br><br><br><br><br><br><br><br>
      </section>






      <!--
        02. 셀렉트박스
      -->
      <section class="q-mb-xl guideSection">
          <div class="text-h4">SELECT</div>
          <q-separator class="q-my-md" />

          <div class="q-gutter-lg">
                    <q-select outlined v-model="model" :options="options" label="Outlined" class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          필수
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>

                    <q-select outlined v-model="model" :options="options" class="basicInput" stack-label label="항목명" :display-value="`기본 선택값`">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          활성화 미리보기
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>

                    <q-select outlined v-model="model" :options="options" label="Outlined" class="basicInput error--text">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          오류
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>
          </div>
          <div class="q-gutter-lg q-my-xs">
                    <q-select outlined v-model="model" :options="options" label="Outlined" class="basicInput" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          필수
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>

                    <q-select outlined v-model="model" :options="options" class="basicInput" stack-label label="항목명" :display-value="`기본 선택값`" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          활성화 미리보기
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>

                    <q-select outlined v-model="model" :options="options" label="Outlined" class="basicInput error--text" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          오류
                          <span class="necessary">*</span>
                        </div>
                      </template>
                    </q-select>
          </div>

          <div class="q-gutter-lg q-my-xs">

                    <q-input outlined v-model="text" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          입사년월
                          <span class="necessary">*</span>
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="calendar_month" /></q-btn>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput error--text">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          입사년월
                          <span class="necessary">*</span>
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="calendar_month" /></q-btn>
                      </template>
                    </q-input>

                    <!-- 숫자만 입력가능하도록 type="number"가 들어감 -->
                    <q-input outlined v-model="text" type="number" label-slot class="basicInput">
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          희망급여 (숫자만)
                        </div>
                      </template>
                      <template v-slot:append>
                        <span class="input_unit">만원</span>
                      </template>
                    </q-input>

          </div>
          <div class="q-gutter-lg q-my-xs">

                    <q-input outlined v-model="text" label-slot class="basicInput" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          입사년월
                          <span class="necessary">*</span>
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="calendar_month" /></q-btn>
                      </template>
                    </q-input>

                    <q-input outlined v-model="text" label-slot class="basicInput error--text" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          입사년월
                          <span class="necessary">*</span>
                        </div>
                      </template>
                      <template v-slot:append>
                        <q-btn class="onlyIconbtn"><q-icon name="calendar_month" /></q-btn>
                      </template>
                    </q-input>

                    <!-- 숫자만 입력가능하도록 type="number"가 들어감 -->
                    <q-input outlined v-model="text" type="number" label-slot class="basicInput" dense>
                      <template v-slot:label>
                        <div class="row items-center all-pointer-events">
                          희망급여 (숫자만)
                        </div>
                      </template>
                      <template v-slot:append>
                        <span class="input_unit">만원</span>
                      </template>
                    </q-input>

          </div>

        <br><br><br>
      </section>



      <!--
        03. 버튼
      -->
      <section class="q-mb-xl">
          <div class="text-h4">BUTTON</div>
          <q-separator class="q-my-md" />

          <div class="q-gutter-lg" style="justify-content:flex-start;">
                <q-btn class="buttonBasic color-grey-3" unelevated label="설정하기" />
                <q-btn class="buttonBasic color-cyan"  unelevated label="인증완료" />
                <q-btn class="buttonBasic color-grey-3" unelevated label="버튼명이 길어지면" />
                <q-btn class="buttonBasic button02 color-teal" unelevated label="즉시지원" />
                <q-btn class="onlyIconbtn button02 color-grey-1" icon="cached"></q-btn>
                <q-btn class="buttonBasic button03 color-grey-3" unelevated label="검색" />
                <q-btn class="onlyIconbtn button03 color-grey-1" icon="cached"></q-btn>
                <q-btn class="buttonBasic buttonBig button04 color-grey-3"  unelevated label="임시저장" />
                <q-btn class="buttonBasic buttonBig button05 color-orange" unelevated label="이력서 저장" />
          </div>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                <q-btn flat class="text-subtitle4">이력서보기</q-btn>
                <q-btn flat class="text-subtitle4 q-underline">이력서보기</q-btn>

                <q-btn flat class="morePlusBtn">
                  더보기
                  <q-icon name="add" />
                </q-btn>

                <q-btn class="onlyIconbtn" round icon="delete"></q-btn>
                <q-btn class="onlyIconbtn" round icon="expand_circle_down"></q-btn>
          </div>
          <br>
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">② 클릭시 팝업</h7>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                <q-icon name="question_mark" class="helpPopBtn cursor-pointer">
                  <q-popup-proxy :offset="[0, 2]">
                    <q-banner class="popupBox">
                      You have lost connection to the internet. This app is offline.
                    </q-banner>
                  </q-popup-proxy>
                </q-icon>
          </div>
          <br><br><br><br><br><br><br><br><br>
      </section>





      <!--
        04. checkbox / radio ~
      -->
      <section class="q-mb-xl">
          <div class="text-h4">checkbox / radio / switch</div>
          <q-separator class="q-my-md" />

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">① checkbox</h7>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                    <q-checkbox class="checkbox01" v-model="checkbox01" />
                    <q-checkbox class="checkbox02" v-model="checkbox02" checked-icon="task_alt" unchecked-icon="task_alt"/>
          </div>

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">② radio</h7>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                    <q-radio v-model="shape" val="line" label="Line" />
                    <q-radio v-model="shape" val="rectangle" label="Rectangle" />
                    <q-radio v-model="shape" val="ellipse" label="Ellipse" />
                    <q-radio v-model="shape" val="polygon" label="Polygon" />
          </div>

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">③ switch</h7>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                    <q-toggle v-model="value" />
          </div>
          <br><br>

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">④ pagination</h7>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                  <q-pagination v-model="current" max="8" direction-links outline active-color="main" />
          </div><br>
          <div class="q-gutter-lg" style="justify-content:flex-start;">
                  <q-pagination v-model="current2" max="8" icon-first="keyboard_double_arrow_left"
                    icon-last="keyboard_double_arrow_right" boundary-links direction-links outline active-color="main" />
          </div>
          <br><br><br><br><br><br><br><br><br>
      </section>








      <!--
        05. 테이블
      -->
      <section class="q-mb-xl">
          <div class="text-h4">테이블</div>
          <q-separator class="q-my-md" />

          <h7 class="text-h7" style="margin-bottom:10px; display:block;">① Q-markup-table : 기본</h7>

          <q-markup-table class="tbl-basic-1 tbl-text tbl-check" separator="horizontal" flat square>
              <thead>
                  <tr>
                      <th>
                          <q-checkbox class="checkbox01" v-model="checkbox01" />
                      </th>
                      <th>근무지</th>
                      <th>학원명 / 공고제목 / 과목 / 스크랩일</th>
                      <th>급여</th>
                      <th>지원자격</th>
                      <th>마감일 / 등록일</th>
                      <th>접수방법</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <q-checkbox class="checkbox01" v-model="checkbox01" />
                      </td>
                      <td>
                          <span class="text-subtitle5">경기 오산시</span>
                      </td>
                      <td>
                          <div class="tbl-tit">
                              <p>
                                  <span class="stit text-subtitle2">서울아카데미 수학학원</span>
                                  <q-rating class="like" v-model="model1" max="1" size="25px" icon="favorite_border" icon-selected="favorite" icon-half="favorite" no-dimming />
                              </p>
                              <q-btn class="mtit text-subtitle1" label="강동구 서울아카데미에서 수학 선생님을 모십니다." padding="none" flat unelevated></q-btn>
                              <q-rating class="scrap" v-model="model2" max="1" size="28px" icon="star_border" icon-selected="star" icon-half="star" no-dimming />
                              <dl class="tbl-sub-list-1">
                                  <dt>과목</dt>
                                  <dd>수학</dd>
                                  <dt>스크랩</dt>
                                  <dd>2023.05.11 13:00</dd>
                              </dl>
                          </div>
                      </td>
                      <td>
                          <span class="txt-2">월급</span>
                          <span class="txt-1">200만원~300만원</span>
                      </td>
                      <td>
                          <span class="txt-1">경력무관</span>
                          <span class="txt-2">대학교 (4년)</span>
                      </td>
                      <td>
                          <span class="txt-1">채용시 마감</span>
                          <span class="txt-2">2022-05-12</span>
                      </td>
                      <td><q-btn class="buttonBasic color-teal" label="온라인 지원" unelevated></q-btn></td>
                  </tr>

                  <tr>
                      <td>
                          <q-checkbox class="checkbox01" v-model="checkbox01" />
                      </td>
                      <td>
                          <span class="text-subtitle5">경기 오산시</span>
                      </td>
                      <td>
                          <div class="tbl-tit">
                              <p>
                                  <span class="stit text-subtitle2">서울아카데미 수학학원</span>
                                  <q-rating class="like" v-model="model1" max="1" size="25px" icon="favorite_border" icon-selected="favorite" icon-half="favorite" no-dimming />
                              </p>
                              <q-btn class="mtit text-subtitle1" label="강동구 서울아카데미에서 수학 선생님을 모십니다." padding="none" flat unelevated></q-btn>
                              <q-rating class="scrap" v-model="model2" max="1" size="28px" icon="star_border" icon-selected="star" icon-half="star" no-dimming />
                              <dl class="tbl-sub-list-1">
                                  <dt>과목</dt>
                                  <dd>수학</dd>
                                  <dt>스크랩</dt>
                                  <dd>2023.05.11 13:00</dd>
                              </dl>
                          </div>
                      </td>
                      <td>
                          <span class="txt-2">월급</span>
                          <span class="txt-1">200만원~300만원</span>
                      </td>
                      <td>
                          <span class="txt-1">경력무관</span>
                          <span class="txt-2">대학교 (4년)</span>
                      </td>
                      <td>
                          <span class="txt-1">채용시 마감</span>
                          <span class="txt-2">2022-05-12</span>
                      </td>
                      <td><q-btn class="buttonBasic color-teal" label="온라인 지원" unelevated></q-btn></td>
                  </tr>
              </tbody>
          </q-markup-table>
      </section>

      <section class="q-mb-xl">
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">② Q-markup-table : thead 흰색</h7>

          <q-markup-table class="tbl-basic-1 tbl-text tbl-th-white tbl-no-hover" separator="cell" flat square>
            <thead>
                <tr>
                    <th>재학기간</th>
                    <th>학력(구분)</th>
                    <th>학교명(소재지)</th>
                    <th>전공</th>
                    <th>학점</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span class="text-subtitle3">2007.03 ~ 2011.02</span>
                    </td>
                    <td>
                        <span class="txt-bold-2 text-subtitle3">대학교(4년)</span>
                        <span class="txt-2">졸업예정</span>
                    </td>
                    <td>
                        <span class="txt-bold-2 text-subtitle3">서울디지털대학교</span>
                        <span class="txt-2">(서울)</span>
                    </td>
                    <td>
                        <span class="txt-1 text-subtitle3">전산정보처리</span>
                        <span class="txt-2">(복수전공 : 경영학과)</span>
                    </td>
                    <td>
                        <span class="txt-1 text-subtitle3">3 / 4.5</span>
                    </td>
                </tr>
            </tbody>
          </q-markup-table>
      </section>

      <section class="q-mb-xl">
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">③ Q-markup-table : thead 흰색 + List</h7>

          <div class="tbl-tit-area-2 tbl-text">
            <span class="text-h2">학력사항</span>
            <span class="text-subtitle2">최종학력 - 대학교 <em class="txt-point-1">4년 졸업예정</em></span>
          </div>
          <q-markup-table class="tbl-basic-1 tbl-text tbl-th-white tbl-no-hover" separator="cell" flat square>
            <thead>
              <tr>
                <th>학원명 / 근무기간</th>
                <th>근무내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">
                  <div class="hg-100 text-left">
                    <span class="txt-bold-1 text-subtitle1">훈장마을 구로지점</span>
                    <span class="">2007.05 ~ 재직중</span>
                    <span class="">(1년 3개월)</span>
                  </div>
                </td>
                <td>
                  <dl class="tbl-sub-list-2">
                    <dt>근무형태</dt>
                    <dd>파트, 단기 알바</dd>

                    <dt>과목</dt>
                    <dd>수학</dd>

                    <dt>급여</dt>
                    <dd>연봉 3,100만원</dd>

                    <dt>퇴사사유</dt>
                    <dd>경영악화</dd>

                    <dt>수업역량</dt>
                    <dd>수학</dd>
                  </dl>
                </td>
              </tr>
            <tr>
                <td>

                </td>
              </tr>
            </tbody>
          </q-markup-table>
      </section>

      <section class="q-mb-xl">
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">④ Q-markup-table : List Type</h7>

          <div class="tbl-tit-area-1 tbl-text text-subtitle2">
            <span class="txt-2">내 이력서 열람학원 - </span>
            <span class="txt-1">총 3건</span>
          </div>
          <q-list class="tbl-list-1 tbl-text">
              <q-item>
                  <q-item-section avatar>
                      <q-checkbox class="checkbox01" v-model="checkbox01" />
                  </q-item-section>

                  <q-item-section>
                      <q-item-label lines="1" class="tbl-txt">
                          <span class="txt-bold-1 text-subtitle1">서울아카데미 수학학원</span>
                          <span class="txt-1">경기도 김포시 김포한강2로</span>
                          <dl class="tbl-sub-list-1">
                              <dt>Tel</dt>
                              <dd>02-123-4567</dd>
                          </dl>
                      </q-item-label>
                  </q-item-section>

                  <q-item-section side class="text-center">
                      <span class="txt-1">채용 진행중</span>
                      <span class="txt-2"><q-btn flat class="q-underline no-padding">5</q-btn>&nbsp;건</span>
                  </q-item-section>

                  <q-item-section side class="text-center">
                      <span class="txt-point-1 text-subtitle4">연락처 열람</span>
                      <span class="txt-2 text-subtitle5">2022.11.18</span>
                  </q-item-section>
              </q-item>

              <q-item>
                  <q-item-section avatar>
                      <q-checkbox class="checkbox01" v-model="checkbox01" />
                  </q-item-section>

                  <q-item-section>
                      <q-item-label lines="1" class="tbl-txt">
                          <span class="txt-bold-1 text-subtitle1">서울아카데미 수학학원</span>
                          <span class="txt-1">경기도 김포시 김포한강2로</span>
                          <dl class="tbl-sub-list-1">
                              <dt>Tel</dt>
                              <dd>02-123-4567</dd>
                          </dl>
                      </q-item-label>
                  </q-item-section>

                  <q-item-section side class="text-center">
                  </q-item-section>

                  <q-item-section side class="text-center">
                      <span class="txt-point-1 text-subtitle4">이력서 스크랩</span>
                      <span class="txt-2 text-subtitle5">2022.11.18</span>
                  </q-item-section>
              </q-item>

              <q-item>
                  <q-item-section avatar>
                      <q-checkbox class="checkbox01" v-model="checkbox01" />
                  </q-item-section>

                  <q-item-section>
                      <q-item-label lines="1" class="tbl-txt">
                          <span class="txt-bold-1 text-subtitle1">서울아카데미 수학학원</span>
                          <span class="txt-1">서울시 양천구 목동동로 387 (목동, 광장2종합상가) 2층, 5층</span>
                          <dl class="tbl-sub-list-1">
                              <dt>Tel</dt>
                              <dd>02-123-4567</dd>
                          </dl>
                      </q-item-label>
                  </q-item-section>

                  <q-item-section side class="text-center">
                      <span class="txt-1">채용 진행중</span>
                      <span class="txt-2"><q-btn flat class="q-underline no-padding">5</q-btn>&nbsp;건</span>
                  </q-item-section>

                  <q-item-section side class="text-center">
                      <span class="txt-point-1 text-subtitle4">-</span>
                      <span class="txt-2 text-subtitle5">2022.11.18</span>
                  </q-item-section>
              </q-item>
          </q-list>
      </section>

      <section class="q-mb-xl">
          <h7 class="text-h7" style="margin-bottom:10px; display:block;">⑤ Q-markup-table : File</h7>

          <div class="tbl-tit-area-1 tbl-text text-subtitle2">
            <span class="txt-2">첨부된 파일 - </span>
            <span class="txt-1">총 7건</span>
          </div>

          <q-markup-table class="tbl-basic-1 tbl-th-none tbl-file tbl-text" separator="horizontal" flat square>
            <thead>
              <tr>
                <th>파일구분</th>
                <th>파일명</th>
                <th>파일용량</th>
                <th>등록일</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_excel.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">포트폴리오</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="강남엄마_제휴종료에 따른 사이트 수정 포트폴리오.xlsx" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_samsung.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">포트폴리오</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="http://www.naver.com" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">-</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_zip.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">자격증</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="자격증파일_홍길동.zip" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_acrobat.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">기획안</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="자기소개서.zip" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_hancom.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">경력기술서</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="경력기술서_홍길동_20221212.hwp" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_file_acrobat.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">경력기술서</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="경력기술서_홍길동_20221212.pdf" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="row wrap justify-start">
                      <q-img class="icon-flie" src="../../images/icon_flie_word.png" :ratio="1" />
                      <span class="in-block txt-1 text-subtitle4">추천서</span>
                    </div>
                  </td>
                  <td>
                      <div class="row wrap justify-start">
                        <q-btn flat no-caps class="q-underline text-subtitle3" label="서울대학교_컴퓨터공학박사_홍길동님_20221212.doc" />
                      </div>
                  </td>
                  <td><span class="txt-2 text-subtitle5">11.1KB</span></td>
                  <td><span class="txt-3 text-subtitle5">2022.05.06</span></td>
                  <td>
                      <q-btn round unelevated class="btn-del" icon="close" />
                  </td>
                </tr>
            </tbody>
          </q-markup-table>
      </section>





      <!--
        06. 슬라이더
      -->
      <section class="q-mb-xl">
        <div class="text-h4">slide group</div>
        <q-separator class="q-my-md" />

        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable
                    animated control-color="grey" padding arrows height="300px">
                    <q-carousel-slide :name="1" class="column no-wrap">
                      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="column no-wrap">
                      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/quasar.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png"></q-img>
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="column no-wrap">
                      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/cat.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/chicken-salad.jpg"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                      </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="4" class="column no-wrap">
                      <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/material.png"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/donuts.png"></q-img>
                        <q-img class="col-4 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                      </div>
                    </q-carousel-slide>
                  </q-carousel>

      </section>






  </q-page>
</template>


<script>

import { ref } from 'vue'
export default {
  setup() {
    const model1 = ref(0)
    const model2 = ref(0)

    return {
      model: ref(null),
      options: [
        '월~금', '월~일', '월~토', '주말(토,일)', '근무요일 무관'
      ],

     val: ref(false),/* checkbox */
      teal: ref(true),
      orange: ref(false),
      blue: ref(false),

      checkbox01: ref(false),/* checkbox01 */
      checkbox02: ref(false),/* checkbox02 */
      shape: ref('line'),/* radio button */
      current: ref(3),/* pagination01 */
      current2: ref(3),/* pagination02 */
      value: ref(true),/* switch */
      slide: ref(1),/* slide group */
      model1,/* rating */
      model2,

      resetModels () {
        model1.value = 0
        model2.value = 0
      }
    }
  }
}

</script>


