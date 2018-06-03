---
title: FullStack AWS - FEM
date: "2018-06-03"
path: "/fullstack-aws-fem/"
---
# AWS Fullstack deployment FrontEnd Masters

> Steve Kinney

---

- Always create a sub admin user for AWS instead of using "root" user.

Using AWS Mobile Hub for this course

Create Users/ sub admin users in IAM (Identity and Access Management)

- Always delete root access keys and enable 2FA
- Multiple users with according privileges should be set. (Principle of least access)
- Created 2FA using Authy app.

## Creating IAM User

---

- Created a new user **MobileHub-FEM**
- Permission Set
  - User Group permissions (for dev teams/ dev ops teams)
  - Copy permission from one user to another
  - For individual, attach policies directly

  ---

## Terminology

- AWS Mobile Hub
  - Abstraction over Authentication, Authorization, dynamo DB, Cognito, Pinpoint.
  - Marketed as best suited for mobile but good enough for web developers as well.
  - Targets - Swift, Android, React Native, React web

        npm install -g awsmobile-cli

- AWS Amplify
  - Javascript bindings to help with `mobile hub` and also has `aws-amplify-react` which includes HOC helpers
  - Lot of overlap? When `mobile hub` project init, amplify is installed. If it is react, then `aws-amplify-react` is also installed.
  - Amplify can also be considered as a helper for mobile hub

- AWS Appsync
  - announced in nov 17 along with amplify
  - helps with Graphql as a service
  - Built on top of dynamodb, elastic search and lambda functions.
  - Can also be used with Apollo with caching and offline.
  - can be used alone or with mobile hub and amplify though not necessary.

Authentication(Cognito)

Storage(S3)

Serverless Functions (Lambda && API gateway)

Database (DynamoDB)

Hosting(S3 and Cloudfront)

Analytics and Notifications(Pinpoint) - tracks user actions (only available at US East1)

Most datacenters have all the services but sometimes just a subset

## Coding

---

github: 

[stevekinney/grudges](https://github.com/stevekinney/grudges.git)

- lot of backend infra can be committed as code, so tweaks can be done.
- 

    > awsmobile configure (after installing awsmobile-cli)

- use `credentials.csv` file to fill up info. US-east-1 is a safe bet for aws region

    aws mobile init

If confirmation just needs yes for all answers, use `-y` flag. 
eg. npm init -y will create a package.json with default settings

- `awsmobile/backend` is the backend codebase for settings in aws. Do not change anything else
- `awsmobile` will also create a `aws-exports` file in project. Use `aws-amplify` to hook the configuration to react.

after connecting configuration, `awsmobile push`to send code updates to backend. Use `awsmobile features` to modify usage of features, then push again to awsmobile.

Never send any of the aws code/ configruation to github. Add all the files in gitignore

## AWSMobile Features

---

- `awsmobile` will show a list of features we can enable from the cli
- aws authorization has inbuilt authentication with 2fa which is awesome!
- authorization can be enabled thorugh `user-signin` module.
- To enable feature, use `awsmobile user-signin enable —prompt`
- Use —prompt flag to customize settings on awsmobile features. Without the prompt flag will setup default settings
- After all customizations, `awsmobile push` then `awsmobile console` will open an url to checkout the project backend setup. Any changes from the console UI can be updated on the codebase with a `awsmobile pull`

> In Progress
end time: 1:41:1 ( Start with creating a database)