(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5016)}])},5016:function(k,b,a){"use strict";a.r(b),a.d(b,{default:function(){return af}});var l=a(5893),d=a(9008),m=a.n(d),n=a(7357),o=a(6886),p=a(3946),q=a(9583),r=a(7568),e=a(4051),s=a.n(e),t=a(5861),u=a(3321),v=a(9756),w=a(7594),x=a(6076),y=a(715),z=a(7294),A=a(2206),f=a(9473),B=function(){return(0,f.I0)()},C=f.v9,D=a(3755),g=a(5606),E=a.n(g),F="0x50B1e9B9333472534c0a05A901af90548Ac107ff",G=a(6319),H=function(a){var b=a.anchorEl,e=a.onClose,c=a.children,d=Boolean(b);return(0,l.jsx)(G.Z,{anchorEl:b,open:d,onClose:function(){e()},PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-0.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:c})},I=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintERC2309QuantityExceedsLimit","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"OwnershipNotInitializedForExtraData","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toTokenId","type":"uint256"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"ConsecutiveTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"qty","type":"uint256"}],"name":"NewBurnNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"qty","type":"uint256"}],"name":"NewNumbers","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_FREE_PER_WALLET","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FREE_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PER_TX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenids","type":"uint256[]"}],"name":"burnNumbers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"qty","type":"uint256"}],"name":"drawNumbers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"drawnNumbers","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFreePerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"qtyFreeMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_revealed","type":"bool"}],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_initialize","type":"bool"}],"name":"setInitialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setLimitFreeMintPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setMaxFreeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"setMaxLimitPerTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"winner","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),J=a(1799),K=a(9396),L=a(9534),M=a(5537),N=a(2734),O=a(8396),P=a(8262),Q=a(4808),R=a(2293),S=a(155),T=a(9581),U=a(1425),c=function(a){a.width;var d=a.showCloseButton,e=a.fullScreen,f=a.modalName,c=a.handleClose,g=a.children,h=a.size,i=(0,L.Z)(a,["width","showCloseButton","fullScreen","modalName","handleClose","children","size"]),b=(0,N.Z)(),j=(0,O.Z)(b.breakpoints.down("md")),k=(0,O.Z)(b.breakpoints.down("md"))||e;return(0,l.jsxs)(P.Z,(0,K.Z)((0,J.Z)({fullScreen:k,closeAfterTransition:!0,BackdropComponent:Q.Z,BackdropProps:{timeout:100},maxWidth:h},i),{children:[j?(0,l.jsx)(R.Z,{sx:{position:"relative",backgroundColor:b.palette.primary.main},children:(0,l.jsxs)(S.Z,{children:[(0,l.jsx)(t.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:f}),d?(0,l.jsx)(p.Z,{edge:"start",color:"inherit",onClick:c,"aria-label":"close",children:(0,l.jsx)(M.Z,{})}):null]})}):null,(0,l.jsx)(T.Z,{dividers:!0,children:g}),(0,l.jsx)(U.Z,{children:(0,l.jsx)(u.Z,{autoFocus:!0,onClick:c,children:"Ok"})})]}))};c.defaultProps={showCloseButton:!1,width:void 0,size:"xs"};var V=c,W=function(){var d,e=B(),a=C(A.Hz).account,b=(0,z.useState)(null),f=b[0],k=b[1],c=(0,z.useState)(!1),g=c[0],m=c[1],h=function(){k(null)};(0,z.useEffect)(function(){var a;(a=(0,r.Z)(s().mark(function a(){var b,c,d,f;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=window.ethereum){a.next=5;break}return e((0,D.uH)(["Plz install Metamask"])),e((0,A.hv)("")),a.abrupt("return");case 5:return a.next=7,b.request({method:"eth_accounts"});case 7:if(!((null!==(d=null==(c=a.sent)?void 0:c.length)&& void 0!==d?d:0)!==0)){a.next=14;break}return f=c[0],console.log("Found an authorized account:",f),e((0,A.hv)(f)),a.abrupt("return");case 14:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)})()},[e]);var i,j=(d=(0,r.Z)(s().mark(function a(){var b,c;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,b=window.ethereum){a.next=5;break}return e((0,D.uH)(["Plz install Metamask"])),a.abrupt("return");case 5:return a.next=7,b.request({method:"eth_requestAccounts"});case 7:return c=a.sent,console.log("Connected",c[0]),e((0,A.hv)(c[0])),a.next=12,n();case 12:a.next=18;break;case 14:a.prev=14,a.t0=a.catch(0),e((0,D.uH)("Error ! try again")),console.log(a.t0);case 18:case"end":return a.stop()}},a,null,[[0,14]])})),function(){return d.apply(this,arguments)}),n=(i=(0,r.Z)(s().mark(function a(){var b,c,d,f;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{(b=window.ethereum)?(d=(c=new y.Q(b)).getSigner(),(f=new x.CH(F,I.Mt,d)).on("NewNumbers",function(a,b){m(!0)})):(e((0,D.uH)(["Plz install Metamask"])),console.log("Ethereum object doesn't exist"))}catch(g){console.log(g)}case 1:case"end":return a.stop()}},a)})),function(){return i.apply(this,arguments)});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(V,{open:g,handleClose:function(){return m(!1)},showCloseButton:!0,modalName:"Minted",children:(0,l.jsx)(t.Z,{children:"Good lucky investor"})}),(0,l.jsx)(u.Z,{className:E().button,variant:"contained",size:"small",sx:{fontWeight:"bold",borderRadius:"100px",p:"8px",width:"100%"},children:(0,l.jsx)(t.Z,{className:E().wallet,onClick:""!=a?function(a){k(a.currentTarget)}:j,children:""!=a?a:"Connect wallet"})}),(0,l.jsx)(H,{anchorEl:f,onClose:h,children:(0,l.jsxs)(v.Z,{onClick:function(){e((0,A.hv)("")),h()},children:[(0,l.jsx)(w.Z,{children:(0,l.jsx)(q.Wgy,{})}),"Logout"]})})]})},X=a(1163),Y=function(){return(0,X.useRouter)(),(0,l.jsx)(n.Z,{width:"100%",sx:{p:"2% 0"},children:(0,l.jsxs)(o.ZP,{container:!0,alignItems:"center",justifyItems:"center",children:[(0,l.jsxs)(o.ZP,{item:!0,xs:6,md:2,children:[(0,l.jsx)(p.Z,{sx:{background:"white",mr:2},onClick:function(){window.open("https://twitter.com/ethlotteryball","_blank")},children:(0,l.jsx)(q.fWC,{color:"#1DA1F2"})}),(0,l.jsx)(p.Z,{sx:{background:"white",mr:2},onClick:function(){window.open("https://opensea.io/collection/","_blank")},children:(0,l.jsx)("img",{src:"https://storage.googleapis.com/opensea-static/Logomark/Logomark-White.png",alt:"opensea-logo",height:27,width:27})}),(0,l.jsx)(p.Z,{sx:{background:"white",mr:2},onClick:function(){window.open("https://etherscan.io/address/","_blank")},children:(0,l.jsx)("img",{src:"https://etherscan.io/images/brandassets/etherscan-logo-circle.png",alt:"opensea-logo",height:27,width:27})})]}),(0,l.jsx)(o.ZP,{item:!0,xs:1,md:8,sx:{display:{xs:"none",md:"block"}}}),(0,l.jsx)(o.ZP,{item:!0,xs:5,md:2,textAlign:"center",children:(0,l.jsx)(W,{})})]})})},h=a(6089),Z=a.n(h),$=function(){var d=B();C(D._J).errorMessage;var a=(0,z.useState)(!1);a[0],a[1];var b=(0,z.useState)(0);b[0],b[1];var c=(0,z.useState)(0),e=c[0],f=c[1];return(0,z.useEffect)(function(){var a,b=(a=(0,r.Z)(s().mark(function a(){var b,c,e,f,g,h;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(b=window.ethereum){a.next=12;break}return e=(c=new y.Q(b)).getSigner(),f=new x.CH(F,I.Mt,e),a.next=7,f.totalSupply();case 7:return g=a.sent,a.next=10,f.MAX_SUPPLY();case 10:g===(h=a.sent)&&d((0,D.AB)(!0));case 12:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)}),c=setInterval((0,r.Z)(s().mark(function a(){return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b();case 2:f(e+1);case 3:case"end":return a.stop()}},a)})),3e3);return function(){return clearInterval(c)}},[e,d]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"jsx-a08f69fb4113ea04 wrap",children:(0,l.jsx)("section",{className:"jsx-a08f69fb4113ea04 stage",children:(0,l.jsx)("figure",{className:"jsx-a08f69fb4113ea04 ball",children:(0,l.jsx)("span",{"data-number":"?",className:"jsx-a08f69fb4113ea04 number",children:"\xa0"})})})}),(0,l.jsx)(Z(),{id:"a08f69fb4113ea04",children:'.ball.jsx-a08f69fb4113ea04{display:grid;width:100%;height:100%;margin:0;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;background:-webkit-radial-gradient(50%40%,circle,#fcfcfc,#efeff1 66%,#9b5050 100%);background:-moz-radial-gradient(50%40%,circle,#fcfcfc,#efeff1 66%,#9b5050 100%);background:-o-radial-gradient(50%40%,circle,#fcfcfc,#efeff1 66%,#9b5050 100%);background:radial-gradient(circle at 50%40%,#fcfcfc,#efeff1 66%,#9b5050 100%);overflow:hidden;-webkit-animation:ballGrow 2s ease-out forwards;-moz-animation:ballGrow 2s ease-out forwards;-o-animation:ballGrow 2s ease-out forwards;animation:ballGrow 2s ease-out forwards;-webkit-transform:scale(.5);-moz-transform:scale(.5);-ms-transform:scale(.5);-o-transform:scale(.5);transform:scale(.5)}.ball.jsx-a08f69fb4113ea04:after{content:"";position:absolute;top:5%;left:10%;width:100%;height:100%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:-webkit-radial-gradient(50%50%,circle,rgba(255,255,255,.8),rgba(255,255,255,.8)14%,rgba(255,255,255,0)24%);background:-moz-radial-gradient(50%50%,circle,rgba(255,255,255,.8),rgba(255,255,255,.8)14%,rgba(255,255,255,0)24%);background:-o-radial-gradient(50%50%,circle,rgba(255,255,255,.8),rgba(255,255,255,.8)14%,rgba(255,255,255,0)24%);background:radial-gradient(circle at 50%50%,rgba(255,255,255,.8),rgba(255,255,255,.8)14%,rgba(255,255,255,0)24%);-webkit-transform:translateX(-80px)translateY(-90px)skewX(-20deg);-moz-transform:translateX(-80px)translateY(-90px)skewX(-20deg);-ms-transform:translateX(-80px)translateY(-90px)skewX(-20deg);-o-transform:translateX(-80px)translateY(-90px)skewX(-20deg);transform:translateX(-80px)translateY(-90px)skewX(-20deg)}.stage.jsx-a08f69fb4113ea04{width:300px;height:300px;display:inline-block;margin:20px;-webkit-perspective:1200px;-moz-perspective:1200px;-ms-perspective:1200px;-o-perspective:1200px;perspective:1200px;-webkit-perspective-origin:50%50%;-moz-perspective-origin:50%50%;-ms-perspective-origin:50%50%;-o-perspective-origin:50%50%;perspective-origin:50%50%}.number.jsx-a08f69fb4113ea04{position:absolute;width:100%;text-align:center;line-height:300px;font-size:160px;color:blue;font-family:"Roboto",sans-serif;-webkit-animation:ballRoll 2s ease-out;-moz-animation:ballRoll 2s ease-out;-o-animation:ballRoll 2s ease-out;animation:ballRoll 2s ease-out}.number.jsx-a08f69fb4113ea04:after{content:attr(data-number);position:absolute;-webkit-transform:translateX(-75%);-moz-transform:translateX(-75%);-ms-transform:translateX(-75%);-o-transform:translateX(-75%);transform:translateX(-75%);opacity:0;animation:numberReveal.1s 1.5s reverse forwards}.number.jsx-a08f69fb4113ea04:before{content:"?";position:absolute;-webkit-transform:translateX(-25%);-moz-transform:translateX(-25%);-ms-transform:translateX(-25%);-o-transform:translateX(-25%);transform:translateX(-25%);-webkit-animation:numberReveal.1s 1.5s forwards;-moz-animation:numberReveal.1s 1.5s forwards;-o-animation:numberReveal.1s 1.5s forwards;animation:numberReveal.1s 1.5s forwards}@-webkit-keyframes ballRoll{0%,20%,50%{opacity:1;-webkit-transform:translateY(0)rotateX(0)scale(1);transform:translateY(0)rotateX(0)scale(1)}10%,35%,75%{-webkit-transform:translateY(100%)rotateX(170deg)scale(.4);transform:translateY(100%)rotateX(170deg)scale(.4)}11%,36%,76%{-webkit-transform:translateY(-100%)rotateX(-170deg)scale(.3);transform:translateY(-100%)rotateX(-170deg)scale(.3);opacity:0}}@-moz-keyframes ballRoll{0%,20%,50%{opacity:1;-moz-transform:translateY(0)rotateX(0)scale(1);transform:translateY(0)rotateX(0)scale(1)}10%,35%,75%{-moz-transform:translateY(100%)rotateX(170deg)scale(.4);transform:translateY(100%)rotateX(170deg)scale(.4)}11%,36%,76%{-moz-transform:translateY(-100%)rotateX(-170deg)scale(.3);transform:translateY(-100%)rotateX(-170deg)scale(.3);opacity:0}}@-o-keyframes ballRoll{0%,20%,50%{opacity:1;transform:translateY(0)rotateX(0)scale(1)}10%,35%,75%{transform:translateY(100%)rotateX(170deg)scale(.4)}11%,36%,76%{transform:translateY(-100%)rotateX(-170deg)scale(.3);opacity:0}}@keyframes ballRoll{0%,20%,50%{opacity:1;-webkit-transform:translateY(0)rotateX(0)scale(1);-moz-transform:translateY(0)rotateX(0)scale(1);transform:translateY(0)rotateX(0)scale(1)}10%,35%,75%{-webkit-transform:translateY(100%)rotateX(170deg)scale(.4);-moz-transform:translateY(100%)rotateX(170deg)scale(.4);transform:translateY(100%)rotateX(170deg)scale(.4)}11%,36%,76%{-webkit-transform:translateY(-100%)rotateX(-170deg)scale(.3);-moz-transform:translateY(-100%)rotateX(-170deg)scale(.3);transform:translateY(-100%)rotateX(-170deg)scale(.3);opacity:0}}@-webkit-keyframes ballGrow{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes ballGrow{0%{-moz-transform:scale(.5);transform:scale(.5)}100%{-moz-transform:scale(1);transform:scale(1)}}@-o-keyframes ballGrow{0%{-o-transform:scale(.5);transform:scale(.5)}100%{-o-transform:scale(1);transform:scale(1)}}@keyframes ballGrow{0%{-webkit-transform:scale(.5);-moz-transform:scale(.5);-o-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}}@-webkit-keyframes numberReveal{0%{opacity:1}100%{opacity:0}}@-moz-keyframes numberReveal{0%{opacity:1}100%{opacity:0}}@-o-keyframes numberReveal{0%{opacity:1}100%{opacity:0}}@keyframes numberReveal{0%{opacity:1}100%{opacity:0}}.stage.jsx-a08f69fb4113ea04:nth-child(2) .ball.jsx-a08f69fb4113ea04,.stage.jsx-a08f69fb4113ea04:nth-child(2) .number.jsx-a08f69fb4113ea04{-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}.stage.jsx-a08f69fb4113ea04:nth-child(2) .number.jsx-a08f69fb4113ea04:after,.stage.jsx-a08f69fb4113ea04:nth-child(2) .number.jsx-a08f69fb4113ea04:before{-webkit-animation-delay:1.8s;-moz-animation-delay:1.8s;-o-animation-delay:1.8s;animation-delay:1.8s}.stage.jsx-a08f69fb4113ea04:nth-child(3) .ball.jsx-a08f69fb4113ea04,.stage.jsx-a08f69fb4113ea04:nth-child(3) .number.jsx-a08f69fb4113ea04{-webkit-animation-delay:.6s;-moz-animation-delay:.6s;-o-animation-delay:.6s;animation-delay:.6s}.stage.jsx-a08f69fb4113ea04:nth-child(3) .number.jsx-a08f69fb4113ea04:after,.stage.jsx-a08f69fb4113ea04:nth-child(3) .number.jsx-a08f69fb4113ea04:before{-webkit-animation-delay:2.1s;-moz-animation-delay:2.1s;-o-animation-delay:2.1s;animation-delay:2.1s}.stage.jsx-a08f69fb4113ea04:nth-child(4) .ball.jsx-a08f69fb4113ea04,.stage.jsx-a08f69fb4113ea04:nth-child(4) .number.jsx-a08f69fb4113ea04{-webkit-animation-delay:.9s;-moz-animation-delay:.9s;-o-animation-delay:.9s;animation-delay:.9s}.stage.jsx-a08f69fb4113ea04:nth-child(4) .number.jsx-a08f69fb4113ea04:after,.stage.jsx-a08f69fb4113ea04:nth-child(4) .number.jsx-a08f69fb4113ea04:before{-webkit-animation-delay:2.4s;-moz-animation-delay:2.4s;-o-animation-delay:2.4s;animation-delay:2.4s}'})]})},_=a(1007),aa=a(6082),i=a(2930),ab=a.n(i),ac=a(5553),ad=function(){var c,g=B(),d=C(A.Hz).account,a=C(D._J).isMinting,b=(0,z.useState)(1),e=b[0],h=b[1],f=(c=(0,r.Z)(s().mark(function a(){var b,c,d,f,h,i,j,k;return s().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!(b=window.ethereum)){a.next=23;break}return g((0,D.q2)(!0)),d=(c=new y.Q(b)).getSigner(),f=new x.CH(F,I.Mt,d),a.next=9,f.PRICE();case 9:return h=a.sent,a.next=12,f.totalSupply();case 12:return i=a.sent,j=e*parseFloat(ac.dF(h)),a.next=16,f.mint(e,{value:ac.fi(j.toString())});case 16:return k=a.sent,a.next=19,k.wait();case 19:console.log(k),g((0,D.q2)(!1)),a.next=24;break;case 23:console.log("Ethereum object doesn't exist"),g((0,D.uH)(["Plz install Metamask"]));case 24:a.next=31;break;case 26:a.prev=26,a.t0=a.catch(0),g((0,D.uH)("Error ! try again")),console.log(a.t0),g((0,D.q2)(!1));case 31:case"end":return a.stop()}},a,null,[[0,26]])})),function(){return c.apply(this,arguments)});return(0,l.jsxs)("div",{className:ab().mintSection,children:[(0,l.jsxs)(o.ZP,{className:ab().qtyMint,container:!0,textAlign:"center",alignItems:"center",children:[(0,l.jsx)(o.ZP,{item:!0,xs:4,children:(0,l.jsx)(p.Z,{className:ab().actionIcon,onClick:function(){var a=e-1;!(a<1)&&h(a)},sx:{background:"white",fontWeight:"bold","&:hover":{backgroundColor:"lightgray"}},children:(0,l.jsx)(q.iFH,{})})}),(0,l.jsx)(o.ZP,{item:!0,xs:4,children:(0,l.jsx)(_.Z,{className:ab().input,value:e,disabled:!0,size:"small"})}),(0,l.jsx)(o.ZP,{item:!0,xs:4,children:(0,l.jsx)(p.Z,{className:ab().actionIcon,onClick:function(){var a=e+1;!(a>20)&&h(a)},sx:{background:"white",fontWeight:"bold","&:hover":{backgroundColor:"lightgray"}},children:(0,l.jsx)(q.wEH,{})})})]}),(0,l.jsxs)(o.ZP,{container:!0,alignItems:"center",textAlign:"center",children:[(0,l.jsx)(o.ZP,{item:!0,xs:3}),(0,l.jsx)(o.ZP,{item:!0,xs:6,children:(0,l.jsx)(aa.Z,{sx:{fontWeight:"bold",borderRadius:"100px",backgroundColor:"tomato","&:hover":{backgroundColor:"#af321c"}},loading:a,className:ab().mintButton,color:"primary",disabled:d.length<=0,variant:"contained",size:"medium",onClick:f,children:a?"Getting numbers":"Mint Numbers"})}),(0,l.jsx)(o.ZP,{item:!0,xs:3})]})]})},j=a(214),ae=a.n(j),af=function(){return(0,l.jsxs)("div",{className:ae().container,children:[(0,l.jsxs)(m(),{children:[(0,l.jsx)("title",{children:"ETH Lottery number"}),(0,l.jsx)("meta",{name:"description",content:"Mint eth lottery number"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(Y,{}),(0,l.jsx)(S.Z,{}),(0,l.jsx)("main",{children:(0,l.jsxs)(o.ZP,{container:!0,children:[(0,l.jsx)(o.ZP,{item:!0,xs:12,md:7,textAlign:"center",children:(0,l.jsx)($,{})}),(0,l.jsxs)(o.ZP,{item:!0,xs:12,md:5,children:[(0,l.jsx)(t.Z,{variant:"h2",children:"ETH Lottery"}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.Z,{variant:"body1",fontWeight:"bold",children:["Supply:","  ",(0,l.jsx)(t.Z,{variant:"body2",component:"span",children:"5000"})]}),(0,l.jsx)("br",{}),(0,l.jsxs)(t.Z,{variant:"body2",fontWeight:"bold",children:["Price:","  ",(0,l.jsx)(t.Z,{variant:"body2",component:"span",children:"0.001 eth each"})]}),(0,l.jsx)("br",{}),(0,l.jsx)(t.Z,{variant:"body2",children:"ETH Lottery is a collection where each nft corresponds to a lottery number, there will be more than 5eth in prizes (there will be 5 draws) for whoever has the 5 numbers drawn,  the first draw will take place after the sold out, the more numbers the greater the chances of winning"}),(0,l.jsx)("br",{}),(0,l.jsx)(ad,{})]})]})})]})}},5606:function(a){a.exports={link:"Header_link__3RNlo",active:"Header_active__EB8lX",tab:"Header_tab__MR_kd",wallet:"Header_wallet__pYl3B",button:"Header_button__4rS9_"}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},2930:function(a){a.exports={mintSection:"MintSection_mintSection__xhcGZ",mintButton:"MintSection_mintButton__8sSsZ",actionIcon:"MintSection_actionIcon__Elbtt",input:"MintSection_input__qlFsL",qtyMint:"MintSection_qtyMint__bepEI"}},8677:function(){},2808:function(){}},function(a){a.O(0,[445,158,879,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])