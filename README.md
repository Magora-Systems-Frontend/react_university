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

###For Facebook Auth:
testmagora@gmail.com (FrontendReactTemplate)
- [Project Location](https://developers.facebook.com/apps/2284406111882705/dashboard/)
- [API Docs](https://developers.facebook.com/docs/javascript/)
###For VK Auth:

Locally VK works only with port 80. If you transfer localhost: 8020 to 80, then everything starts working
:

1) sudo iptables -t nat -I OUTPUT -p tcp -d 127.0.0.1 --dport 80 -j REDIRECT --to-ports 8000
2) in hosts added 127.0.0.1   127.0.0.1:8020
3) start 127.0.0.1

