(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(10),i=a.n(c),s=a(2),o=a(3),l=a(5),h=a(4),d=(a(15),a(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=(a(17),a.p+"static/media/mjolnir.61f31e18.png"),m=a(6),b=a.n(m),f=a(7),p=function e(){var t=this;Object(s.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=e6f20d4ce8650ad20e15dcfeff516255",this._baseOffset=210,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t,", status: ").concat(a.status," "));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var a,r,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?l&").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?e.description.slice(0,100)+"...":"No description for this char",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,9)}}},x=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",background:"#fff"},width:200,height:200,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",display:"block",children:[Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(30 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(60 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(90 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(120 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(150 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(180 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(210 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(240 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(270 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(300 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})}),Object(d.jsx)("rect",{x:47,y:24,rx:3,ry:6,width:6,height:12,fill:"#fe718d",transform:"rotate(330 50 50)",children:Object(d.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})]})},O=a.p+"static/media/error.42292aa1.gif",v=function(){return Object(d.jsx)("img",{src:O,alt:"error gif",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})},g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new p,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=r?Object(d.jsx)(v,{}):null,c=a?Object(d.jsx)(x,{}):null,i=a||r?null:Object(d.jsx)(_,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[n,c,i,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",onClick:this.updateChar,children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(r.Component),_=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,i=t.wiki,s="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"contain"}:null;return Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:s}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:a}),Object(d.jsx)("p",{className:"randomchar__descr",children:r}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:i,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=g,N=a(9),C=(a(19),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={chars:[],loading:!0,error:!1,newItemsLoading:!1,offset:300,charEnded:!1},e.marvelService=new p,e.onRequest=function(t){e.onNewCharsLoading(),e.marvelService.getAllCharacters(t).then(e.onCharsLoaded).catch(e.onError)},e.onCharsLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var r=e.chars,n=e.offset;return{chars:[].concat(Object(N.a)(r),Object(N.a)(t)),loading:!1,newItemsLoading:!1,offset:n+9,charEnded:a}}))},e.onError=function(){e.setState({loading:!1,error:!0})},e.onCharsLoading=function(){e.setState({loading:!0})},e.onNewCharsLoading=function(){e.setState({newItemsLoading:!0})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus(),console.log(e.itemRefs)},e.renderView=function(t){var a=t.map((function(t,a){var r="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail?{objectFit:"unset"}:{objectFit:"cover"};return Object(d.jsxs)("li",{onClick:function(){e.props.onCharSelected(t.id),e.focusOnItem(a)},className:"char__item",tabIndex:0,ref:e.setRef,onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(r.preventDefault(),e.props.onCharSelected(t.id),e.focusOnItem(a))},children:[Object(d.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(d.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"render",value:function(){var e=this,t=this.state,a=t.chars,r=t.loading,n=t.error,c=t.newItemsLoading,i=t.offset,s=t.charEnded,o=this.renderView(a),l=r?Object(d.jsx)(x,{}):null,h=n?Object(d.jsx)(v,{}):null,u=r||n?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[h,l,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:c,style:{display:s?"none":"block"},onClick:function(){return e.onRequest(i)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),k=(a(20),a(21),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),w=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new p,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e,t){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(d.jsx)(k,{}),c=r?Object(d.jsx)(v,{}):null,i=a?Object(d.jsx)(x,{}):null,s=a||r||!t?null:Object(d.jsx)(S,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[n,c,i,s]})}}]),a}(r.Component),S=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,i=t.wiki,s=t.comics,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n?{objectFit:"unset"}:{objectFit:"cover"},l=function(e){return e.comics.map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:n,alt:a,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:a}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:i,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:r}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsx)("ul",{className:"char__comics-list",children:0===s.length?Object(d.jsx)("li",{className:"char__comics-item",children:"NO COMICSES"}):Object(d.jsx)(l,{comics:s})})]})},L=w,R=a.p+"static/media/vision.067d4ae1.png",I=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(v,{}):this.props.children}}]),a}(r.Component),E=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(I,{children:Object(d.jsx)(y,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(I,{children:Object(d.jsx)(C,{onCharSelected:this.onCharSelected,charId:this.state.selectedChar})}),Object(d.jsx)(I,{children:Object(d.jsx)(L,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:R,alt:"vision"})]})]})}}]),a}(r.Component);a(22);i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c4b54e8e.chunk.js.map