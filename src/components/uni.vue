<template>
<div class="uni">
  <div>
    <template>
      <b-navbar toggleable="lg" type="dark" variant="#00FF0000" id="header1">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right variant="#00FF0000">
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <!--<b-button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</b-button>-->
          <div style="align: Center; text-align: left; margin-left: 100px;">
            <h1 style="margin-bottom: 20px;">Welcom My PortFolio</h1>
            <h3>Mobile 개발</h3>
            <h3>Web 개발</h3>
            <h3>머신비전/랩뷰 개발</h3>
            <h3>서버보안담당</h3>
            <h3>DRM/DLP/AD</h3>
          </div>
          <div style="margin-top: 300px;">

            <h1>아래로 내려주세요</h1>
            <h1>🔽Plz Scroll Down🔽</h1>
          </div>
        </div>
        <!--대학교-->
        <div class="section">
          <div class="slide">
            <h1>Hanshin</h1>
            <h1>University</h1>
          </div>
          <div class="slide">
            <!--image 규격에 card를 넣고 카드 버튼에 modal달고 그안에 carousel을 추가-->
            <b-container class="p-4 #8e7f7f">
              <b-row>
                <b-col v-for="index in 3" v-bind:key="index">
                  <div>
                    <b-card v-bind:img-src="prohsList[index-1].cardImage" img-alt="Image" img-top bg-variant="dark" text-variant="white" v-bind:title="prohsList[index-1].name" v-bind:sub-title="prohsList[index-1].lang">
                      <b-card-text>
                        {{ prohsList[index-1].contents }}
                      </b-card-text>
                      <b-card-text>
                        {{ prohsList[index-1].skills }}
                      </b-card-text>
                      <div v-if="prohsList[index-1].modal === 'modal-1'">
                        <b-button v-b-modal="'modal-1'">Show Modal</b-button>
                        <b-modal v-bind:id="prohsList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="prohsList[index-1].modal === 'modal-2'">
                        <b-button v-b-modal="'modal-2'">Show Modal</b-button>
                        <b-modal v-bind:id="prohsList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="prohsList[index-1].modal === 'modal-3'">
                        <b-button v-b-modal="'modal-3'">Show Modal</b-button>
                        <b-modal v-bind:id="prohsList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-else>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <!--
          <div class="slide">

            <b-container fluid="lg" style="height: 100%; margin-top: 10%">
              <b-row align-v="stretch">
                <h1>Project</h1>
              </b-row>
              <b-row align-v="stretch" style="margin-top: 10px;">
                <b-col sm>
                  <div style="align: left; text-align: left; margin-left: 100px;">
                    <h1 style="margin-bottom: 20px;">Sizetheday</h1>
                    <h4>Language</h4>
                    <h5>Android / Java</h5>
                    <h4>Skill</h4>
                    <h5>크롤링 / Restful_API</h5>
                  </div>
                </b-col>
                <b-col sm>ddddd</b-col>
                <b-col sm>One of three columns</b-col>
              </b-row>
            </b-container>

          </div>
        -->
        </div>
        <!--대학교-->
        <!--뷰온-->
        <div class="section">
          <div class="slide">
            <h1>View-on</h1>
            <h1>Company</h1>
          </div>
          <div class="slide">
            <!--image 규격에 card를 넣고 카드 버튼에 modal달고 그안에 carousel을 추가-->
            <b-container class="p-4 #8e7f7f">
              <b-row>
                <b-col v-for="index in 3" v-bind:key="index">
                  <div>
                    <b-card v-bind:img-src="proviewList[index-1].cardImage" img-alt="Image" img-top bg-variant="dark" text-variant="white" v-bind:title="proviewList[index-1].name" v-bind:sub-title="proviewList[index-1].lang">
                      <b-card-text>
                        {{ proviewList[index-1].contents }}
                      </b-card-text>
                      <b-card-text>
                        {{ proviewList[index-1].skills }}
                      </b-card-text>
                      <div v-if="proviewList[index-1].modal === 'modal-5'">
                        <b-button v-b-modal="'modal-5'">Show Modal</b-button>
                        <b-modal v-bind:id="proviewList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="proviewList[index-1].modal === 'modal-6'">
                        <b-button v-b-modal="'modal-6'">Show Modal</b-button>
                        <b-modal v-bind:id="proviewList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="proviewList[index-1].modal === 'modal-7'">
                        <b-button v-b-modal="'modal-7'">Show Modal</b-button>
                        <b-modal v-bind:id="proviewList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-else>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <!--뷰온-->
        <!--에이프로-->
        <div class="section">
          <div class="slide">
            <h1>Aprogen Pharm</h1>
            <h1>Company</h1>
          </div>
          <div class="slide">
            <!--image 규격에 card를 넣고 카드 버튼에 modal달고 그안에 carousel을 추가-->
            <b-container class="p-4 #8e7f7f">
              <b-row>
                <b-col v-for="index in 3" v-bind:key="index">
                  <div>
                    <b-card v-bind:img-src="proapList[index-1].cardImage" img-alt="Image" img-top bg-variant="dark" text-variant="white" v-bind:title="proapList[index-1].name" v-bind:sub-title="proapList[index-1].lang">
                      <b-card-text>
                        {{ proapList[index-1].contents }}
                      </b-card-text>
                      <b-card-text>
                        {{ proapList[index-1].skills }}
                      </b-card-text>
                      <div v-if="proapList[index-1].modal === 'modal-9'">
                        <b-button v-b-modal="'modal-9'">Show Modal</b-button>
                        <b-modal v-bind:id="proapList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="proapList[index-1].modal === 'modal-10'">
                        <b-button v-b-modal="'modal-10'">Show Modal</b-button>
                        <b-modal v-bind:id="proapList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-if="proapList[index-1].modal === 'modal-11'">
                        <b-button v-b-modal="'modal-11'">Show Modal</b-button>
                        <b-modal v-bind:id="proapList[index-1].modal" size="xl" title="BootstrapVue">
                          <p class="my-4">
                            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="2024" img-height="580">
                              <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                            </b-carousel>
                          </p>
                        </b-modal>
                      </div>
                      <div v-else>
                      </div>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
        <div class="section">
          <b-button variant="link" router-link to="/" style="color: white; font-weight: bolder;">Contact</b-button>
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
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#393E46', '#FFD369', '#E6D5b8', '#3A6351'],
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        navigationTooltips: ['main', 'University', 'Viewon Company', 'Aprogen Compnay', 'Contact'],
        css3: true
      },
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
          contents: 'L사 미국, 폴란드, 중국에서 프로젝트를 진행하였으며,Machine Vision를 통해 Software 내 데이터를 주고 받는 Program을 개발하였습니다.',
          lang: 'Software(Labview)',
          skills: 'Machine Vision algorithm',
          cardImage: 'https://c.pxhere.com/photos/b0/5e/sign_signs_symbol_danger_safty_risk_car_battery-722865.jpg!d'
        }
      ],
      proapList: [{
          id: 1,
          modal: 'modal-9',
          name: '자산관리 ERP Program',
          contents: 'vue.js 를 이용하여, Vision Machine 에서 나온 데이터를 웹페이지로 시각화 하였습니다. 데이터는 차트로 표현하였으며 chart.js를 이용하였습니다.',
          lang: 'Mobile()',
          skills: 'Chart.js / Bootstrap / Vue.js',
          cardImage: 'https://c.pxhere.com/photos/8d/58/computer_summary_chart_business_seo_growth-730628.jpg!d'
        },
        {
          id: 2,
          modal: 'modal-10',
          name: '반도체 검사기',
          contents: 'Labview 라는 프로그램과 Camera와 조명을 이용하여,반도체 내 Chamber와 heater의 거리 간격을 확인하는 프로그램 및 장비를 제작 하였습니다.',
          lang: 'Software(Labview)',
          skills: 'Machine Vision algorithm',
          cardImage: 'https://c.pxhere.com/photos/67/f5/macro_electronics_printed_circuit_boards_integrated_circuits_circuit_board_computer_engineering-796860.jpg!d'
        },
        {
          id: 3,
          modal: 'modal-11',
          name: '2차전지 Vision Program ',
          contents: 'L사 미국, 폴란드, 중국에서 프로젝트를 진행하였으며,Machine Vision를 통해 Software 내 데이터를 주고 받는 Program을 개발하였습니다.',
          lang: 'Software(Labview)',
          skills: 'Machine Vision algorithm',
          cardImage: 'https://c.pxhere.com/photos/b0/5e/sign_signs_symbol_danger_safty_risk_car_battery-722865.jpg!d'
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
  color: black;
}

,
h3 {
  font-weight: bold;
  color: white;
}
</style>
