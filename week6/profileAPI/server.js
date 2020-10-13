const express = require('express'); // express 모듈 불러오기
const morgan = require('morgan'); // morgan 모듈 불러오기

// -----------------------------------------------------------
// 인터프린터 방식 언어 (python, ruby, js) <==> 컴파일러 방식 언어 (C, C++, Java, Kotlin)
// 생산성 높고, 실행 속도가 느림 <==> 생산성이 낮고, 실행 속도가 빠름

const app = express(); // Express -> Backend Application -> 서버

// 어플리케이션 레벨(글로벌) 미들웨어 등록 -> 어느 경로로 와도 여기는 꼭 들렸다가 가라
// express static
app.use('/uploads', express.static('uploads'));
// application middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('common'));

// load routers
// app.use('/', function(){}) // 고차함수 -> 함수형 프로그래밍에서 가능한 것
app.use('/users', require('./routes/user.router'));
app.use('/images', require('./routes/image.router'));
app.use('/admin', require('./routes/admin.router'));

// port binding
app.listen(9000, ()=>{
    console.log('server start');
})