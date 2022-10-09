# Brave’s `Accept-Language` header override

A quick proof-of-concept to explore Brave’s [override of the `Accept-Language` header](https://brave.com/privacy-updates/17-language-fingerprinting/).

## Usage

```
# Start the node.js server and put it in the background
$ node server.js &

# You can use `http-server` or anything else to serve the current directory as a Web server (not `file://`)
$ npm install http-server && http-server .
```

## Result

<img width="1797" alt="" src="https://user-images.githubusercontent.com/11348/194754793-509a48cd-8c33-411a-a640-6ef37089e7fa.png">
