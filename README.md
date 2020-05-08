# 안전한 수면을 가능케하는, 농인을 위한 위험 알림 진동 서비스

  안녕하세요, 저희는 조리김 팀입니다.

  그 어느 때보다 편안해야 하는 밤, 잠든 농인이 어떤 위기에 처할 수 있는지 생각해보셨나요?<br>
  저희는 그런 위기를 해소할 수 있도록 돕는 <b>'위기에서 나오는 바이브(Vibration)'</b>를 기획했습니다.



## 프로젝트 추진 배경
  
  * '농인'이란 '듣는 것보다 보는 것에 더 집중하는 존재'를 표현하는 문화적 개념입니다.
  
  <pre><code>  농인 A씨는 육아 하는 데 어려움이 많습니다. 잠을 잘 수 없기 때문입니다.
  오늘도 아기가 우는 지 확인하기 위해서 뜬 눈으로 밤을 지새웠습니다.
  그것이 아기의 반응을 확인하는 유일한 방법이었기 때문입니다.</code></pre>
  
  <pre><code>  농인 B씨는 지난 2018년에 일어난 포항 지진에서 알림 소리를 듣지 못해 재난 대피에서 소외되었습니다.
  TV에서 방송을 하는 데, 수화 통역도 제공되지 않는 등 대피 과정에서 농인들에 대한 배려가 전혀 없었기 때문입니다.
  그 후부터 그는 창밖을 자주 확인하는 트라우마가 생겼습니다.</code></pre>
  (참고 영상 : https://youtu.be/KOu6i0Fmc9Q)


## 어떻게 푸는가?

  컴퓨터는 지속적으로 아기 울음소리와 사이렌 소리를 학습합니다. 구글에 'baby cry sound dataset' 등을 검색하면 나오는 풍부한 자원을 활용합니다. 

  음성 센서(LM393 등)를 이용해서 소리를 수집한 후 POST해서 서버에 데이터를 전송합니다. 형식은 JSON 입니다. 서버는 Node JS로 프로그래밍 되어 있고, POST 신호를 받아서 MySql에 데이터를 저장합니다. 

  서버는 수집된 데이터 흐름을 파악하다가 특정 구간의 음성 데이터가 '아기 울음소리' 및 '사이렌 소리'와 유사하다면 침대에 부착된 진동 센서 모듈에 신호를 보내서 진동하게 합니다. 잠을 자던 사람은 이 진동 덕분에 잠에서 깨어나서 위기 상황에 대처할 수 있습니다. 

  
## 예상 시스템 구성도
  
  * 소리 센서 및 진동모터 모듈 : 소리 감지 센서 및 진동 출력 부품을 사용하여 키트 제작
  * AMAZON EC2 : 아마존에서 제공하는 클라우드 서버 호스팅 서비스 사용
  * Node.js : 서버 구축
  * MySQL : 데이터베이스 관리 시스템(DBMS)으로 사용
  * Keras : 파이썬을 사용하여 ML model 생성하여 결과 예측에 사용

 
## 기대성과
  
  대한민국 내 청각장애인은 34만명이 존재하고, 65세 이상 노인 3명 중 1명이 청각 상실 또는 난청과 같은 청각 장애를 갖고 있습니다. 세계보건기구(WHO)의 발표에 따르면 세계적으로 6%의 인구(약 4억 6천만 명)가 청각상실 및 난청 등 청각 장애를 가지고 있습니다.

  ### 효과

  #### 1. 농인의 삶의 질을 개선시킨다.
  * 수면은 그 다음 날의 컨디션을 결정합니다. 아기가 언제 울 지 몰라서 뜬 눈으로 밤을 지새우거나, 어떤 사고가 일어날까봐 불안한 마음에 잠들지 못한다면 그 다음 날의 컨디션 역시 좋지 않습니다. 저희 제품은 농인이 마음놓고 잠들 수 있도록 함으로써 삶의 질을 개선시킵니다.
  #### 2. 농인이 위험에 대처할 수 있다.
  * 우리 사회의 많은 Warning은 '알람'으로 이루어집니다. 자명종, 사이렌, 문 두들기는 소리, 사람들의 외침 등 소리로 경고를 합니다. 농인은 그런 경고를 인지하기가 쉽지않고, 더군다나 수면 중에는 다른 감각도 잠들기 때문에 주변 상황을 더 알기 힘듭니다. 저희의 제품은 실제 위험이 닥쳤을 때 농인이 그 위험에 잘 대처할 수 있도록 도울 것입니다.

  **'위기에서 나오는 바이브(Vibration)'는 사회적 약자인 농인이 겪는, 보이지 않는 차별을 경감시킵니다.'**
  
## Teams

  <img src="./Member/Kim_Jaewon.png" width="245" >

  * 김재원 : 팀장, Server, DataBase
  
  <img src="./Member/Che_Byeori.jpg" width="300" >

  * 채벼리 : 기획, Commiter, Arduino
  
  <img src="./Member/Jo_Minho.png" width ="250">

  * 조민호 : Machine Learning Modeling
  


## 개발환경

  <b>Github</b>, <b>Slack</b>, 상황에 따른 <b>Notion</b> 사용 예정<br>
  요구사항 변경 요청에 대응할 수 있도록 github 중심으로 하는 <b>애자일 개발 방식</b> 사용

  
## 프로젝트 수행 계획

  * 4월 2~4주차 : 프로젝트 주제 선정 회의, 기술 전략 및 구현 계획 등 시나리오, 기술에 맞는 보드 및 센서 선정, 기획 발표
    - 4월 17일 : 업무 분담 및 물품 선정 완료
  * 5월 1~4주차 : 서버 구축 및 연동, 키트 설계, 머신러닝을 위한 데이터베이스 시스템 구축과 학습 모델 생성, 정확도 향상을 위한 알고리즘 조정
  * 5월 5주차 ~ 6월 1주차 : 하드웨어 작동테스트, 최종 시뮬레이션을 통한 성능 확인 및 오류 수정, 제작 발표 준비 및 보고서 작성
  * 6월 8일 : Demo day

## FlowChart

 <img src="./Member/flowchart.png" width="668">
  Icons made by Pixel perfect, Eucalyp, Samshicons, Payungkead from www.flaticon.com 
 
## Mascort

 <img src="./Member/mascort.JPG" width="300">
