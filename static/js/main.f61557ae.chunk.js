(this.webpackJsonpgdrive_passwordmanager=this.webpackJsonpgdrive_passwordmanager||[]).push([[0],{245:function(e,t,n){"use strict";(function(e){var a=n(86),r=n.n(a),c={encrypt:function(t,n){var a=e.from(t,"utf8");n=r.a.createHash("sha256").update(String(n)).digest("base64").substr(0,32);var c=r.a.randomBytes(16),i=r.a.createCipheriv("aes-256-ctr",n,c);return e.concat([c,i.update(a),i.final()]).toString("base64")},decrypt:function(t,n){var a=e.from(t,"base64");n=r.a.createHash("sha256").update(String(n)).digest("base64").substr(0,32);var c=a.slice(0,16);a=a.slice(16);var i=r.a.createDecipheriv("aes-256-ctr",n,c);return e.concat([i.update(a),i.final()]).toString()}};t.a=c}).call(this,n(31).Buffer)},322:function(e,t){},324:function(e,t){},334:function(e,t){},336:function(e,t){},363:function(e,t){},364:function(e,t){},369:function(e,t){},371:function(e,t){},378:function(e,t){},397:function(e,t){},416:function(e,t){},418:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(53),s=n.n(i),o=n(512),l=n(493),u=n(515),d=n(19),j=n(5),b=n(108),O=n(513),p=n(494),g=n(510),h=n(109),f=n(39),x=n(504),E=n(252),v=n.n(E),m=n(253),_=n.n(m),w=n(11),S=n(27),y=n.n(S),A=n(102),T={LOGIN_GOOGLE:"LOGIN_GOOGLE",SET_MASTER_PASSWORD:"SET_MASTER_PASSWORD",CLEAR_MASTER_PASSWORD:"CLEAR_MASTER_PASSWORD",LOGOUT:"LOGOUT"},C={loginUsingGoogle:function(e){return{type:T.LOGIN_GOOGLE,googleLoginResponse:e}},setMasterPassword:function(e){return{type:T.SET_MASTER_PASSWORD,masterPassword:e}},clear_master_password:function(){return{type:T.CLEAR_MASTER_PASSWORD}},logout:function(){return{type:T.LOGOUT}}};!function(e){e.success="success",e.info="info",e.warning="warning",e.error="error"}(a||(a={}));var R={VIEW_SNACKBAR_ALERT:"VIEW_SNACKBAR_ALERT"},G={viewSnackbarAlert:function(e,t){return{type:R.VIEW_SNACKBAR_ALERT,status:e,message:t}}},D=n(503),N=n(478),P=n(250),L=n.n(P),I=n(251),k=n.n(I),F=n(63),U=n(125),W=n(126),M=n(30),Y=n.n(M),B=n(244),H=n.n(B),z=n(48),K=n(266),q=(n(317),n(318),{message:"",status:a.info}),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return t.type===R.VIEW_SNACKBAR_ALERT?Object(w.a)(Object(w.a)({},e),{},{message:t.message,status:t.status}):e},J={SET_PROGRESS_VALUE:"SET_PROGRESS_VALUE",ENABLE_INDETERMINATE_PROGRESS_BAR:"ENABLE_INDETERMINATE_PROGRESS_BAR",DISABLE_INDETERMINATE_PROGRESS_BAR:"DISABLE_INDETERMINATE_PROGRESS_BAR"},$={progress:0,indeterminate:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J.DISABLE_INDETERMINATE_PROGRESS_BAR:return Object(w.a)(Object(w.a)({},e),{},{progress:0,indeterminate:!1});case J.ENABLE_INDETERMINATE_PROGRESS_BAR:return Object(w.a)(Object(w.a)({},e),{},{progress:0,indeterminate:!0});case J.SET_PROGRESS_VALUE:return Object(w.a)(Object(w.a)({},e),{},{progress:t.progress,indeterminate:!1});default:return e}},X={END_APP_LOADING:"END_APP_LOADING",OPEN_NEW_ENTRY_DIALOG:"OPEN_NEW_ENTRY_DIALOG",OPEN_NEW_CATEGORY_DIALOG:"OPEN_NEW_CATEGORY_DIALOG",OPEN_MASTER_PASSWORD_DIALOG:"OPEN_MASTER_PASSWORD_DIALOG",OPEN_USER_SETTINGS_DIALOG:"OPEN_USER_SETTINGS_DIALOG",CLOSE_DIALOG:"CLOSE_DIALOG"},Z={AppLoading:!0,NewEntry:!1,NewCategory:!1,MasterPassword:!1,UserSettings:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.END_APP_LOADING:return Object(w.a)(Object(w.a)({},e),{},{AppLoading:!1});case X.OPEN_NEW_CATEGORY_DIALOG:return Object(w.a)(Object(w.a)({},e),{},{NewCategory:!0});case X.OPEN_NEW_ENTRY_DIALOG:return Object(w.a)(Object(w.a)({},e),{},{NewEntry:!0});case X.OPEN_MASTER_PASSWORD_DIALOG:return Object(w.a)(Object(w.a)({},e),{},{MasterPassword:!0});case X.OPEN_USER_SETTINGS_DIALOG:return Object(w.a)(Object(w.a)({},e),{},{UserSettings:!0});case X.CLOSE_DIALOG:return Object(w.a)(Object(w.a)({},Z),{},{AppLoading:!1});default:return e}},te={ENTRY_GRID_LOAD_DATA:"ENTRY_GRID_LOAD_DATA"},ne={current_page:1,total_pages:0,items:{}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return t.type===te.ENTRY_GRID_LOAD_DATA?{total_pages:t.total_pages,current_page:t.current_page,items:t.items}:e},re=Object(z.combineReducers)({Global:ee,ProgressBar:Q,Snackbar:V,EntryGrid:ae}),ce=n(3),ie=n(245),se={CREATE_ENTRY:"CREATE_ENTRY",DELETE_ENTRY:"DELETE_ENTRY"},oe={CREATE_CATEGORY:"CREATE_CATEGORY",DELETE_CATEGORY:"DELETE_CATEGORY",CHANGE_SELECTED_CATEGORY:"CHANGE_SELECTED_CATEGORY"},le=function(){var e={entries:{}},t="General";return{Passwords:Object(ce.a)({},t,e),Files:Object(ce.a)({},t,e),SelectedCategory:t}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.CREATE_ENTRY:var n=y.a.get(t,"entry_user"),a=y.a.get(t,"entry_pass",""),r=y.a.get(t,"url",""),c=y.a.get(t,"name",""),i=y.a.get(t,"masterPassword","");if(n){var s="_"+Math.random().toString(36).substring(2,16),o=ie.a.encrypt(JSON.stringify({id:s,user:n,pass:a,url:r,name:c}),i),l={id:s,user:n,pass:a,url:r,name:c,encrypted:o},u=e.SelectedCategory,d=y.a.cloneDeep(e);return d.Passwords[u].entries[s]=l,d}return e;case oe.CHANGE_SELECTED_CATEGORY:if(e.SelectedCategory!==t.category_name){var j=y.a.cloneDeep(e);return j.SelectedCategory=t.category_name,j}return e;case oe.CREATE_CATEGORY:var b=y.a.cloneDeep(e);return b.Passwords[t.category_name]={entries:{}},b;default:return e}},de={EntryActions:{createNewEntry:function(e,t,n,a,r,c){return{type:se.CREATE_ENTRY,category_name:e,entry_user:t,entry_pass:n,url:a,name:r,masterPassword:c}},deleteEntry:function(e,t){return{type:se.DELETE_ENTRY,category_name:e,entry_id:t}}},CategoryActions:{createNewCategory:function(e){return{type:oe.CREATE_CATEGORY,category_name:e}},deleteCategory:function(e){return{type:oe.DELETE_CATEGORY,category_name:e}},changeSelectedCategory:function(e){return{type:oe.CHANGE_SELECTED_CATEGORY,category_name:e}}}},je=ue,be={UPDATE_SETTINGS:"UPDATE_SETTINGS"},Oe={passwordGenerator:{length:10,uppercase:!0,lowercase:!0,symbols:!1,numbers:!1,exclude:""},security:{timeout:30,expire:365}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;if(t.type===be.UPDATE_SETTINGS){var n=y.a.cloneDeep(e);return n.passwordGenerator=Object(w.a)({},t.newSettings.passwordGenerator),n.security=Object(w.a)({},t.newSettings.security),n}return e},ge={GoogleToken:void 0,masterPassword:void 0},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T.LOGIN_GOOGLE:return Object(w.a)(Object(w.a)({},e),{},{GoogleToken:t.googleLoginResponse});case T.SET_MASTER_PASSWORD:return Object(w.a)(Object(w.a)({},e),{},{masterPassword:t.masterPassword});case T.LOGOUT:return ge;default:return e}},fe=Object(z.combineReducers)({Settings:pe,Auth:he}),xe=n(132);function Ee(){}var ve=Y.a.mark(me);function me(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(xe.a)(Ee);case 3:e=t.sent,console.log(e.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),ve,null,[[0,7]])}var _e=Y.a.mark(we);function we(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.b)("GET_USER_DATA",me);case 2:case"end":return e.stop()}}),_e)}var Se=Object(z.combineReducers)({UI:re,User:fe,Data:je}),ye=Object(K.a)(),Ae=void 0,Te=[ye];Ae=z.applyMiddleware.apply(void 0,Te);var Ce=Object(z.createStore)(Se,Ae);ye.run(we);var Re=Ce,Ge=function(){function e(t,n){Object(U.a)(this,e),this.API_KEY=y.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"/passwordmanager_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_API_KEY:"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",REACT_APP_GOOGLE_CLIENT_ID:"952024862678-s93h45u2ve44du8q79v2tc0mqa1qpgat.apps.googleusercontent.com"}),"REACT_APP_GOOGLE_API_KEY",""),this.RootFolderID="",this.axiosInstance=H.a.create({baseURL:"https://www.googleapis.com/drive/v3/",timeout:3e3,headers:{Authorization:"".concat(t," ").concat(n)},params:{key:this.API_KEY}})}return Object(W.a)(e,[{key:"listFiles",value:function(){var e=Object(F.a)(Y.a.mark((function e(){var t,n,a,r=arguments;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],n=r.length>1?r[1]:void 0,a=Object(w.a)({},n),t||(a.q="trashed=false"),e.abrupt("return",this.axiosInstance("files",{params:a}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"uploadFile",value:function(){var e=Object(F.a)(Y.a.mark((function e(t,n,a){var r,c,i;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new Blob([n],{type:"text/plain"}),c=Object(w.a)(Object(w.a)({},a),{},{name:t,mimeType:"text/plain"}),(i=new FormData).append("metadata",new Blob([JSON.stringify(c)],{type:"application/json; charset=UTF-8"})),i.append("file",r),this.axiosInstance("https://www.googleapis.com/upload/drive/v3/files",{method:"POST",responseType:"json",params:{uploadType:"multipart"},data:i});case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createFile",value:function(){var e=Object(F.a)(Y.a.mark((function e(t,n){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.axiosInstance("files",{method:"POST",data:Object(w.a)(Object(w.a)({},n),{},{name:t})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createFolder",value:function(){var e=Object(F.a)(Y.a.mark((function e(t,n){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.createFile(t,Object(w.a)(Object(w.a)({},n),{},{mimeType:"application/vnd.google-apps.folder"})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getFileByName",value:function(){var e=Object(F.a)(Y.a.mark((function e(t){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.listFiles();case 2:return n=e.sent.data.files,e.abrupt("return",y.a.find(n,{name:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRootFolder",value:function(){return this.getFileByName("PasswordManagerData")}},{key:"createInitialFiles",value:function(){var e=this;this.getRootFolder().then((function(t){void 0===t&&e.createFolder("PasswordManagerData",{folderColorRgb:"Red"}).then((function(t){e.RootFolderID=t.data.id,Promise.all([e.createFile("DO NOT EDIT ANYTHING IN THIS FOLDER",{parents:[t.data.id]}),e.createFolder("Passwords",{parents:[t.data.id]}),e.createFolder("Files",{parents:[t.data.id]}),e.uploadFile("Settings.enc.txt",JSON.stringify(Re.getState().User.Settings),{parents:[t.data.id]})])}))}))}}],[{key:"getInstance",value:function(){var t=y.a.get(Re.getState().User.Auth.GoogleToken,"tokenObj.token_type",""),n=y.a.get(Re.getState().User.Auth.GoogleToken,"tokenObj.access_token","");return null===this.instance&&t&&n&&(this.instance=new e(t,n)),this.instance}}]),e}();Ge.instance=null;var De=Ge,Ne=n(1),Pe={clientId:y.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"/passwordmanager_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_API_KEY:"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",REACT_APP_GOOGLE_CLIENT_ID:"952024862678-s93h45u2ve44du8q79v2tc0mqa1qpgat.apps.googleusercontent.com"}),"REACT_APP_GOOGLE_CLIENT_ID",""),cookiePolicy:"single_host_origin",scope:["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.appdata"].join(" "),isSignedIn:!0},Le=function(e,t){t(C.loginUsingGoogle(e)),t(G.viewSnackbarAlert(a.success,"Google Login Successful"));var n=De.getInstance();n&&n.createInitialFiles()},Ie=function(e,t){console.error(e),t(G.viewSnackbarAlert(a.error,"Google Login Failed"))},ke=function(){var e=Object(d.b)();return Object(Ne.jsx)("div",{children:Object(Ne.jsx)(A.GoogleLogin,Object(w.a)(Object(w.a)({},Pe),{},{render:function(e){return Object(Ne.jsx)(D.a,{onClick:e.onClick,disabled:e.disabled,variant:"contained",children:Object(Ne.jsxs)(N.a,{direction:"row",spacing:1,children:[Object(Ne.jsx)(L.a,{}),Object(Ne.jsx)(h.a,{children:"Sign in with Google"})]})})},onSuccess:function(t){return Le(t,e)},onFailure:function(t){return Ie(t,e)},cookiePolicy:"single_host_origin"}))})},Fe=function(){var e=Object(d.b)();return Object(Ne.jsx)("div",{children:Object(Ne.jsx)(A.GoogleLogout,Object(w.a)(Object(w.a)({},Pe),{},{render:function(e){return Object(Ne.jsx)(p.a,{title:"Logout",arrow:!0,children:Object(Ne.jsx)(g.a,{size:"large",edge:"end",color:"inherit",onClick:e.onClick,children:Object(Ne.jsx)(k.a,{})})})},onLogoutSuccess:function(){e(C.logout())},buttonText:"Logout"}))})},Ue=n(511),We=function(){var e=Object(d.c)((function(e){return e.UI.ProgressBar})),t={value:e.progress,variant:"determinate"};return e.indeterminate&&(t.variant="indeterminate",t.value=0),0!==t.value&&"determinate"===t.variant||e.indeterminate?Object(Ne.jsx)(Ue.a,Object(w.a)({},t)):Object(Ne.jsx)(Ne.Fragment,{})},Me={endAppLoading:function(){return{type:X.END_APP_LOADING}},openNewCategoryDialog:function(){return{type:X.OPEN_NEW_CATEGORY_DIALOG}},openNewEntryDialog:function(){return{type:X.OPEN_NEW_ENTRY_DIALOG}},openUserSettingsDialog:function(){return{type:X.OPEN_USER_SETTINGS_DIALOG}},closeAllDialogs:function(){return{type:X.CLOSE_DIALOG}}},Ye=Object(j.a)("div")((function(e){var t=e.theme;return{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(b.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.a)(t.palette.common.white,.25)}}})),Be=Object(j.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),He=Object(j.a)(f.c)((function(e){var t=e.theme;return{color:"inherit",display:"block","& .MuiInputBase-input":{boxSizing:"border-box",padding:t.spacing(3,3,3,"calc(1em + ".concat(t.spacing(4),")")),transition:t.transitions.create("width"),width:"100%"}}})),ze=function(){var e=Object(d.c)((function(e){return e.User.Auth.GoogleToken})),t=Object(d.b)(),n=Object(Ne.jsx)(Ne.Fragment,{});return e&&(n=Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsx)(Fe,{}),Object(Ne.jsx)(p.a,{title:"Settings",arrow:!0,children:Object(Ne.jsx)(g.a,{size:"large",edge:"end",color:"inherit",onClick:function(){return t(Me.openUserSettingsDialog())},children:Object(Ne.jsx)(v.a,{})})}),Object(Ne.jsx)(g.a,{size:"large",edge:"end",color:"inherit",children:Object(Ne.jsx)(x.a,{alt:e.profileObj.name,src:e.profileObj.imageUrl,sx:{width:24,height:24}})})]})),Object(Ne.jsx)(o.a,{children:Object(Ne.jsxs)(O.a,{position:"fixed",sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:[Object(Ne.jsxs)(u.a,{sx:{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"},children:[Object(Ne.jsx)(h.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"},width:{xs:"0",sm:"30%"}},children:"Password Manager"}),Object(Ne.jsxs)(Ye,{sx:{width:{xs:"70%",sm:"40%"}},children:[Object(Ne.jsx)(Be,{children:Object(Ne.jsx)(_.a,{})}),Object(Ne.jsx)(He,{placeholder:"Search\u2026"})]}),Object(Ne.jsx)(o.a,{sx:{display:"flex",width:"30%",justifyContent:"flex-end"},children:n})]}),Object(Ne.jsx)(We,{})]})})},Ke=n(15),qe=n(505),Ve=n(506),Je=n(517),$e=n(254),Qe=n.n($e),Xe=n(101),Ze=n.n(Xe),et=function(){var e=c.a.useState(!1),t=Object(Ke.a)(e,2),n=t[0],a=t[1],r=Object(d.b)(),i=function(){a(!1)},s=[{icon:Object(Ne.jsx)(Qe.a,{}),name:"New Entry",onClick:function(){r(Me.openNewEntryDialog()),i()}},{icon:Object(Ne.jsx)(Ze.a,{}),name:"New Category",onClick:function(){r(Me.openNewCategoryDialog()),i()}}];return Object(Ne.jsx)(qe.a,{ariaLabel:"Create ...",sx:{position:"fixed",bottom:36,right:36},icon:Object(Ne.jsx)(Ve.a,{}),onClose:i,onOpen:function(){a(!0)},open:n,children:s.map((function(e){return Object(Ne.jsx)(Je.a,{icon:e.icon,tooltipTitle:e.name,onClick:e.onClick},e.name)}))})},tt=n(518),nt=n(519),at=n(490),rt=n(501),ct=n(258),it=n.n(ct),st=n(256),ot=n.n(st),lt=n(486),ut=n(487),dt=n(168),jt=n.n(dt),bt=n(485),Ot=n(520),pt=n(488),gt=n(489),ht={entryGridLoadData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=20,n=Re.getState(),a=n.Data.SelectedCategory,r=Object.keys(n.Data.Passwords[a].entries),c=Math.ceil(r.length/t),i={},s=e||n.UI.EntryGrid.current_page;return r.slice((s-1)*t,s*t).forEach((function(e){i[e]=Re.getState().Data.Passwords[a].entries[e]})),{type:te.ENTRY_GRID_LOAD_DATA,total_pages:c,items:i,current_page:s}}},ft=ht,xt={Passwords:!0,Files:!1},Et=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.Data})),n=Object(r.useState)(xt),a=Object(Ke.a)(n,2),c=a[0],i=a[1],s=function(n,a){t.SelectedCategory!==a&&(e(de.CategoryActions.changeSelectedCategory(a)),e(ft.entryGridLoadData(1)))},l=function(e,t){i((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(ce.a)({},t,!y.a.get(e,t)))}))};return Object(Ne.jsxs)(tt.a,{variant:"permanent",sx:Object(ce.a)({width:240,flexShrink:0},"& .MuiDrawer-paper",{width:240,boxSizing:"border-box"}),children:[Object(Ne.jsx)(u.a,{}),Object(Ne.jsxs)(o.a,{sx:{overflow:"auto"},children:[Object(Ne.jsxs)(nt.a,{children:[Object(Ne.jsxs)(bt.a,{onClick:function(e){return l(0,"Passwords")},children:[Object(Ne.jsx)(lt.a,{children:Object(Ne.jsx)(ot.a,{})}),Object(Ne.jsx)(ut.a,{primary:"Passwords"}),c.Passwords?Object(Ne.jsx)(pt.a,{}):Object(Ne.jsx)(gt.a,{})]}),Object(Ne.jsx)(Ot.a,{in:c.Passwords,timeout:"auto",unmountOnExit:!0,children:Object(Ne.jsx)(nt.a,{component:"div",disablePadding:!0,children:Object.keys(t.Passwords).map((function(e){return Object(Ne.jsxs)(rt.a,{button:!0,onClick:function(t){return s(0,e)},sx:{pl:4,height:56},children:[Object(Ne.jsx)(lt.a,{children:t.SelectedCategory===e?Object(Ne.jsx)(jt.a,{}):Object(Ne.jsx)(Ze.a,{})}),Object(Ne.jsx)(ut.a,{primary:e})]},e)}))})})]}),Object(Ne.jsx)(at.a,{}),Object(Ne.jsxs)(nt.a,{children:[Object(Ne.jsxs)(bt.a,{onClick:function(e){return l(0,"Files")},children:[Object(Ne.jsx)(lt.a,{children:Object(Ne.jsx)(it.a,{})}),Object(Ne.jsx)(ut.a,{primary:"Files"}),c.Files?Object(Ne.jsx)(pt.a,{}):Object(Ne.jsx)(gt.a,{})]}),Object(Ne.jsx)(Ot.a,{in:c.Files,timeout:"auto",unmountOnExit:!0,children:Object(Ne.jsx)(nt.a,{component:"div",disablePadding:!0,children:Object.keys(t.Files).map((function(e){return Object(Ne.jsxs)(rt.a,{button:!0,onClick:function(t){return s(0,e)},sx:{pl:4},children:[Object(Ne.jsx)(lt.a,{children:t.SelectedCategory===e?Object(Ne.jsx)(jt.a,{}):Object(Ne.jsx)(Ze.a,{})}),Object(Ne.jsx)(ut.a,{primary:e})]},e)}))})})]}),Object(Ne.jsx)(at.a,{})]})]})},vt=n(521),mt=n(526),_t=n(522),wt=n(492),St=n(491),yt=n(26),At=n(523),Tt=n(495),Ct={category:""},Rt=function(e){var t=Object(yt.a)(),n=Object(St.a)(t.breakpoints.down("md")),a=Object(d.b)(),c=Object(r.useState)(Ct),i=Object(Ke.a)(c,2),s=i[0],o=i[1],l=function(){o((function(){return Ct})),a(Me.closeAllDialogs())};return Object(Ne.jsx)("div",{children:Object(Ne.jsxs)(vt.a,{fullScreen:n,open:e.isOpen,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[Object(Ne.jsx)(wt.a,{id:"responsive-dialog-title",children:"Create A New Category"}),Object(Ne.jsx)(_t.a,{children:Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{required:!0,label:"Category",id:"category",value:s.category,onChange:function(e){o(Object(w.a)(Object(w.a)({},s),{},Object(ce.a)({},e.target.id,e.target.value)))}})})}),Object(Ne.jsxs)(mt.a,{children:[Object(Ne.jsx)(D.a,{autoFocus:!0,onClick:l,children:"Cancel"}),Object(Ne.jsx)(D.a,{onClick:function(){s.category&&a(de.CategoryActions.createNewCategory(s.category)),l()},autoFocus:!0,children:"Create"})]})]})})},Gt=n(260),Dt=n.n(Gt),Nt=n(502),Pt=n(527),Lt=n(259),It=n(105),kt=n.n(It),Ft=n(528),Ut=n(497),Wt=n(508),Mt=n(525),Yt=function(e){var t=Object(yt.a)(),n=Object(d.c)((function(e){return e.User.Auth.masterPassword})),a=Object(St.a)(t.breakpoints.down("md")),c=Object(d.b)(),i={username:"",password:"",url:"http://",name:"",passwordStrength:{lowercase:!1,uppercase:!1,number:!1,symbol:!1,value:"Too weak"}};e.values&&(i=Object(w.a)(Object(w.a)({},i),e.values));var s=Object(r.useState)(i),l=Object(Ke.a)(s,2),u=l[0],j=l[1],b=Object(d.c)((function(e){return e.Data.SelectedCategory})),O=Object(d.c)((function(e){return e.User.Settings.passwordGenerator})),p=function(e){j(Object(w.a)(Object(w.a)({},u),{},Object(ce.a)({},e.target.id,e.target.value))),"password"===e.target.id&&f(e.target.value)},f=function(e){var t=function(e){return Object(Lt.passwordStrength)(e,[{id:0,value:"Too Weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:3,minLength:12},{id:3,value:"Strong",minDiversity:4,minLength:16},{id:4,value:"Very Strong",minDiversity:4,minLength:32},{id:5,value:"Very Strong",minDiversity:3,minLength:36}],"`-=~!@#$%^&*()_+/.,?><;'\":[]{}\\|")}(e),n=Object(w.a)({},i.passwordStrength);t.contains.forEach((function(e){n[e]=!0})),n.value=t.value,j((function(e){return Object(w.a)(Object(w.a)({},e),{},{passwordStrength:n})}))},x=function(){j((function(){return i})),c(Me.closeAllDialogs()),c(ft.entryGridLoadData())};return Object(Ne.jsx)("div",{children:Object(Ne.jsxs)(vt.a,{fullScreen:a,open:e.isOpen,onClose:x,"aria-labelledby":"responsive-dialog-title",children:[Object(Ne.jsx)(wt.a,{id:"responsive-dialog-title",children:"Create A New Entry"}),Object(Ne.jsxs)(_t.a,{children:[Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{required:!0,label:"Name",id:"name",value:u.name,onChange:p})}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{required:!0,label:"Username",id:"username",value:u.username,onChange:p})}),Object(Ne.jsxs)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",required:!0,children:[Object(Ne.jsx)(Nt.a,{htmlFor:"password",children:"Password"}),Object(Ne.jsx)(Wt.a,{label:"Password",id:"password",type:"text",value:u.password,onChange:p,endAdornment:Object(Ne.jsxs)(Pt.a,{position:"end",children:[Object(Ne.jsx)(h.a,{align:"right",minWidth:"5ch",children:u.password.length}),Object(Ne.jsx)(g.a,{"aria-label":"generate a new password",onClick:function(){var e=function(e){var t=new RegExp(e.exclude.split("").join("|"),"g"),n=[],a=kt.a.lower.replace(t,"");if(a.length>0&&n.push(a),e.uppercase){var r=kt.a.upper.replace(t,"");r.length>0&&n.push(r)}if(e.numbers){var c=kt.a.digits.replace(t,"");c.length>0&&n.push(c)}if(e.symbols){var i="!@#$%^&*_".replace(t,"");i.length>0&&n.push(i)}var s=3,o="";try{o=kt.a.randomPassword({characters:n,length:Number(e.length),avoidAmbiguous:!1,predicate:function(e){return(s-=1)<0||Boolean(e.charAt(0).match(/[a-zA-Z]/g))}})}catch(l){console.error(l)}return o}(O);j((function(t){return Object(w.a)(Object(w.a)({},t),{},{password:e})})),f(e)},children:Object(Ne.jsx)(Dt.a,{})})]})}),Object(Ne.jsx)(Mt.a,{children:Object(Ne.jsxs)(o.a,{alignContent:"center",alignSelf:"center",children:[Object(Ne.jsx)(Ft.a,{disabled:!0,control:Object(Ne.jsx)(Ut.a,{checked:u.passwordStrength.lowercase}),label:"Lowercase"}),Object(Ne.jsx)(Ft.a,{disabled:!0,control:Object(Ne.jsx)(Ut.a,{checked:u.passwordStrength.uppercase}),label:"Uppercase"}),Object(Ne.jsx)(Ft.a,{disabled:!0,control:Object(Ne.jsx)(Ut.a,{checked:u.passwordStrength.number}),label:"Number"}),Object(Ne.jsx)(Ft.a,{disabled:!0,control:Object(Ne.jsx)(Ut.a,{checked:u.passwordStrength.symbol}),label:"Symbol"}),Object(Ne.jsx)(h.a,{align:"right",color:"Highlight",variant:"caption",children:u.passwordStrength.value})]})})]}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{label:"URL",id:"url",value:u.url,onChange:p})})]}),Object(Ne.jsxs)(mt.a,{children:[Object(Ne.jsx)(D.a,{autoFocus:!0,onClick:x,children:"Cancel"}),Object(Ne.jsx)(D.a,{onClick:function(){u.username&&c(de.EntryActions.createNewEntry(b,u.username,u.password,u.url,u.name,n)),x()},autoFocus:!0,children:"Create"})]})]})})},Bt=function(e){var t=Object(yt.a)(),n=Object(St.a)(t.breakpoints.down("md")),a=Object(d.c)((function(e){return e.User.Auth.GoogleToken}));return Object(Ne.jsx)("div",{children:Object(Ne.jsx)(vt.a,{fullScreen:n,open:!Boolean(a),children:Object(Ne.jsx)(_t.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(Ne.jsx)(ke,{})})})})},Ht=n(529),zt=n(524),Kt={password:""},qt=function(e){var t=Object(yt.a)(),n=Object(St.a)(t.breakpoints.down("md")),a=Object(d.b)(),c=Object(r.useState)(Kt),i=Object(Ke.a)(c,2),s=i[0],o=i[1],l=function(e){return!1},u=function(){s&&(a(C.setMasterPassword(s.password)),o((function(){return Kt})),a(Me.closeAllDialogs()))};return Object(Ne.jsx)("div",{children:Object(Ne.jsxs)(vt.a,{fullScreen:n,open:e.isOpen,onClose:u,"aria-labelledby":"responsive-dialog-title",children:[Object(Ne.jsx)(wt.a,{id:"responsive-dialog-title",children:"Enter Your Master Password"}),Object(Ne.jsxs)(_t.a,{children:[Object(Ne.jsx)(Ht.a,{children:"Enter your master password"}),Object(Ne.jsxs)(At.a,{variant:"standard",fullWidth:!0,children:[Object(Ne.jsx)(Nt.a,{htmlFor:"password",children:"Password"}),Object(Ne.jsx)(zt.a,{id:"password",type:"text",value:s.password,onChange:function(e){l(e.target.value)&&o(Object(w.a)(Object(w.a)({},s),{},Object(ce.a)({},e.target.id,e.target.value)))}})]})]}),Object(Ne.jsx)(mt.a,{children:Object(Ne.jsx)(D.a,{onClick:function(){u()},autoFocus:!0,children:"Unlock"})})]})})},Vt=function(e){return{type:be.UPDATE_SETTINGS,newSettings:e}},Jt={forceRange:function(e,t,n){return e>n?n:e<t?t:e},forceMax:function(e,t){return e>t?t:e},forceMin:function(e,t){return e<t?t:e}},$t={min:5},Qt={min:1},Xt={min:1,max:500},Zt=function(e){var t=Object(yt.a)(),n=Object(St.a)(t.breakpoints.down("md")),a=Object(d.b)(),c=Object(d.c)((function(e){return e.User.Settings})),i=Object(r.useState)(c),s=Object(Ke.a)(i,2),o=s[0],l=s[1],u=function(e){var t=e.currentTarget.id,n=y.a.get(e.target,"value");"timeout"===t&&(n=Jt.forceMin(Number(n),$t.min)),"expire"===t&&(n=Jt.forceMin(Number(n),Qt.min)),l(Object(w.a)(Object(w.a)({},o),{},{security:Object(w.a)(Object(w.a)({},o.security),{},Object(ce.a)({},t,n))}))},j=function(e,t){var n=e.currentTarget.id,a=y.a.get(e.target,"value");"length"===n?Number(a)&&l(Object(w.a)(Object(w.a)({},o),{},{passwordGenerator:Object(w.a)(Object(w.a)({},o.passwordGenerator),{},Object(ce.a)({},n,Jt.forceRange(a,Xt.min,Xt.max)))})):l("exclude"===n?Object(w.a)(Object(w.a)({},o),{},{passwordGenerator:Object(w.a)(Object(w.a)({},o.passwordGenerator),{},Object(ce.a)({},n,String(a)))}):Object(w.a)(Object(w.a)({},o),{},{passwordGenerator:Object(w.a)(Object(w.a)({},o.passwordGenerator),{},Object(ce.a)({},n,t))}))},b=function(){o&&a(Me.closeAllDialogs())};return Object(Ne.jsx)("div",{children:Object(Ne.jsxs)(vt.a,{fullScreen:n,open:e.isOpen,onClose:b,"aria-labelledby":"responsive-dialog-title",children:[Object(Ne.jsx)(wt.a,{id:"responsive-dialog-title",children:"Settings"}),Object(Ne.jsxs)(_t.a,{children:[Object(Ne.jsx)(Ht.a,{sx:{marginBottom:"1em"},children:"Password generation settings"}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{label:"Password Length",id:"length",type:"number",InputProps:{inputProps:{min:Xt.min,max:Xt.max}},value:o.passwordGenerator.length,onChange:j})}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{label:"Exclude Characters",id:"exclude",value:o.passwordGenerator.exclude,onChange:j})}),Object(Ne.jsx)(Ft.a,{onChange:j,control:Object(Ne.jsx)(Ut.a,{id:"lowercase",checked:o.passwordGenerator.lowercase}),label:"Lowercase",disabled:!0}),Object(Ne.jsx)(Ft.a,{onChange:j,control:Object(Ne.jsx)(Ut.a,{id:"uppercase",checked:o.passwordGenerator.uppercase}),label:"Uppercase"}),Object(Ne.jsx)(Ft.a,{onChange:j,control:Object(Ne.jsx)(Ut.a,{id:"numbers",checked:o.passwordGenerator.numbers}),label:"Numbers"}),Object(Ne.jsx)(Ft.a,{onChange:j,control:Object(Ne.jsx)(Ut.a,{id:"symbols",checked:o.passwordGenerator.symbols}),label:"Symbols"}),Object(Ne.jsx)(Ht.a,{sx:{margin:"1em"},children:"Security settings"}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{label:"Lock after inactivity (seconds)",id:"timeout",type:"number",InputProps:{inputProps:{min:$t.min}},value:o.security.timeout,onChange:u})}),Object(Ne.jsx)(At.a,{variant:"outlined",fullWidth:!0,margin:"dense",children:Object(Ne.jsx)(Tt.a,{label:"Password expires after (days)",id:"expire",type:"number",InputProps:{inputProps:{min:Qt.min}},value:o.security.expire,onChange:u})})]}),Object(Ne.jsxs)(mt.a,{children:[Object(Ne.jsx)(D.a,{onClick:b,autoFocus:!0,children:"Cancel"}),Object(Ne.jsx)(D.a,{onClick:function(){a(Vt(o)),b()},autoFocus:!0,children:"Save"})]})]})})},en=function(){var e=Object(d.c)((function(e){return e.UI.Global}));return Object(Ne.jsxs)(Ne.Fragment,{children:[Object(Ne.jsx)(Bt,{isOpen:!0}),Object(Ne.jsx)(Rt,{isOpen:e.NewCategory}),Object(Ne.jsx)(Yt,{isOpen:e.NewEntry}),Object(Ne.jsx)(qt,{isOpen:e.MasterPassword}),Object(Ne.jsx)(Zt,{isOpen:e.UserSettings})]})},tn=n(509),nn=n(532),an=n(533),rn=n(534),cn=n(261),sn=n.n(cn),on=n(265),ln=n(530),un=n(531),dn={anchorEl:null,elevation:1},jn=function(e){var t=Object(r.useState)(dn),n=Object(Ke.a)(t,2),a=n[0],c=n[1],i=function(){var e=Object(F.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.clipboard){e.next=3;break}return e.next=3,navigator.clipboard.writeText(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e){c((function(t){return Object(w.a)(Object(w.a)({},t),{},{anchorEl:e.currentTarget})}))},o=function(){u()},l=function(){u()},u=function(){c((function(e){return Object(w.a)(Object(w.a)({},e),{},{anchorEl:null})}))},d=e.url&&"http://"!==e.url&&"https://"!==e.url,j=function(){7===a.elevation?c((function(e){return Object(w.a)(Object(w.a)({},e),{},{elevation:1})})):c((function(e){return Object(w.a)(Object(w.a)({},e),{},{elevation:7})}))},b="";return b=d?"https://www.google.com/s2/favicons?sz=64&domain=".concat(e.url.replace("http://","").replace("https://","")):"https://www.google.com/s2/favicons?sz=64&domain=nothing",Object(Ne.jsxs)(nn.a,{elevation:a.elevation,onMouseEnter:j,onMouseLeave:j,sx:{minWidth:"300px",maxWidth:"500px"},children:[Object(Ne.jsx)(an.a,{avatar:Object(Ne.jsx)(x.a,{sx:{bgcolor:"#fff"},src:b,"aria-label":"recipe",children:e.name.substring(0,1)}),action:Object(Ne.jsxs)("span",{children:[Object(Ne.jsx)(g.a,{onClick:s,children:Object(Ne.jsx)(sn.a,{})}),Object(Ne.jsxs)(on.a,{id:"menu-appbar",anchorEl:a.anchorEl,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(a.anchorEl),onClose:u,children:[Object(Ne.jsx)(ln.a,{onClick:o,children:"Edit"}),Object(Ne.jsx)(ln.a,{onClick:l,children:"Delete"})]})]}),title:Object(Ne.jsx)(h.a,{noWrap:!0,maxWidth:200,children:e.name}),subheader:function(){if(d)return Object(Ne.jsx)(un.a,{underline:"hover",variant:"body2",href:e.url,target:"_blank",children:e.url})}()}),Object(Ne.jsxs)(rn.a,{children:[Object(Ne.jsxs)(h.a,{noWrap:!0,gutterBottom:!0,variant:"body2",color:"text.secondary",onClick:function(){return i(e.user)},children:["Username: ",e.user]}),Object(Ne.jsxs)(h.a,{noWrap:!0,gutterBottom:!0,variant:"body2",color:"text.secondary",onClick:function(){return i(e.pass)},children:["Password: ",e.pass]})]})]})},bn=n(496),On=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.UI.EntryGrid})),n=[];Object.keys(t.items).forEach((function(e){var a=t.items[e];n.push(Object(Ne.jsx)(tn.a,{item:!0,xs:!0,children:Object(Ne.jsx)(jn,{name:a.name,url:a.url,user:a.user,pass:a.pass})},a.id))}));var a=Object(Ne.jsx)(Ne.Fragment,{});return t.total_pages>0&&(a=Object(Ne.jsx)(bn.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},shape:"rounded",variant:"outlined",color:"primary",showFirstButton:!0,showLastButton:!0,count:t.total_pages,page:t.current_page,boundaryCount:2,onChange:function(t,n){e(ft.entryGridLoadData(n))}})),Object(Ne.jsxs)(N.a,{spacing:4,children:[Object(Ne.jsx)(o.a,{sx:{flexGrow:1},children:Object(Ne.jsx)(tn.a,{container:!0,spacing:2,children:n})}),a]})},pn=function(){return Object(Ne.jsxs)(o.a,{sx:{display:"flex"},children:[Object(Ne.jsx)(en,{}),Object(Ne.jsx)(l.a,{}),Object(Ne.jsx)(ze,{}),Object(Ne.jsx)(Et,{}),Object(Ne.jsxs)(o.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(Ne.jsx)(u.a,{}),Object(Ne.jsx)(On,{})]}),Object(Ne.jsx)(et,{})]})},gn=n(484),hn=n(500),fn=n(262),xn=n.n(fn),En=n(498),vn=c.a.forwardRef((function(e,t){return Object(Ne.jsx)(En.a,Object(w.a)({elevation:6,ref:t,variant:"filled"},e))}));vn.displayName="Alert";var mn=function(e){var t=c.a.useState(!0),n=Object(Ke.a)(t,2),a=n[0],r=n[1],i=function(e,t){"clickaway"!==t&&r(!1)},s=Object(Ne.jsx)(c.a.Fragment,{children:Object(Ne.jsx)(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:i,children:Object(Ne.jsx)(xn.a,{fontSize:"small"})})});return Object(Ne.jsx)(hn.a,{open:a,TransitionComponent:gn.a,autoHideDuration:e.delay||2e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:i,action:s,children:Object(Ne.jsx)(vn,{onClose:i,severity:e.status,sx:{width:"100%"},children:e.message})})},_n=function(){var e=Object(d.c)((function(e){return e.UI.Snackbar}));return""!==e.message?Object(Ne.jsx)(mn,{message:e.message,status:e.status}):Object(Ne.jsx)(Ne.Fragment,{})},wn=n(535),Sn=function(e){return Object(Ne.jsx)(wn.a,Object(w.a)({},e))},yn=n(263),An=function(){return Object(Ne.jsxs)(N.a,{sx:{marginTop:"50px"},spacing:3,alignContent:"center",alignItems:"center",children:[Object(Ne.jsx)(Sn,{}),Object(Ne.jsx)(h.a,{children:"Loading ..."})]})},Tn=function(){return Object(Ne.jsx)(Ne.Fragment,{children:Object(Ne.jsx)(pn,{})})},Cn=function(){var e=Object(d.b)();!function(){var e=Object(d.b)(),t={onSuccess:function(t){return Le(t,e)},onFailure:function(t){return Ie(t,e)}};Object(A.useGoogleLogin)(Object.assign({},Pe,t))}(),Object(yn.a)((function(){e(Me.endAppLoading())}),3e3);var t=Object(d.c)((function(e){return e.UI.Global.AppLoading})),n=Object(Ne.jsx)(An,{});return t||(n=Object(Ne.jsx)(Tn,{})),Object(Ne.jsxs)("div",{className:"App",children:[Object(Ne.jsx)(_n,{}),n]})},Rn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,536)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Gn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Dn(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(Ne.jsx)(c.a.StrictMode,{children:Object(Ne.jsx)(d.a,{store:Re,children:Object(Ne.jsx)(Cn,{})})}),document.getElementById("root")),Rn(),function(e){if("serviceWorker"in navigator){if(new URL("/passwordmanager_web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/passwordmanager_web","/service-worker.js");Gn?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Dn(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Dn(t,e)}))}}()}},[[418,1,2]]]);