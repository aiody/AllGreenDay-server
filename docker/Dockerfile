# 장기 버전 12.18.2
FROM node:lts-slim
LABEL maintainer="aiody329@gmail.com"

# 컨테이너 내부에 작업할 폴더 만들기
RUN mkdir -p /AllGreenDay-server
# 작업할 폴더 설정
WORKDIR /AllGreenDay-server
# 서버 파일 복사 ADD [어플리케이션 파일 위치] [컨테이너 내부의 어플리케이션 파일 위치]
ADD ./ /AllGreenDay-server

# 모듈 설치
RUN npm install

# 서버 실행
CMD node index.js