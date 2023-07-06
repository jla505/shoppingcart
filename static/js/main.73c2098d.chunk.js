(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{45:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,d,s,l,u,m,j,b,h,p,f,O,g,x,y,A,v,w,k,C,E,z,q,T,U,I,S,F,R,Q,B,P,H,J,D,M,K,N,Y,Z,L,X,G,V,W,_,$,nn,en,tn,rn,cn,on=t(0),an=t.n(on),dn=t(20),sn=t.n(dn),ln=t(2),un=t(6),mn=t(13),jn=t(3),bn=t(12),hn=t(1),pn=ln.d.button(r||(r=Object(jn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  font-weight: bold;\n\n  /* SIZE */\n\n  ","\n\n  ","\n\n  /* SHAPE */\n\n  ","\n\n  /* COLOR */\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n\n  /* ANIMATION */\n\n  ","\n\n  ","\n"])),(function(n){return"big"===n.size&&Object(ln.c)(i||(i=Object(jn.a)(["\n      width: 39rem;\n      font-size: 4rem;\n    "])))}),(function(n){return"wide"===n.size&&Object(ln.c)(c||(c=Object(jn.a)(["\n      width: 100%;\n    "])))}),(function(n){return"round"===n.shape&&Object(ln.c)(o||(o=Object(jn.a)(["\n      padding: 2rem;\n      border-radius: 50px;\n    "])))}),(function(n){return"primary"===n.color&&Object(ln.c)(a||(a=Object(jn.a)(["\n      background-color: ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.dark}))}),(function(n){return"red"===n.color&&Object(ln.c)(d||(d=Object(jn.a)(["\n      background-color: ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.dark}))}),(function(n){return"grey"===n.color&&Object(ln.c)(s||(s=Object(jn.a)(["\n      background-color: ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.grey.main}),(function(n){return n.theme.colors.dark}))}),(function(n){return"dark"===n.color&&Object(ln.c)(l||(l=Object(jn.a)(["\n      background-color: ",";\n      color: ",";\n    "])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}))}),(function(n){return"scale"===n.animation&&Object(ln.c)(u||(u=Object(jn.a)(["\n      transition: transform 0.15s ease-in-out;\n\n      &:hover {\n        transform: scale(1.1);\n      }\n\n      &:active {\n        transform: scale(1.02);\n      }\n    "])))}),(function(n){return"color"===n.animation&&Object(ln.c)(m||(m=Object(jn.a)(["\n      transition: background-color 0.15s ease-in-out;\n\n      ","\n\n      ","\n\n        ","\n\n        ","\n    "])),(function(n){return"primary"===n.color&&Object(ln.c)(j||(j=Object(jn.a)(["\n          &:hover {\n            background-color: ",";\n          }\n\n          &:active {\n            background-color: ",";\n            transition: background-color 0.05s ease-in-out;\n          }\n        "])),(function(n){return n.theme.colors.hover.primary}),(function(n){return n.theme.colors.active.primary}))}),(function(n){return"red"===n.color&&Object(ln.c)(b||(b=Object(jn.a)(["\n          &:hover {\n            background-color: ",";\n          }\n\n          &:active {\n            background-color: ",";\n            transition: background-color 0.05s ease-in-out;\n          }\n        "])),(function(n){return n.theme.colors.hover.red}),(function(n){return n.theme.colors.active.red}))}),(function(n){return"grey"===n.color&&Object(ln.c)(h||(h=Object(jn.a)(["\n          &:hover {\n            background-color: ",";\n          }\n\n          &:active {\n            background-color: ",";\n            transition: background-color 0.05s ease-in-out;\n          }\n        "])),(function(n){return n.theme.colors.hover.grey}),(function(n){return n.theme.colors.active.grey}))}),(function(n){return"dark"===n.color&&Object(ln.c)(p||(p=Object(jn.a)(["\n          &:hover {\n            background-color: ",";\n          }\n\n          &:active {\n            background-color: ",";\n            transition: background-color 0.05s ease-in-out;\n          }\n        "])),(function(n){return n.theme.colors.hover.dark}),(function(n){return n.theme.colors.active.dark}))}))})),fn=function(n){var e=n.onClick,t=n.content,r=n.shape,i=n.size,c=n.color,o=n.animation;return Object(hn.jsx)(pn,{onClick:e,size:i,shape:r,color:c,animation:o,children:t})},On=t(8),gn="OPEN_CART",xn="CLOSE_CART",yn="SET_PRODUCTS",An="ADD_TO_CART",vn="REMOVE_FROM_CART",wn=function(){return{type:xn}},kn=function(n){return{type:An,payload:n}},Cn=function(n){return{type:yn,payload:n}},En=ln.d.header(f||(f=Object(jn.a)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.dark})),zn=ln.d.div(O||(O=Object(jn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 4rem;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    gap: 4rem;\n  }\n"])),(function(n){return n.theme.widths.content})),qn=ln.d.h1(g||(g=Object(jn.a)(["\n  color: ",";\n  font-size: 6rem;\n"])),(function(n){return n.theme.colors.primary})),Tn=ln.d.nav(x||(x=Object(jn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 7rem;\n  font-size: 2.4rem;\n\n  @media (max-width: 480px) {\n    gap: 0;\n    width: 100%;\n  }\n"]))),Un=Object(ln.d)(mn.b)(y||(y=Object(jn.a)(["\n  padding: 1rem;\n  color: ",";\n  transition: transform 0.15s ease-in-out;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.light})),In=ln.d.div(A||(A=Object(jn.a)(["\n  position: relative;\n  cursor: pointer;\n  transition: transform 0.15s ease-in-out;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &:active {\n    transform: scale(1.02);\n  }\n"]))),Sn=ln.d.div(v||(v=Object(jn.a)(["\n  position: absolute;\n  top: 4rem;\n  right: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50px;\n  background-color: ",";\n  font-size: 2rem;\n  font-weight: bold;\n"])),(function(n){return n.theme.colors.red})),Fn=function(){var n=Object(un.c)((function(n){return n.cart})),e=Object(un.b)(),t=function(){return n.reduce((function(n,e){return n+e.quantity}),0)};return Object(hn.jsx)(En,{children:Object(hn.jsxs)(zn,{children:[Object(hn.jsx)(mn.b,{to:On.HOME,children:Object(hn.jsx)(qn,{children:"Eco Friendly Clothes"})}),Object(hn.jsxs)(Tn,{children:[Object(hn.jsx)(Un,{to:On.HOME,children:"Home"}),Object(hn.jsx)(Un,{to:On.PRODUCTS,children:"Products"}),Object(hn.jsx)(Un,{to:On.CONTACT,children:"Contact"}),Object(hn.jsxs)(In,{onClick:function(){return e({type:gn})},children:[Object(hn.jsx)(fn,{content:Object(hn.jsx)(bn.d,{}),shape:"round"}),t()>0?Object(hn.jsx)(Sn,{children:t()}):""]})]})]})})},Rn=t(5),Qn=t.p+"static/media/people.7703c74d.png",Bn=ln.d.div(w||(w=Object(jn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 6rem;\n  margin-bottom: 20rem;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n\n  @media (max-width: 768px) {\n    margin-top: 1rem;\n  }\n"]))),Pn=ln.d.div(k||(k=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50rem;\n\n  animation: fadeIn ease 2s;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 1024px) {\n    align-items: center;\n  }\n"]))),Hn=ln.d.div(C||(C=Object(jn.a)(["\n  color: ",";\n  font-size: 1.9rem;\n  font-weight: bold;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n\n  @media (max-width: 450px) {\n    font-size: 1.4rem;\n  }\n"])),(function(n){return n.theme.colors.grey.dark})),Jn=ln.d.div(E||(E=Object(jn.a)(["\n  font-size: 6.4rem;\n  font-weight: bold;\n\n  @media (max-width: 1024px) {\n    text-align: center;\n    margin-bottom: 3rem;\n  }\n\n  @media (max-width: 450px) {\n    font-size: 5rem;\n  }\n"]))),Dn=ln.d.img(z||(z=Object(jn.a)(["\n  width: 25rem;\n  margin-top: -1rem;\n  margin-bottom: 3rem;\n\n  @media (max-width: 1024px) {\n    display: none;\n  }\n"]))),Mn=ln.d.img(q||(q=Object(jn.a)(["\n  width: 75rem;\n  animation: fadeIn ease 2s;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 1024px) {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    opacity: 0.4;\n    animation: none;\n  }\n\n  @media (max-width: 600px) {\n    top: 25rem;\n  }\n"]))),Kn=function(){return Object(hn.jsxs)(Bn,{children:[Object(hn.jsxs)(Pn,{children:[Object(hn.jsx)(Hn,{children:"Best eco friendly online store of the year"}),Object(hn.jsx)(Jn,{children:"Restoring our planet one shirt at a time"}),Object(hn.jsx)(Dn,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAAsCAYAAADM3cU1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARXSURBVHgB7Z3redNIFIbPWPlPOkAVLE4FiAqWDmArYLeC3VSwbAULFZBUgKnATgeTCggF2GJukkaOiS/R3e/7PEaDRvY/Xn/nzElQAjAV8uWl+fMy/C1aJ2n10Dp+xu69ENlc1j9olm598NZ7HrFv/1T0E3sPIuph9/1NdH9m1usf9f0k2l/r+p74PXWlpQeUAAyBfJmGVfjHXUhkHa7qpb/Own5NEqlAm+hwjSS4Cffy+2ovCUJbP9Ted4TcEBI0TyWXtC6WIo3YBFIKpa10AcNDSyW1kORcgrs10lrYBxASHEZVDqVeMrb0SV7uEEwqAEejPor67S+EBEWisYKZ7xBN2CPFQOtcI6RzwAnHysZKxZZOth9TyiYVgGGgEdIUqCec1AtHBQEhHBgPCGks1KQjr3xJ5aQT7gOMnhVCGhq+vMp8L0e9QjpHUc3RSB6t4/tu777+nmRrnqc2m1Ow6171GerqQZqmOq3cxa/6evZLK7q/PXdl1+rF7s9QafRcKp2z+QMh9YE/sUqrtGPXeSGecyVIoxSJ9rfzH9VeUsy4xC//3jaEAJ7aGEfB9pxYKbpolENF671cm+/ffxBS25QN5fU89HYymb54YrnosL6Xx1LR7umepoKhQ2pjI44oya1vii8UhNQUZeqRzB+b55lMr9TSjyWT6CCYcI+0AqeDkE7By2fuX67Pk8m4U0+RaFbyK9GQYqADENI+piEfKxltrqvQk9G1F4kGBgJC2qY85bLNZld2zWUcaJ9wXK9Gh5dPPAgHRsJ5C6lMPxevvXzyYphwqOhKOskqlFQryimYCuclJCeg5K0MO/3E5dWdFEkH6cAZMG0hleXX5vUAez+hiRxJx/dztACcKdMSUpmABiUgEg/AgYxbSF5AmVnZHpAtxVLplyj1uB7PAvEAHM74hJQvs6gJnUl/WPkswqmWuZJ6AJ7L8IVUL8NsCurjFCzu9ywE+QC0wjCF1HsKcvL5RtkF0C3DEZKTUPK7WbyXblNQUXoZAbmTrhWDhAD90J+QyqFE9a7jUkwHAfnyS12tBAAGQbdCqgYT33U4Fa29gGbfKL8Ahk37QqqS0IcwG9S2hGwJdoOAAMZHe0LqridUnIDdmvUNAgIYL80KKV/aH1Q1Etr8Ka1KqDgFMwKiCQ0wGZ4vJF+SvQ9pKJN2CCdhs9v4110CwLQ4XUjtl2TaJK2iDFsIAEye44TUehoq54FuOI4HOD8OE5IT0cWHdnpDTkI2CX2iFAM4b54WkivL3HH9W2kUJAQAj9ktJN8f+rvZsgwJAcDT1IXUvIiMeDb/CT0hADgALyT/q17/b0hEYVI6/8zpGAAcg/Iymi3l2c1qSjIAeB4XJhn9a0RyqoxsSfZZmBUCgAYwCekul+MpekMfSUMA0BQmIbn/1/3AhOTKsmvSEAC0wcz/oOo+rIg2b0TN3yAjAGiLPU1tEhEAdI2VUr764vpJ+d13s/7qZ5IAALrjJ9ZI7Kc1FYk/AAAAAElFTkSuQmCC",alt:"underline image"}),Object(hn.jsx)(mn.b,{to:On.PRODUCTS,children:Object(hn.jsx)(fn,{content:"Shop now",size:"big",shape:"round",color:"dark",animation:"scale"})})]}),Object(hn.jsx)(Mn,{src:Qn,alt:"people"})]})},Nn=t(19),Yn=t.n(Nn),Zn=t(26),Ln=t(46),Xn=ln.d.div(T||(T=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid ",";\n  border-radius: 10px;\n  background-color: #fff;\n  font-size: 2rem;\n"])),(function(n){return n.theme.colors.grey.main})),Gn=ln.d.img(U||(U=Object(jn.a)(["\n  height: 100%;\n"]))),Vn=ln.d.div(I||(I=Object(jn.a)(["\n  height: 25rem;\n  padding: 3rem;\n  margin: 0 auto;\n"]))),Wn=ln.d.div(S||(S=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 2rem;\n  height: 100%;\n  padding: 2rem;\n  border-top: 1px solid ",";\n"])),(function(n){return n.theme.colors.grey.main})),_n=ln.d.div(F||(F=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1rem;\n  height: 100%;\n"]))),$n=ln.d.div(R||(R=Object(jn.a)(["\n  font-weight: bold;\n"]))),ne=function(n){var e=n.id,t=n.title,r=n.price,i=n.image,c={id:e,title:t,price:r,image:i,category:n.category},o=Object(un.b)();return Object(hn.jsxs)(Xn,{children:[Object(hn.jsx)(Vn,{children:Object(hn.jsx)(Gn,{src:i,alt:t})}),Object(hn.jsxs)(Wn,{children:[Object(hn.jsxs)(_n,{children:[Object(hn.jsx)($n,{children:t}),Object(hn.jsxs)("div",{children:["$",r.toFixed(2)]})]}),Object(hn.jsx)(fn,{onClick:function(){return o(kn(c))},content:"Add to cart",size:"wide",color:"dark",animation:"color"})]})]})},ee=ln.d.div(Q||(Q=Object(jn.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4rem;\n  margin-top: 4rem;\n\n  @media (max-width: 768px) {\n    grid-template-columns: repeat(2, minmax(28rem, 36rem));\n    justify-content: center;\n  }\n\n  @media (max-width: 480px) {\n    grid-template-columns: repeat(1, 36rem);\n  }\n\n  animation: fadeIn ease 2s;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),te=function(){var n=Object(un.c)((function(n){return n.products})),e=Object(un.b)();Object(on.useEffect)((function(){t()}),[]);var t=function(){var n=Object(Zn.a)(Yn.a.mark((function n(){return Yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=e,n.t1=Cn,n.t2=i,n.next=5,r();case 5:n.t3=n.sent,n.t4=(0,n.t2)(n.t3),n.t5=(0,n.t1)(n.t4),(0,n.t0)(n.t5);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=function(){var n=Object(Zn.a)(Yn.a.mark((function n(){var e,t;return Yn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(n){return n.filter((function(n){return"men's clothing"===n.category||"women's clothing"===n.category}))},c=n.map((function(n){return Object(hn.jsx)(ne,{id:n.id,title:n.title,price:n.price,image:n.image},Object(Ln.a)())}));return Object(hn.jsx)(ee,{children:c})},re=ln.d.div(B||(B=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10rem;\n  margin-top: 14rem;\n  margin-bottom: 26.5rem;\n\n  animation: fadeIn ease 2s;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 5rem;\n  }\n"]))),ie=ln.d.div(P||(P=Object(jn.a)(["\n  display: flex;\n  gap: 10rem;\n  font-size: 10rem;\n\n  @media (max-width: 768px) {\n    gap: 5rem;\n    font-size: 8rem;\n  }\n\n  @media (max-width: 480px) {\n    font-size: 5rem;\n  }\n"]))),ce=ln.d.div(H||(H=Object(jn.a)(["\n  font-size: 3rem;\n  font-weight: bold;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    font-size: 2.4rem;\n  }\n"]))),oe=ln.d.a(J||(J=Object(jn.a)(["\n  cursor: pointer;\n  transition: transform 0.15s ease-in-out;\n  color: ",";\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.dark})),ae=function(){return Object(hn.jsxs)(re,{children:[Object(hn.jsxs)(ie,{children:[Object(hn.jsx)(oe,{href:"https://github.com/jla505",target:"_blank",children:Object(hn.jsx)(bn.a,{})}),Object(hn.jsx)(oe,{href:"https://twitter.com/_jimbojl",target:"_blank",children:Object(hn.jsx)(bn.e,{})})]}),Object(hn.jsxs)(ce,{children:[Object(hn.jsx)("p",{children:"Eco Friendly Clothes"}),Object(hn.jsx)("p",{children:"Public Market, 1689 Johnston St, Vancouver, BC V6H 3R9"})]})]})},de=ln.d.main(D||(D=Object(jn.a)(["\n  max-width: ",";\n  margin: 0 auto;\n  padding: 4rem;\n"])),(function(n){return n.theme.widths.content})),se=function(){return Object(hn.jsx)(de,{children:Object(hn.jsxs)(Rn.c,{children:[Object(hn.jsx)(Rn.a,{exact:!0,path:On.HOME,component:Kn}),Object(hn.jsx)(Rn.a,{exact:!0,path:On.PRODUCTS,component:te}),Object(hn.jsx)(Rn.a,{exact:!0,path:On.CONTACT,component:ae})]})})},le=t.p+"static/media/hangers.dc4e9249.png",ue=ln.d.footer(M||(M=Object(jn.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 1rem 0;\n  font-size: 2rem;\n"]))),me=ln.d.a(K||(K=Object(jn.a)(["\n  display: flex;\n  margin-left: 1rem;\n  color: ",";\n  font-size: 2rem;\n  transition: transform 0.15s ease-in-out;\n\n  &:hover {\n    transform: scale(1.2);\n  }\n"])),(function(n){return n.theme.colors.dark})),je=ln.d.img(N||(N=Object(jn.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: -100;\n"]))),be=function(){var n=Object(Rn.f)();return Object(hn.jsxs)(ue,{children:["Copyright \xa9 2023 jla505",Object(hn.jsx)(me,{href:"https://github.com/jla505",target:"_blank",rel:"noopener",children:Object(hn.jsx)(bn.a,{})}),n.pathname!==On.PRODUCTS&&Object(hn.jsx)(je,{src:le,alt:"background image"})]})},he=ln.d.div(Y||(Y=Object(jn.a)(["\n  display: flex;\n"]))),pe=ln.d.div(Z||(Z=Object(jn.a)(["\n  height: 13rem;\n  width: 20%;\n  margin: auto;\n"]))),fe=ln.d.img(L||(L=Object(jn.a)(["\n  width: auto;\n  height: 100%;\n"]))),Oe=ln.d.div(X||(X=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 2rem;\n"]))),ge=ln.d.div(G||(G=Object(jn.a)(["\n  height: 3rem;\n  font-weight: bold;\n  overflow: hidden;\n"]))),xe=ln.d.div(V||(V=Object(jn.a)(["\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n"]))),ye=function(n){var e=n.id,t=n.title,r=n.price,i=n.image,c={id:e,title:t,price:r,image:i,quantity:n.quantity},o={id:e,title:t,price:r,image:i},a=Object(un.b)();return Object(hn.jsxs)(he,{children:[Object(hn.jsx)(pe,{children:Object(hn.jsx)(fe,{src:i})}),Object(hn.jsxs)(Oe,{children:[Object(hn.jsx)(ge,{children:function(n){return n.length<=14?n:n.substr(0,14)+"..."}(t)}),Object(hn.jsxs)("div",{children:["$",(c.price*c.quantity).toFixed(2)]}),Object(hn.jsxs)(xe,{children:[Object(hn.jsx)(fn,{onClick:function(){return a(function(n){return{type:vn,payload:n}}(o))},content:Object(hn.jsx)(bn.b,{}),color:"grey",animation:"color"}),Object(hn.jsx)("div",{children:c.quantity}),Object(hn.jsx)(fn,{onClick:function(){return a(kn(o))},content:Object(hn.jsx)(bn.c,{}),color:"grey",animation:"color"})]})]})]})},Ae=ln.d.div(W||(W=Object(jn.a)(["\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: -110%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4rem;\n  width: 59rem;\n  height: 100%;\n  padding: 6rem;\n  background-color: #fff;\n  font-size: 3rem;\n  transition: right 0.85s ease-in-out;\n\n  ","\n\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"])),(function(n){return n.isOpen&&Object(ln.c)(_||(_=Object(jn.a)(["\n      right: 0;\n    "])))})),ve=ln.d.div($||($=Object(jn.a)(["\n  margin-bottom: 2rem;\n  font-size: 4rem;\n  font-weight: bold;\n"]))),we=ln.d.div(nn||(nn=Object(jn.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n  width: 100%;\n  overflow: auto;\n"]))),ke=ln.d.div(en||(en=Object(jn.a)(["\n  font-weight: bold;\n"]))),Ce=ln.d.div(tn||(tn=Object(jn.a)(["\n  position: fixed;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.6;\n  transition: left 0.85s ease-in-out;\n\n  ","\n"])),(function(n){return n.isOpen&&Object(ln.c)(rn||(rn=Object(jn.a)(["\n      left: 0;\n    "])))})),Ee=function(){var n=Object(un.c)((function(n){return n.cart})),e=Object(un.c)((function(n){return n.isCartOpen})),t=Object(un.b)(),r=n.map((function(n){return Object(hn.jsx)(ye,{id:n.id,title:n.title,price:n.price,image:n.image,quantity:n.quantity},Object(Ln.a)())}));return Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsxs)(Ae,{isOpen:e,children:[Object(hn.jsx)(ve,{children:"Your shopping cart"}),Object(hn.jsx)(we,{children:r}),Object(hn.jsxs)(ke,{children:["Total: $",n.reduce((function(n,e){return n+e.price*e.quantity}),0).toFixed(2)]}),Object(hn.jsx)(fn,{content:"Checkout",size:"wide",color:"primary",animation:"color"}),Object(hn.jsx)(fn,{onClick:function(){return t(wn())},content:"Close",size:"wide",color:"red",animation:"color"})]}),Object(hn.jsx)(Ce,{onClick:function(){return t(wn())},isOpen:e})]})},ze=function(){return Object(hn.jsxs)(hn.Fragment,{children:[Object(hn.jsxs)(mn.a,{children:[Object(hn.jsx)(Fn,{}),Object(hn.jsx)(se,{}),Object(hn.jsx)(be,{})]}),Object(hn.jsx)(Ee,{})]})},qe=ln.b(cn||(cn=Object(jn.a)(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n    line-height: 1.6;\n    /* Footer support */\n    position: relative;\n    min-height: 100%;\n  }\n\n  body {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.6rem;\n    background-color: ",";\n    /* Footer support */\n    margin-bottom: 5.2rem;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    line-height: 1.2;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n  }\n\n  button,\n  input,\n  textarea {\n    border: none;\n    outline: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  @media (max-width: 1600px) {\n    html {\n      font-size: 55%;\n    }\n  }\n\n  @media (max-width: 1400px) {\n    html {\n      font-size: 45%;\n    }\n  }\n"])),(function(n){return n.theme.colors.grey.light})),Te={colors:{primary:"#46FFD3",red:"#ff9999",dark:"#000",light:"#FFF",grey:{light:"#F9F9F9",main:"#E5E5E5",dark:"#7B7B7B"},hover:{primary:"#35eec2",red:"#ee8888",grey:"#d4d4d4",dark:"#333"},active:{primary:"#24ddb1",red:"#dd7777",grey:"#c3c3c3",dark:"#444"}},widths:{content:"140rem"}},Ue=t(18),Ie=t(31),Se=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case gn:return!0;case xn:return!1;default:return n}},Fe=t(21),Re=[],Qe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case yn:return Object(Fe.a)(e.payload);default:return n}},Be=t(16),Pe=[],He=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case An:var t=n.find((function(n){return n.id===e.payload.id}));return t?n.map((function(n){return n.id===e.payload.id?Object(Be.a)(Object(Be.a)({},n),{},{quantity:n.quantity+1}):n})):[].concat(Object(Fe.a)(n),[Object(Be.a)(Object(Be.a)({},e.payload),{},{quantity:1})]);case vn:var r=n.find((function(n){return n.id===e.payload.id}));return 1===r.quantity?n.filter((function(n){return n.id!==e.payload.id})):n.map((function(n){return n.id===e.payload.id?Object(Be.a)(Object(Be.a)({},n),{},{quantity:n.quantity-1}):n}));default:return n}},Je=Object(Ue.b)({isCartOpen:Se,products:Qe,cart:He}),De=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ue.c,Me=Object(Ue.d)(Je,De(Object(Ue.a)(Ie.a)));sn.a.render(Object(hn.jsx)(an.a.StrictMode,{children:Object(hn.jsxs)(ln.a,{theme:Te,children:[Object(hn.jsx)(qe,{}),Object(hn.jsx)(un.a,{store:Me,children:Object(hn.jsx)(ze,{})})]})}),document.getElementById("root"))},8:function(n){n.exports=JSON.parse('{"HOME":"/shopping-cart","PRODUCTS":"/shopping-cart/products","CONTACT":"/shopping-cart/contact"}')}},[[45,1,2]]]);
//# sourceMappingURL=main.73c2098d.chunk.js.map