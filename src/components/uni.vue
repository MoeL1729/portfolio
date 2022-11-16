<template>
<div class="uni">
  <div style="font-family: 'HANNAAIR'; ">
    <template>
      <!--
      <b-navbar toggleable="lg" type="dark" variant="#00FF0000" id="header1">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="index.html">MoeL's Portfolio</b-nav-item>
          </b-navbar-nav>
 네비게이션 빼버려!!
        </b-collapse>

      </b-navbar>
      -->
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <!--<b-button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</b-button>-->
          <div style="align: Center; text-align: left; margin-left: 10px; margin-top: 70px;">
            <b-container class="bv-example-row">
              <b-row style="margin-bottom: 20px;">
                <b-col>
                  <div>
                    <h1 style="margin-bottom: 20px; text-align: left;">최선을 다하는 </h1>
                    <h1 style="margin-bottom: 20px; text-align: left;">개발자 양승범 입니다.</h1>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <div>
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">2019-2022 PORTFOLIO</h4>
                  </div>
                </b-col>
              </b-row>
              <b-row>
                <div style="margin-top: 400px;">
                  <b-col>
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">CONTECTS</h4>
                    <h4 :style="{ color: page1aboutColor, fontSize: page2Colfontsize + 'px' }">010-9962-1729</h4>
                  </b-col>
                  <b-col>
                    <b-img src="../assets/p_signs.png"></b-img>
                  </b-col>
                </div>
              </b-row>
            </b-container>
          </div>
        </div>
        <div class="section">
          <!--<b-button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</b-button>-->
          <!--인적 사항-->
          <div style=" text-align: left; margin-left: 10px; margin-top: 100px;">
            <b-container class="bv-example-row">
              <b-row style="margin-bottom: 5px;">
                <b-col cols="2" style="margin-right: 60px;">
                  <!--<b-img src="images1[0].profileUrl" fluid alt="Responsive image"></b-img>-->
                  <b-img src="https://ifh.cc/g/TZ1GMH.jpg" rounded fluid alt="Responsive image" rounded="circle"></b-img>
                  <b-row>
                    <p style="fontSize: 13px; margin-top: 10px;">최고를 위해 항상 최선을 다하는 사람<br>최선을 위해 항상 최고가 되려는 사람</p>
                    <p style=" fontSize: 30px;">양승범 입니다</p>
                    <div style="align: left">
                    <hr color="black" size="100px" width="40px">
                    </div>
                    <p>긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글긴글</p>
                  </b-row>
                </b-col>

                <b-col cols="4">
                  <div>
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">ABOUT_ME</h4>
                    <div style="margin-top: 20px;" :style="{fontSize: page2aboutfontsize + 'px' }">
                      <p>양승범</p>
                      <p> 010 - 9962 - 1729</p>
                      <p>1993. 10. 29.</p>
                      <p>경기도 안양시 거주</p>
                      <p>didtmdqja47@naver.com</p>
                    </div>
                  </div>
                  <div style="margin-top: 100px;">
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">EDUCATION</h4>
                    <div style="margin-top: 20px;" :style="{fontSize: page2aboutfontsize + 'px' }">
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                    </div>
                  </div>
                </b-col>

                <b-col cols="4">
                  <div>
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">CAREER</h4>
                    <div style="margin-top: 20px;" :style="{color: page2aboutColor , fontSize: page2aboutfontsize + 'px' }">
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                      <p>긴글이 필요하니깐 아무거나 적을께요 에이아라이아디아이어차!</p>
                    </div>
                  </div>
                  <div style="margin-top: 100px;">
                    <h4 :style="{ color: page2ColColor, fontSize: page2Colfontsize + 'px' }">SKILL</h4>
                    <div style="margin-top: 20px;" :style="{fontSize: page2aboutfontsize + 'px' }">
                      <p>양승범</p>
                      <p> 010 - 9962 - 1729</p>
                      <p>1993. 10. 29.</p>
                      <p>경기도 안양시 거주</p>
                      <p>didtmdqja47@naver.com</p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>

        </div>

      </full-page>
    </template>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1'
      },
      page2Colfontsize: '18',
      page2aboutfontsize: '12',
      page2ColColor: '#406882',
      page2aboutColor: '#000000',
      page1aboutColor: '#FFFFFF',
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#000000', '#FFFFFF', '#6998AB', '#B1D0E0', '#3A6351'],
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        navigationTooltips: ['Main', 'AboutMe', 'Viewon Company', 'Aprogen Compnay', 'Contact'],
        css3: true
      },
      images1: [{
        profileUrl: "https://ifh.cc/g/TZ1GMH.jpg"
      }],
      prohsList: [{
          id: 1,
          modal: 'modal-1',
          name: 'SizeTheDay',
          contents: '어플의 이용자의 일정을 관리해주거나, 기호에 따른 뉴스, 문화, 예술 등의 정보를 하나의 어플로 확인 할 수 있는 개인 매니져먼트 어플리케이션을 만들었습니다.',
          lang: 'Mobile(Java/Android/Php)',
          skills: '크롤링 / Restful_API',
          cardImage: 'https://c.pxhere.com/photos/9f/05/phone_mobility_cellular_android_motox_motorola_online_survey_mobile_search-1239035.jpg!d'
        },
        {
          id: 2,
          modal: 'modal-2',
          name: '중고거래사이트',
          contents: '사용자의 개인마켓을 구성할 수 있도록 플랫폼을 제공해주는 웹사이트로, 사용자들끼리 물건을 분류하여 판매하거나, 구매 할 수 있도록하였습니다. ',
          lang: 'Web(Jsp/HTML/CSS/MySQL)',
          skills: 'Bootstrap',
          cardImage: 'https://c.pxhere.com/images/0f/25/47536a80874e0c62d15a9e338d6a-1447001.jpg!d'
        },
        {
          id: 3,
          modal: 'modal-3',
          name: 'OpenGL영상처리',
          contents: 'C 언어와 OpenGL을 이용하여 얻어진 이미지의 색상 값을 받아 \n 다양한 필터를 구현하는 프로그램을 만들었습니다. ',
          lang: 'OpenGL(C)',
          skills: 'Digital Image Processing',
          cardImage: 'https://c.pxhere.com/photos/38/49/slide_filmstrip_dreams_presentation_photo_film_slide_film_image_film-994125.jpg!d'
        },
        {
          id: 4,
          modal: 'modal-4',
          name: 'ETC',
          contents: '어플의 이용자의 일정을 관리해주거나, 기호에 따른 뉴스, 문화, 예술 등의 정보를 하나의 어플로 확인 할 수 있는 개인 매니져먼트 어플리케이션을 만들었습니다.',
          lang: 'Mobile(Java/Android/Php)',
          skills: '기술 : 크롤링 / Restful_API',
          cardImage: 'https://c.pxhere.com/images/0f/25/47536a80874e0c62d15a9e338d6a-1447001.jpg!d'
        },

      ],
      proviewList: [{
          id: 1,
          modal: 'modal-5',
          name: 'Chart Program',
          contents: 'vue.js 를 이용하여, Vision Machine 에서 나온 데이터를 웹페이지로 시각화 하였습니다. 데이터는 차트로 표현하였으며 chart.js를 이용하였습니다.',
          lang: 'Web(Vue.js/Chart.js/HTML/JavScript)',
          skills: 'Chart.js / Bootstrap / Vue.js',
          cardImage: 'https://c.pxhere.com/photos/8d/58/computer_summary_chart_business_seo_growth-730628.jpg!d'
        },
        {
          id: 2,
          modal: 'modal-6',
          name: '반도체 검사기',
          contents: 'Labview 라는 프로그램과 Camera와 조명을 이용하여,반도체 내 Chamber와 heater의 거리 간격을 확인하는 프로그램 및 장비를 제작 하였습니다.',
          lang: 'Software(Labview)',
          skills: 'Machine Vision algorithm',
          cardImage: 'https://c.pxhere.com/photos/67/f5/macro_electronics_printed_circuit_boards_integrated_circuits_circuit_board_computer_engineering-796860.jpg!d'
        },
        {
          id: 3,
          modal: 'modal-7',
          name: '2차전지 Vision Program ',
          contents: 'L사 미국, 폴란드, 중국에서 프로젝트를 진행하였으며, 광학계를 이용하여 얻은 데이터를 처리해주는 Software Program을 개발하였습니다.',
          lang: 'Software(Labview)',
          skills: 'Machine Vision algorithm',
          cardImage: 'https://c.pxhere.com/photos/b0/5e/sign_signs_symbol_danger_safty_risk_car_battery-722865.jpg!d'
        }
      ],
      proapList: [{
          id: 1,
          modal: 'modal-9',
          name: '자산관리 ERP Program',
          contents: '자사 내 ERP 데이터를 안드로이드 모바일로 확인 하며, QR코드를 생성하거나, 블루투스 프린터와 연결하여 QR코드를 인쇄 하는 어플리케이션을 개발하였습니다.',
          lang: 'Mobile(Android/Java)',
          skills: 'Blutooth Pairing / Android / Restful_API',
          cardImage: 'https://c.pxhere.com/photos/0c/1e/bag_pen_business_creative_pencil_pocket_corporate_management-552854.jpg!d'
        },
        {
          id: 2,
          modal: 'modal-10',
          name: '서버 통신 확인 Program',
          contents: '소켓의 통신을 주고 받음으로, 서버가 정상적으로 작동하는 지 백그라운드에서 확인 할 수 있는 프로그램을 개발하였습니다.',
          lang: 'Mobile(Android/Java)',
          skills: 'Socket 통신 / 백그라운드서비스',
          cardImage: 'https://c.pxhere.com/photos/6f/5b/technology_servers_server-546101.jpg!d'
        },
        {
          id: 3,
          modal: 'modal-11',
          name: 'DLP/DRM/AD',
          contents: 'Active Directory, 문서 중앙화 프로그램으로 800명 인원의 전 계열사 직원의 PC를 관리하였습니다.',
          lang: '-',
          skills: 'Active Directory',
          cardImage: 'https://c.pxhere.com/photos/bb/c9/mark_marker_hand_leave_production_planning_control_organizational_structure_work_process-924910.jpg!d'
        }
      ]

    }
  },
  created() {},
  watch: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
@font-face {
  font-family: 'HANNAPRO';
  src: url('../font/BMHANNAPro.ttf')
}

@font-face {
  font-family: 'HANNAAIR';
  src: url('../font/BMHANNAAir_ttf.ttf')
}

@font-face {
  font-family: 'HANNA11';
  src: url('../font/BMHANNA_11yrs_ttf.ttf')
}
</style>
<style scoped>
h1 {
  align: left;
  font-weight: bolder;
  color: white;
}

,
h2 {
  align: left;
  font-weight: bold;
  color: white;
}

,
h3 {
  font-weight: bold;
  color: black;
}
</style>
