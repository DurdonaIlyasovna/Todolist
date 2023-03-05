(function(){"use strict";var e={7496:function(e,t,n){var a=n(9242),o=n(3396);function s(e,t,n,s,i,l){const r=(0,o.up)("Navbar"),d=(0,o.up)("Notes"),c=(0,o.up)("AddBtn"),h=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r,{onGetSearch:t[0]||(t[0]=e=>i.search=e),lang:i.lang,onChangeLang:l.changeLang},null,8,["lang","onChangeLang"]),(0,o.Wm)(d,{notes:l.filterNotes,search:i.search,onChangeNote:l.changeNote,onDelNote:l.delNote,lang:i.lang},null,8,["notes","search","onChangeNote","onDelNote","lang"]),(0,o.Wm)(c,{onOpenModal:l.openModal},null,8,["onOpenModal"]),(0,o.wy)((0,o.Wm)(h,{onCloseModal:l.closeModal,edit:i.edit,currentId:i.currentId,onAddNote:l.addNote,editNote:i.editNote,onEditedNote:l.editedNote,lang:i.lang},null,8,["onCloseModal","edit","currentId","onAddNote","editNote","onEditedNote","lang"]),[[a.F8,i.modalOpen]])],64)}n(7658);var i=n(7139),l=n.p+"img/search.2c9e71ed.svg",r=n.p+"img/close.1d4d165f.svg";const d={class:"header"},c={class:"header__wrap"},h={class:"container"},g={class:"header__content"},u={key:0,class:"header__p"},_=["placeholder"],p={key:0,src:l,alt:""},w={key:1,src:r,alt:""};function f(e,t,n,s,l,r){return(0,o.wg)(),(0,o.iD)("header",d,[(0,o._)("div",c,["ru"==n.lang?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"header__lang",onClick:t[0]||(t[0]=(...e)=>r.changeLang&&r.changeLang(...e))}," UZ ")):((0,o.wg)(),(0,o.iD)("button",{key:1,class:"header__lang",onClick:t[1]||(t[1]=(...e)=>r.changeLang&&r.changeLang(...e))},"RU")),(0,o._)("div",h,[(0,o._)("div",g,[(0,o.Wm)(a.uT,{name:"opp"},{default:(0,o.w5)((()=>[l.header?((0,o.wg)(),(0,o.iD)("p",u,(0,i.zw)(r.words.appbartitle[n.lang]),1)):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:1,type:"text",class:"header__input",placeholder:r.words.appbarsearch[n.lang],"onUpdate:modelValue":t[2]||(t[2]=e=>l.search=e)},null,8,_)),[[a.nr,l.search]])])),_:1})])]),(0,o._)("button",{class:"header__search",onClick:t[3]||(t[3]=(...e)=>r.changeHeader&&r.changeHeader(...e))},[l.header?((0,o.wg)(),(0,o.iD)("img",p)):((0,o.wg)(),(0,o.iD)("img",w))])])])}var m={name:"NavbarTodo",props:{lang:String},inject:["words"],data(){return{header:!0,search:""}},methods:{changeLang(){this.$emit("changeLang","ru"==this.lang?"uz":"ru")},changeHeader(){this.header=!this.header,this.search=""}},watch:{search(e){this.$emit("getSearch",e)}}},v=n(89);const b=(0,v.Z)(m,[["render",f]]);var N=b,y=n.p+"img/flex.4ed3d4be.svg",k=n.p+"img/grid.dbae4039.svg";const z={class:"changer"},O={class:"container changer__wrap"},C={key:0,class:"all__notes"},D={key:1,class:"all__notes"},S={key:0,class:"ch__cont"},M=(0,o._)("img",{src:y,alt:""},null,-1),j={key:1,class:"ch__cont"},L=(0,o._)("img",{src:k,alt:""},null,-1),T={class:"container"};function x(e,t,n,a,s,l){const r=(0,o.up)("Note");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",O,[n.search?((0,o.wg)(),(0,o.iD)("h3",D,"Поиск")):((0,o.wg)(),(0,o.iD)("h3",C,(0,i.zw)(n.notes.length>0?l.words.infobar[n.lang]:l.words.noinfobar[n.lang]),1)),(0,o._)("button",{onClick:t[0]||(t[0]=(...e)=>l.chang&&l.chang(...e)),class:"ch__btn"},[s.change?((0,o.wg)(),(0,o.iD)("div",S,[M,(0,o._)("span",null,(0,i.zw)(l.words.list[n.lang]),1)])):((0,o.wg)(),(0,o.iD)("div",j,[L,(0,o._)("span",null,(0,i.zw)(l.words.grid[n.lang]),1)]))])]),(0,o._)("div",T,[(0,o._)("div",{class:(0,i.C_)([s.change?s.grid:s.flex])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.notes,((t,a)=>((0,o.wg)(),(0,o.j4)(r,{key:a,note:t,onChangeNote:n=>e.$emit("changeNote",t.id),onDelNote:n=>e.$emit("delNote",t.id),search:n.search,lang:n.lang},null,8,["note","onChangeNote","onDelNote","search","lang"])))),128))],2)])])}var I=n.p+"img/pen.092f5b23.svg",$=n.p+"img/trash.f04c87ff.svg";const E={class:"note__item"},Z={class:"note__top"},A={class:"note__title"},B={class:"note__date"},H={class:"note__desc"},U={key:0,class:"note__btns"},W=(0,o._)("img",{src:I,alt:""},null,-1),q={class:"redact__span"},J=(0,o._)("img",{src:$,alt:""},null,-1),R={class:"redact__span"};function V(e,t,n,a,s,l){return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",Z,[(0,o._)("h4",A,(0,i.zw)(n.note.title),1),(0,o._)("p",B,(0,i.zw)(n.note.date),1)]),(0,o._)("p",H,(0,i.zw)(n.note.desc),1),n.search?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",U,[(0,o._)("button",{class:"note__btn redact",onClick:t[0]||(t[0]=t=>e.$emit("changeNote",n.note.id))},[W,(0,o._)("span",q,(0,i.zw)(l.words.editbtn[n.lang]),1)]),(0,o._)("button",{class:"note__btn delete",onClick:t[1]||(t[1]=t=>e.$emit("delNote",n.note.id))},[J,(0,o._)("span",R,(0,i.zw)(l.words.deledit[n.lang]),1)])]))])}var F={name:"NoteItemTodo",props:{search:String,note:{typeof:Object,default:{title:"",date:"",desc:"",id:""}},lang:String},inject:["words"]};const G=(0,v.Z)(F,[["render",V]]);var P=G,Q={name:"NotesTodo",components:{Note:P},props:{notes:{typeof:Array},search:String,lang:String},inject:["words"],data(){return{change:!0,flex:"changer__flex",grid:"changer__grid"}},methods:{chang(){this.change=!this.change}}};const Y=(0,v.Z)(Q,[["render",x]]);var K=Y;const X=(0,o._)("img",{src:I,alt:""},null,-1),ee=[X];function te(e,t,n,a,s,i){return(0,o.wg)(),(0,o.iD)("button",{class:"addBtn",onClick:t[0]||(t[0]=t=>e.$emit("openModal"))},ee)}var ne={name:"AddBtnTodo"};const ae=(0,v.Z)(ne,[["render",te]]);var oe=ae;const se={class:"modal__h3"},ie={class:"modal__inputs"},le={class:"input__content"},re=(0,o._)("span",{class:"input__label"},"Title",-1),de={class:"input__content"},ce=(0,o._)("span",{class:"input__label"},"Content",-1),he={class:"modal__btns"};function ge(e,t,n,s,l,r){return(0,o.wg)(),(0,o.j4)(a.uT,{name:"scale"},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"modal",onClick:t[6]||(t[6]=(...e)=>r.closeModal&&r.closeModal(...e))},[(0,o._)("div",{class:"modal__content",onClick:t[5]||(t[5]=(0,a.iM)((()=>{}),["stop"]))},[(0,o._)("h3",se,(0,i.zw)(n.edit?r.words.titlewindowedit[n.lang]:r.words.titlewindow[n.lang]),1),(0,o._)("div",ie,[(0,o._)("div",le,[re,(0,o.wy)((0,o._)("input",{type:"text",class:"modal__input",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=e=>l.title=e)},null,512),[[a.nr,l.title]])]),(0,o._)("div",de,[ce,(0,o.wy)((0,o._)("input",{type:"text",class:"modal__input",placeholder:"Content","onUpdate:modelValue":t[1]||(t[1]=e=>l.desc=e)},null,512),[[a.nr,l.desc]])])]),(0,o._)("div",he,[(0,o._)("button",{class:"modal__btn delete",onClick:t[2]||(t[2]=(...e)=>r.closeModal&&r.closeModal(...e))},(0,i.zw)(r.words.closebtn[n.lang]),1),n.edit?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"modal__btn redact",onClick:t[4]||(t[4]=(...e)=>r.editedNote&&r.editedNote(...e))},(0,i.zw)(r.words.editbtn[n.lang]),1)):((0,o.wg)(),(0,o.iD)("button",{key:0,class:"modal__btn redact",onClick:t[3]||(t[3]=(...e)=>r.addNote&&r.addNote(...e))},(0,i.zw)(r.words.addbtn[n.lang]),1))])])])])),_:1})}var ue={inject:["words"],name:"ModalTodo",props:{edit:Boolean,currentId:Number,editNote:Object,lang:String},data(){return{title:"",desc:"",id:this.currentId}},methods:{closeModal(){this.$emit("closeModal",!1),this.desc="",this.title=""},addNote(){if(""!=this.desc&&""!=this.title){const e={title:this.title,date:(new Date).toLocaleDateString(),desc:this.desc,id:this.id++};this.$emit("addNote",e),this.desc="",this.title=""}},editedNote(){if(""!=this.desc&&""!=this.title){const e={title:this.title,date:(new Date).toLocaleDateString(),desc:this.desc,id:this.editNote.id};this.$emit("editedNote",e),this.closeModal(),this.desc=this.title=""}}}};const _e=(0,v.Z)(ue,[["render",ge]]);var pe=_e;const we={appbartitle:{ru:"Заметки",uz:"Eslatmalar"},appbarsearch:{ru:"Поиск...",uz:"Qidirish"},infobar:{ru:"Все заметки",uz:"Barcha eslatmalar"},noinfobar:{ru:"Нет заметок",uz:"Eslatmalar yoq"},list:{ru:"Список",uz:"Royxat"},grid:{ru:"Сетка",uz:"Setka"},titlewindow:{ru:"Добавить заметку",uz:"Eslatma qoshish"},titlewindowedit:{ru:"Изменить заметку",uz:"Eslatmani tahrirlash"},editbtn:{ru:"РЕДАКТИРОВАТЬ",uz:"OZGARTIRISH"},deledit:{ru:"Удалить",uz:"Ochirish"},closebtn:{ru:"Отмена",uz:"Bekor qilish"},addbtn:{ru:"Добавить",uz:"Qoshish"},editwindowbtn:{ru:"Изменить",uz:"Ozgartirish"}};var fe=we,me={name:"Todo",components:{Navbar:N,Notes:K,AddBtn:oe,Modal:pe,lang:String},data(){return{notes:[],modalOpen:!1,edit:!1,currentId:1,editNote:{},search:"",lang:"ru",langwords:{}}},computed:{filterNotes(){return this.search?this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase()))):this.notes}},methods:{openModal(){this.modalOpen=!0,this.edit=!1},closeModal(e){this.edit=this.modalOpen=e},addNote(e){""!=e.title&&""!=e.desc&&(this.notes.push(e),this.modalOpen=!1)},changeNote(e){this.edit=this.modalOpen=!0;let t=this.notes.find((t=>t.id==e));this.editNote=t,console.log(this.editNote)},editedNote(e){this.notes.forEach((t=>{t.id==e.id&&(t.title=e.title,t.desc=e.desc,t.date=e.date)}))},delNote(e){let t=this.notes.findIndex((t=>t.id==e));this.notes.splice(t,1)},getNotes(){const e=localStorage.notes;e&&(this.notes=JSON.parse(e))},changeLang(e){this.lang=localStorage.lang=e}},watch:{notes:{handler(){localStorage.setItem("notes",JSON.stringify(this.notes))},deep:!0}},created(){this.getNotes(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langwords=fe,localStorage.words=JSON.stringify(this.langwords)},provide(){return{words:localStorage.words?JSON.parse(localStorage.words):this.langwords}}};const ve=(0,v.Z)(me,[["render",s]]);var be=ve;(0,a.ri)(be).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,s){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],s=e[c][2];for(var l=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(l=!1,s<i&&(i=s));if(l){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[a,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/Todolist/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,i=a[0],l=a[1],r=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(r)var c=r(n)}for(t&&t(a);d<i.length;d++)s=i[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(c)},a=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7496)}));a=n.O(a)})();
//# sourceMappingURL=app.8ba56370.js.map