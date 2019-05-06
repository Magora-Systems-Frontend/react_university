# React Sample App

## Run the application locally

### Dependencies
- Node v10+
- cloned repository

### Running

```bash
# after cloning the repo:

# install packages
npm i

# compile the project
npm run compile

# run local server
# head over to http://0.0.0.0:8020
npm run dev

# run json-server
# head over to http://0.0.0.0:8021
npm run server

```

Credentials
---------------
Test accounts: https://intranet.magora.team/services/accountStorage/

###For Google Auth:
magoramagorova@gmail.com (FrontendReactTemplate)
- [Project Location](https://console.developers.google.com/apis/dashboard?pli=1&authuser=1&project=frontendreacttemplate&folder=&organizationId=&supportedpurview=project)
- [API Docs](https://developers.google.com/identity/sign-in/web/reference)

###For VK Auth:

Локально ВК работает только с портом 80. Если перебросить localhost:8020 на 80, то всё начинает работать:

1) sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j REDIRECT --to-ports 8000
2) в hosts добавить 127.0.0.1   127.0.0.1:8020
3) доступно на 127.0.0.1

credentials: 79134564157/gemanaPoPo

