FROM node:alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . ./

ENV MONGO_URI=mongodb+srv://akankshaBurnwal:akankshaBurnwal@zomato.45vyy.mongodb.net/Zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=1033122554009-kg8d79b9696ggre475o5k5gopnrl4933.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=QogwtI0CKC2iX3E-MoE4rHia
ENV AWS_S3_ACCESS_KEY=AKIA23RYJH6FDYXECTAS
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN__API__KEY=73d8efac3a88eaa3e50e0c9705462ea2-30b9cd6d-43417211
ENV MAILGUN__DOMAIN=sandbox3882f4a736c8412da231e5ec1d8ea19a.mailgun.org
ENV RZR_PAY_ID=rzp_test_EOrwHG2JAqgG4Q
ENV RZR_PAY_SECRET=Je40KvTjKzCrWBZ7eIU6rsLr
ENV PORT=4000

CMD ["npm", "run", "start"]