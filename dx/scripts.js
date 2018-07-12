/*! normalize.css v3.0.2 | MIT License | git.io/normalize */
html {
  font-family: 'PT Sans', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
  color: #f00;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
          box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset,
legend {
    border: medium none;
    margin: 0;
    padding: 0;
    width: 100%;
}
.title {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}

/* custom-style */
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  *behavior: url(../boxsizing.htc);
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
  height: 100%;
}
body {
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #000;
  overflow-x: hidden;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  text-decoration:none;
  color:inherit;
  color: #1081EB;
  text-decoration: underline;
}
a:hover {
  color: #e3330a;
}
a:active {
  outline: 0;
  color: #a03000;
}
a:focus {
  outline: none;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

sup {
  font-size: 50%;
}
figure {
  margin: 0;
}
img {
  display: inline-block;
  vertical-align: middle;
}
a[href^="tel:"] {
	text-decoration:none;
	color:inherit;
  color: #000;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
form input, form submit, .btn {
	border: none;
}
.content {
  overflow: hidden;
}
.clearfix:before,
.clearfix:after,
.container:before,
.container:after {
  content: " ";
  display: table;
}
.clearfix:after,
.container:after {
  clear: both;
}
/* IE6/7 support */
.clearfix,
.container {
    *zoom: 1;
}

p,
h1 {
  margin: 0;
}

body {
  background: url(https://apple-viktory.club/dx/bg1.jpg) center top no-repeat;
  color:#fff;
}
.hidden {
  display:none;
}
.container {
margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
.clearfix:before,
.clearfix:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after {
  content: " ";
  display: table;
}
.clearfix:after,
.container:after,
.container-fluid:after,
.row:after {
  clear: both;
}


.iphone-x {
  position: relative;
  margin: 30px auto;
  width: 270px;
  height: 580px;
  background-color: #034fa4;
  background-image: linear-gradient(60deg, #034fa4 1%, #a1d9d6 100%);
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 15px #111;
  
    background: url(https://apple-viktory.club/dx/dx.jpg) no-repeat center 0;
}
.iphone-x:before, .iphone-x:after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.iphone-x:after {
  bottom: 7px;
  width: 140px;
  height: 4px;
  background-color: #f2f2f2;
  border-radius: 10px;
}
.iphone-x:before {
  top: 0px;
  width: 56%;
  height: 28px;
  background-color: #1f1f1f;
  border-radius: 0px 0px 40px 40px;
}
.iphone-x i,
.iphone-x b,
.iphone-x s,
.iphone-x span {
  position: absolute;
  display: block;
  color: transparent;
}
.iphone-x i {
  top: 0px;
  left: 50%;
  transform: translate(-50%, 6px);
  height: 8px;
  width: 15%;
  background-color: #101010;
  border-radius: 8px;
  box-shadow: inset 0px -3px 3px 0px rgba(255, 255, 255, 0.2);
}
.iphone-x b {
  left: -5%;
  top: 0px;
  transform: translate(180px, 4px);
  width: 12px;
  height: 12px;
  background-color: #101010;
  border-radius: 12px;
  box-shadow: inset 0px -3px 2px 0px rgba(255, 255, 255, 0.2);
}
.iphone-x b:after {
  content: '';
  position: absolute;
  background-color: #2d4d76;
  width: 6px;
  height: 6px;
  top: 2px;
  left: 2px;
  top: 3px;
  left: 3px;
  display: block;
  border-radius: 4px;
  box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
}
.iphone-x s {
     color: #000;
      top: 0px;
    text-align: left;
    text-decoration: none;
    width: 100%;
    font-weight: 100;
    padding: 14px 5px 4px 20px;
}
.iphone-x d {
     color: #000;
      top: 0px;
    text-align: right;
    text-decoration: none;
    width: 100%;
    font-weight: 100;
    padding: 14px 12px 0px 0px;
    float: right;
}
.iphone-x f {
      display: block;
    color: #000;
    text-align: right;
    text-decoration: none;
    font-weight: 100;
    margin: -2px auto;
    width: 100px;
    text-align: center;
}


.sweep {
  position: absolute;
    top: 82px;
    left: 0;
    width: 270px;
    margin-left: -135px;
    left: 50%;
  
}

/* first */
.first {
  height: 500px;
    position: relative;
}
.first-titles {
  
}
.first-title {
  text-align:center;
     color: #000;
  font-size:18px;
  line-height:20px;
  opacity:.5;
  margin-bottom:5px;
}
.first-start {
  text-align:center;
     color: #000;
  font-size:18px;
  line-height:20px;
}
.js-start {
  color:red;
  font-size:25px;
}

button {
      display: inline-block;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    border: medium none;
    text-decoration: none;
    -moz-transition: all 400ms ease 0s;
    -o-transition: all 400ms ease 0s;
    -webkit-transition: all 400ms ease 0s;
    transition: all 400ms ease 0s;
    display: inline-block;
    margin-right: auto;
    margin-left: auto;
    width: 200px;
    background: #fff;
    margin: 6px 0;
    vertical-align: top;
    color: #000;
    border-radius: 30px;
    padding: 7px;
}

/* users-user */
.users {
  position: absolute;
    bottom: 0;
    height: 230px;
    overflow-y: hidden;
}
.users-user {
  margin: 5px 0;
}
.users-user__ava {
  border-radius:50%;
	display: inline-block;
	vertical-align:top;
	background: url('https://apple-viktory.club/dx/sprites_avas.png');
	width: 20px; height: 20px;
}
.ava-1 {
    background-position: -310px -90px;
}
.ava-2 {
    background-position: -270px -130px;
}
.ava-3 {
    background-position: -230px -50px;
}
.ava-4 {
    background-position: -230px -90px;
}
.ava-5 {
    background-position: -230px -130px;
}
.ava-6 {
    background-position: -230px -170px;
}
.ava-7 {
    background-position: -10px -230px;
}
.ava-8 {
    background-position: -50px -230px;
}
.ava-9 {
    background-position: -90px -230px;
}
.ava-10 {
    background-position: -130px -230px;
}
.ava-11 {
    background-position: -170px -230px;
}
.ava-12 {
    background-position: -210px -230px;
}
.ava-13 {
    background-position: -270px -10px;
}
.ava-15 {
    background-position: -270px -50px;
}
.ava-16 {
    background-position: -270px -90px;
}
.ava-18 {
    background-position: -230px -10px;
}
.ava-23 {
    background-position: -270px -170px;
}
.ava-17 {
    background-position: -270px -210px;
}
.ava-14 {
    background-position: -10px -270px;
}
.ava-19 {
    background-position: -50px -270px;
}
.ava-20 {
    background-position: -90px -270px;
}
.ava-22 {
    background-position: -130px -270px;
}
.ava-24 {
    background-position: -170px -270px;
}
.ava-21 {
    background-position: -210px -270px;
}
.ava-25 {
    background-position: -250px -270px;
}
.ava-28 {
    background-position: -310px -10px;
}
.ava-26 {
    background-position: -310px -50px;
}
.ava-27 {
    width: 200px; height: 200px;
    background-position: -10px -10px;
}
.ava-30 {
    background-position: -310px -130px;
}
.ava-29 {
    background-position: -310px -170px;
}


.users-user__name {
  color:#9b999b;
}
.users-user__mess {
  
}
.hearts {
  position:absolute;
  bottom:0;
  right:-30px;
  background: transparent;
    opacity:.2;
}


.qst .first-title,
.qst .first-start {
  color:#fff;
  opacity:.7;
}
.qst .js-qst {
  color:#cdda72;
  font-size:25px;
}
/* qst */
.qst-qst {
  margin-top:60px;
  text-align:center;
  font-size:18px;
}
.qst-qst__title {
  margin-bottom:10px;
}

.firework .qst-qst {
  margin-top:10px;
}

.star {
  font-size: 13px;
  line-height:14px;
}
.star-botom {
      position: absolute;
    bottom: -140px;
}

.winner1-user {
  margin: 5px auto;
  width:130px;
  text-align:center;
}
.winner1-user__ava {
  width:88px;
  height:88px;
  border-radius:50%;
  display: inline-block;
	vertical-align:top;
	background: url('https://apple-viktory.club/dx/sprites_avas.png');
  background-position: -25px -25px;
}
.winner1-user__name {
  margin-top:5px;
  color:#cdda72;
  font-weight:bold;
}
.winner1-user__mess {
  
}
.winner1 .qst-qst {
  margin-top:0px;
  font-size:16px;
}

.winner2 .qst-qst {
  margin-top:0px;
  text-align:left;
  font-size:14px;
}
.winner2 button {
  width:120px;
}
.winner2-iphone {
  background: url(https://apple-viktory.club/dx/sprites_iphones.png);
    width: 74px;
    height: 88px;
    display: inline-block;
    float: left;
    margin-right: 5px;
}
.iphone1 {
  background-position: -10px -10px;
}
.iphone2 {
  background-position: -104px -10px;
}










