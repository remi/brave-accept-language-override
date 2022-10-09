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

<table>
<tr>
	<td>Safari
	<td>Firefox
<tr>
	<td>Chrome
	<td>Brave
</table>

<img width="1840" alt="" src="https://user-images.githubusercontent.com/11348/194751591-f67693a3-ee1b-4d68-9ca8-7115e8ecce40.png">
