(this.webpackJsonpgdrive_passwordmanager=this.webpackJsonpgdrive_passwordmanager||[]).push([[0],{332:function(e,t){},334:function(e,t){},344:function(e,t){},346:function(e,t){},373:function(e,t){},374:function(e,t){},379:function(e,t){},381:function(e,t){},388:function(e,t){},407:function(e,t){},424:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(55),s=n.n(i),o=n(501),u=n(490),l=n(502),j=n(3),O=n(4),d=n(45),b=n(503),g=n(78),h=n(136),E=n(32),p=n(255),f=n.n(p),x=n(21),_=n(496),v=n(13),S=n(51),w=n.n(S),A=n(107),m={LOGIN_GOOGLE:"LOGIN_GOOGLE",SET_MASTER_PASSWORD:"SET_MASTER_PASSWORD",CLEAR_MASTER_PASSWORD:"CLEAR_MASTER_PASSWORD",LOGOUT:"LOGOUT"},y={loginUsingGoogle:function(e){return{type:m.LOGIN_GOOGLE,googleLoginResponse:e}},setMasterPassword:function(e){return{type:m.SET_MASTER_PASSWORD,masterPassword:e}},clear_master_password:function(){return{type:m.CLEAR_MASTER_PASSWORD}},logout:function(){return{type:m.LOGOUT}}};!function(e){e.success="success",e.info="info",e.warning="warning",e.error="error"}(a||(a={}));var C={VIEW_SNACKBAR_ALERT:"VIEW_SNACKBAR_ALERT"},T={viewSnackbarAlert:function(e,t){return{type:C.VIEW_SNACKBAR_ALERT,status:e,message:t}}},R=n(38),N=n.n(R),D=n(69),L=n(67),G=n(68),I=n(251),P=n.n(I),k=n(66),F=(n(323),n(324),{message:"",status:a.info}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return t.type===C.VIEW_SNACKBAR_ALERT?Object(v.a)(Object(v.a)({},e),{},{message:t.message,status:t.status}):e},U={SET_PROGRESS_VALUE:"SET_PROGRESS_VALUE",ENABLE_INDETERMINATE_PROGRESS_BAR:"ENABLE_INDETERMINATE_PROGRESS_BAR",DISABLE_INDETERMINATE_PROGRESS_BAR:"DISABLE_INDETERMINATE_PROGRESS_BAR"},Y={progress:0,indeterminate:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.DISABLE_INDETERMINATE_PROGRESS_BAR:return Object(v.a)(Object(v.a)({},e),{},{progress:0,indeterminate:!1});case U.ENABLE_INDETERMINATE_PROGRESS_BAR:return Object(v.a)(Object(v.a)({},e),{},{progress:0,indeterminate:!0});case U.SET_PROGRESS_VALUE:return Object(v.a)(Object(v.a)({},e),{},{progress:t.progress,indeterminate:!1});default:return e}},B={END_APP_LOADING:"END_APP_LOADING",OPEN_NEW_ENTRY_DIALOG:"OPEN_NEW_ENTRY_DIALOG",OPEN_NEW_CATEGORY_DIALOG:"OPEN_NEW_CATEGORY_DIALOG",OPEN_MASTER_PASSWORD_DIALOG:"OPEN_MASTER_PASSWORD_DIALOG",CLOSE_DIALOG:"CLOSE_DIALOG"},H={AppLoading:!0,NewEntry:!1,NewCategory:!1,MasterPassword:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.END_APP_LOADING:return Object(v.a)(Object(v.a)({},e),{},{AppLoading:!1});case B.OPEN_NEW_CATEGORY_DIALOG:return Object(v.a)(Object(v.a)({},e),{},{NewEntry:!1,NewCategory:!0});case B.OPEN_NEW_ENTRY_DIALOG:return Object(v.a)(Object(v.a)({},e),{},{NewEntry:!0,NewCategory:!1});case B.OPEN_MASTER_PASSWORD_DIALOG:return Object(v.a)(Object(v.a)({},e),{},{NewEntry:!1,NewCategory:!1,MasterPassword:!0});case B.CLOSE_DIALOG:return Object(v.a)(Object(v.a)({},e),{},{NewEntry:!1,NewCategory:!1});default:return e}},V=Object(k.combineReducers)({Global:K,ProgressBar:M,Snackbar:W}),z={CREATE_ENTRY:"CREATE_ENTRY",DELETE_ENTRY:"DELETE_ENTRY"},J={CREATE_CATEGORY:"CREATE_CATEGORY",DELETE_CATEGORY:"DELETE_CATEGORY",CHANGE_SELECTED_CATEGORY:"CHANGE_SELECTED_CATEGORY"},q=function(){var e="Default";return{Data:Object(j.a)({},e,{entries:{}}),SelectedCategory:e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.CREATE_ENTRY:var n=w.a.get(t,"entry_user"),a=w.a.get(t,"entry_pass",""),r=w.a.get(t,"url","");if(n){var c="_"+Math.random().toString(36).substr(2,16),i={id:c,user:n,pass:a,url:r},s=e.SelectedCategory;return e.Data[s].entries[c]=i,Object(v.a)(Object(v.a)({},e),{},{Data:Object(v.a)(Object(v.a)({},e.Data),{},Object(j.a)({},s,{entries:e.Data[s].entries}))})}return e;case J.CHANGE_SELECTED_CATEGORY:return Object(v.a)(Object(v.a)({},e),{},{SelectedCategory:t.category_name});case J.CREATE_CATEGORY:return Object(v.a)(Object(v.a)({},e),{},{Data:Object(v.a)(Object(v.a)({},e.Data),{},Object(j.a)({},t.category_name,{entries:{}}))});default:return e}},X={EntryActions:{createNewEntry:function(e,t,n,a){return{type:z.CREATE_ENTRY,category_name:e,entry_user:t,entry_pass:n,url:a}},deleteEntry:function(e,t){return{type:z.DELETE_ENTRY,category_name:e,entry_id:t}}},CategoryActions:{createNewCategory:function(e){return{type:J.CREATE_CATEGORY,category_name:e}},deleteCategory:function(e){return{type:J.DELETE_CATEGORY,category_name:e}},changeSelectedCategory:function(e){return{type:J.CHANGE_SELECTED_CATEGORY,category_name:e}}}},Z=Q,$={UPDATE_SETTINGS:"UPDATE_SETTINGS"},ee={passwordGen:{}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;return t.type===$.UPDATE_SETTINGS?Object(v.a)(Object(v.a)({},e),t.newSettings):e},ne={GoogleToken:void 0,masterPassword:void 0},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.LOGIN_GOOGLE:return Object(v.a)(Object(v.a)({},e),{},{GoogleToken:t.googleLoginResponse});case m.SET_MASTER_PASSWORD:return Object(v.a)(Object(v.a)({},e),{},{masterPassword:t.masterPassword});case m.LOGOUT:return ne;default:return e}},re=Object(k.combineReducers)({Settings:te,Auth:ae}),ce=Object(k.combineReducers)({UI:V,User:re,Data:Z});var ie=Object(k.createStore)(ce,undefined),se=function(){function e(){Object(L.a)(this,e),this.API_KEY=w.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"/passwordmanager_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),"REACT_APP_GOOGLE_API_KEY",""),this.axiosInstance=null;var t=w.a.get(ie.getState().User.Auth.GoogleToken,"tokenObj.token_type"),n=w.a.get(ie.getState().User.Auth.GoogleToken,"tokenObj.access_token");this.axiosInstance=P.a.create({baseURL:"https://www.googleapis.com/drive/v3/",timeout:3e3,headers:{Authorization:"".concat(t," ").concat(n)},params:{key:this.API_KEY}})}return Object(G.a)(e,[{key:"listFiles",value:function(){var e=Object(D.a)(N.a.mark((function e(){var t,n,a,r,c=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]&&c[0],n=c.length>1?c[1]:void 0,!this.axiosInstance){e.next=9;break}return a=Object(v.a)({},n),t||(a.q="trashed=false"),e.next=7,this.axiosInstance("files",{params:a});case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createFile",value:function(){var e=Object(D.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.axiosInstance){e.next=5;break}return e.next=3,this.axiosInstance("files",{method:"POST",data:Object(v.a)(Object(v.a)({},n),{},{name:t})});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createFolder",value:function(){var e=Object(D.a)(N.a.mark((function e(t,n){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.createFile(t,Object(v.a)(Object(v.a)({},n),{},{mimeType:"application/vnd.google-apps.folder"})));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getFileByName",value:function(){var e=Object(D.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.listFiles();case 2:return n=e.sent.files,e.abrupt("return",w.a.find(n,{name:t}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createInitialFiles",value:function(){var e=Object(D.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getFileByName("PasswordManagerData");case 2:void 0===e.sent&&this.createFolder("PasswordManagerData",{folderColorRgb:"Red"}).then((function(e){Promise.all([t.createFile("DO NOT EDIT ANYTHING IN THIS FOLDER",{parents:[e.id]}),t.createFolder("Data",{parents:[e.id]}),t.createFile("Settings.enc",{parents:[e.id]})])}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return null===this.instance&&(this.instance=new e),this.instance}}]),e}();se.instance=null;var oe=se,ue=n(1),le={clientId:w.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"/passwordmanager_web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),"REACT_APP_GOOGLE_CLIENT_ID",""),cookiePolicy:"single_host_origin",scope:["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.appdata"].join(" "),isSignedIn:!0},je=function(e,t){t(y.loginUsingGoogle(e)),t(T.viewSnackbarAlert(a.success,"Google Login Successful")),oe.getInstance().createInitialFiles()},Oe=function(e,t){console.error(e),t(T.viewSnackbarAlert(a.error,"Google Login Failed"))},de=function(){var e=Object(x.b)();return Object(ue.jsx)("div",{children:Object(ue.jsx)(A.GoogleLogin,Object(v.a)(Object(v.a)({},le),{},{onSuccess:function(t){return je(t,e)},onFailure:function(t){return Oe(t,e)}}))})},be=function(){var e=Object(x.b)();return Object(ue.jsx)("div",{children:Object(ue.jsx)(A.GoogleLogout,Object(v.a)(Object(v.a)({},le),{},{onLogoutSuccess:function(){e(y.logout())},buttonText:"Logout"}))})},ge=n(507),he=function(){var e=Object(x.c)((function(e){return e.UI.ProgressBar})),t={value:e.progress,variant:"determinate"};return e.indeterminate&&(t.variant="indeterminate",t.value=0),0!==t.value&&"determinate"===t.variant||e.indeterminate?Object(ue.jsx)(ge.a,Object(v.a)({},t)):Object(ue.jsx)(ue.Fragment,{})},Ee=Object(O.a)("div")((function(e){var t=e.theme;return Object(j.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(d.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(d.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),pe=Object(O.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),fe=Object(O.a)(E.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(j.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),xe=function(){var e=Object(x.c)((function(e){return e.User.Auth.GoogleToken})),t=Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(de,{})});return e&&(t=Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(be,{}),Object(ue.jsx)(g.a,{size:"large",edge:"end",color:"inherit",children:Object(ue.jsx)(_.a,{alt:e.profileObj.name,src:e.profileObj.imageUrl,sx:{width:24,height:24}})})]})),Object(ue.jsx)(o.a,{children:Object(ue.jsxs)(b.a,{position:"fixed",sx:{zIndex:function(e){return e.zIndex.drawer+1}},children:[Object(ue.jsxs)(l.a,{children:[Object(ue.jsx)(h.a,{variant:"h6",noWrap:!0,component:"div",children:"Password Manager"}),Object(ue.jsxs)(Ee,{children:[Object(ue.jsx)(pe,{children:Object(ue.jsx)(f.a,{})}),Object(ue.jsx)(fe,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(ue.jsx)(o.a,{sx:{flexGrow:1}}),Object(ue.jsx)(o.a,{sx:{display:{xs:"none",md:"flex"}},children:t})]}),Object(ue.jsx)(he,{})]})})},_e=n(9),ve={endAppLoading:function(){return{type:B.END_APP_LOADING}},openNewCategoryDialog:function(){return{type:B.OPEN_NEW_CATEGORY_DIALOG}},openNewEntryDialog:function(){return{type:B.OPEN_NEW_ENTRY_DIALOG}},closeAllDialogs:function(){return{type:B.CLOSE_DIALOG}}},Se=n(497),we=n(498),Ae=n(504),me=n(256),ye=n.n(me),Ce=n(127),Te=n.n(Ce),Re=function(){var e=c.a.useState(!1),t=Object(_e.a)(e,2),n=t[0],a=t[1],r=Object(x.b)(),i=function(){a(!1)},s=[{icon:Object(ue.jsx)(ye.a,{}),name:"New Entry",onClick:function(){r(ve.openNewEntryDialog()),i()}},{icon:Object(ue.jsx)(Te.a,{}),name:"New Category",onClick:function(){r(ve.openNewCategoryDialog()),i()}}];return Object(ue.jsx)(Se.a,{ariaLabel:"Create ...",sx:{position:"absolute",bottom:36,right:36},icon:Object(ue.jsx)(we.a,{}),onClose:i,onOpen:function(){a(!0)},open:n,children:s.map((function(e){return Object(ue.jsx)(Ae.a,{icon:e.icon,tooltipTitle:e.name,onClick:e.onClick},e.name)}))})},Ne=n(505),De=n(506),Le=n(488),Ge=n(493),Ie=n(269),Pe=n(487),ke=n(258),Fe=n.n(ke),We=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.Data.Data})),n=Object(x.c)((function(e){return e.Data.SelectedCategory}));return Object(ue.jsxs)(Ne.a,{variant:"permanent",sx:Object(j.a)({width:200,flexShrink:0},"& .MuiDrawer-paper",{width:200,boxSizing:"border-box"}),children:[Object(ue.jsx)(l.a,{}),Object(ue.jsxs)(o.a,{sx:{overflow:"auto"},children:[Object(ue.jsx)(De.a,{children:Object.keys(t).map((function(t){return Object(ue.jsxs)(Ge.a,{button:!0,onClick:function(n){return a=t,void e(X.CategoryActions.changeSelectedCategory(a));var a},children:[Object(ue.jsx)(Ie.a,{children:n===t?Object(ue.jsx)(Fe.a,{}):Object(ue.jsx)(Te.a,{})}),Object(ue.jsx)(Pe.a,{primary:t})]},t)}))}),Object(ue.jsx)(Le.a,{})]})]})},Ue=n(79),Ye=n(508),Me=n(513),Be=n(510),He=n(511),Ke=n(509),Ve=n(489),ze=n(25),Je=n(110),qe=n(174),Qe=n(512),Xe={category:""},Ze=function(e){var t=Object(ze.a)(),n=Object(Ve.a)(t.breakpoints.down("md")),a=Object(x.b)(),c=Object(r.useState)(Xe),i=Object(_e.a)(c,2),s=i[0],o=i[1],u=function(){o((function(){return Xe})),a(ve.closeAllDialogs())};return Object(ue.jsx)("div",{children:Object(ue.jsxs)(Ye.a,{fullScreen:n,open:e.isOpen,onClose:u,"aria-labelledby":"responsive-dialog-title",children:[Object(ue.jsx)(Ke.a,{id:"responsive-dialog-title",children:"Create A New Category"}),Object(ue.jsxs)(Be.a,{children:[Object(ue.jsx)(He.a,{children:"Create a new category"}),Object(ue.jsxs)(Je.a,{variant:"standard",fullWidth:!0,children:[Object(ue.jsx)(qe.a,{htmlFor:"category",children:"Category"}),Object(ue.jsx)(Qe.a,{id:"category",type:"text",value:s.category,onChange:function(e){o(Object(v.a)(Object(v.a)({},s),{},Object(j.a)({},e.target.id,e.target.value)))}})]})]}),Object(ue.jsxs)(Me.a,{children:[Object(ue.jsx)(Ue.a,{autoFocus:!0,onClick:u,children:"Cancel"}),Object(ue.jsx)(Ue.a,{onClick:function(){s.category&&a(X.CategoryActions.createNewCategory(s.category)),u()},autoFocus:!0,children:"Create"})]})]})})},$e=n(262),et=n.n($e),tt=n(514),nt=n(260),at=n.n(nt),rt=n(261),ct=n(437),it=n(272),st={username:"",password:"",url:"",passwordStrength:{lowercase:!1,uppercase:!1,number:!1,symbol:!1,value:""}},ot=function(e){var t=Object(ze.a)(),n=Object(Ve.a)(t.breakpoints.down("md")),a=Object(x.b)(),c=Object(r.useState)(st),i=Object(_e.a)(c,2),s=i[0],u=i[1],l=Object(x.c)((function(e){return e.Data.SelectedCategory})),O=Object(x.c)((function(e){return e.User.Settings.passwordGen})),d=function(e){u(Object(v.a)(Object(v.a)({},s),{},Object(j.a)({},e.target.id,e.target.value))),"password"===e.target.id&&b(e.target.value)},b=function(e){var t=function(e){return Object(rt.passwordStrength)(e,[{id:0,value:"Too weak",minDiversity:0,minLength:0},{id:1,value:"Weak",minDiversity:2,minLength:6},{id:2,value:"Medium",minDiversity:3,minLength:12},{id:3,value:"Strong",minDiversity:4,minLength:16},{id:4,value:"Very Strong",minDiversity:4,minLength:32},{id:5,value:"Very Strong",minDiversity:3,minLength:36}])}(e),n=Object(v.a)({},st.passwordStrength);t.contains.forEach((function(e){n[e]=!0})),n.value=t.value,u((function(e){return Object(v.a)(Object(v.a)({},e),{},{passwordStrength:n})}))},E=function(){u((function(){return st})),a(ve.closeAllDialogs())};return Object(ue.jsx)("div",{children:Object(ue.jsxs)(Ye.a,{fullScreen:n,open:e.isOpen,onClose:E,"aria-labelledby":"responsive-dialog-title",children:[Object(ue.jsx)(Ke.a,{id:"responsive-dialog-title",children:"Create A New Entry"}),Object(ue.jsxs)(Be.a,{children:[Object(ue.jsx)(He.a,{children:"Create a new entry"}),Object(ue.jsxs)(Je.a,{variant:"standard",fullWidth:!0,children:[Object(ue.jsx)(qe.a,{htmlFor:"username",children:"Username"}),Object(ue.jsx)(Qe.a,{id:"username",type:"text",value:s.username,onChange:d})]}),Object(ue.jsxs)(Je.a,{variant:"standard",fullWidth:!0,children:[Object(ue.jsx)(qe.a,{htmlFor:"password",children:"Password"}),Object(ue.jsx)(Qe.a,{id:"password",type:"text",value:s.password,onChange:d,endAdornment:Object(ue.jsxs)(tt.a,{position:"end",children:[Object(ue.jsx)(h.a,{align:"right",minWidth:"5ch",children:s.password.length}),Object(ue.jsx)(g.a,{"aria-label":"generate a new password",onClick:function(){var e=function(e){return at.a.generate(Object(v.a)(Object(v.a)({},e),{},{strict:!0}))}(O);u((function(t){return Object(v.a)(Object(v.a)({},t),{},{password:e})})),b(e)},children:Object(ue.jsx)(et.a,{})})]})})]}),Object(ue.jsxs)(o.a,{children:[Object(ue.jsx)(ct.a,{disabled:!0,control:Object(ue.jsx)(it.a,{checked:s.passwordStrength.lowercase}),label:"Lowercase"}),Object(ue.jsx)(ct.a,{disabled:!0,control:Object(ue.jsx)(it.a,{checked:s.passwordStrength.uppercase}),label:"Uppercase"}),Object(ue.jsx)(ct.a,{disabled:!0,control:Object(ue.jsx)(it.a,{checked:s.passwordStrength.number}),label:"Number"}),Object(ue.jsx)(ct.a,{disabled:!0,control:Object(ue.jsx)(it.a,{checked:s.passwordStrength.symbol}),label:"Symbol"})]}),Object(ue.jsx)(o.a,{children:Object(ue.jsx)(h.a,{children:s.passwordStrength.value+" "})}),Object(ue.jsxs)(Je.a,{variant:"standard",fullWidth:!0,children:[Object(ue.jsx)(qe.a,{htmlFor:"url",children:"URL"}),Object(ue.jsx)(Qe.a,{id:"url",type:"text",value:s.url,onChange:d})]})]}),Object(ue.jsxs)(Me.a,{children:[Object(ue.jsx)(Ue.a,{autoFocus:!0,onClick:E,children:"Cancel"}),Object(ue.jsx)(Ue.a,{onClick:function(){s.username&&a(X.EntryActions.createNewEntry(l,s.username,s.password,s.url)),E()},autoFocus:!0,children:"Create"})]})]})})},ut={password:""},lt=function(e){var t=Object(ze.a)(),n=Object(Ve.a)(t.breakpoints.down("md")),a=Object(x.b)(),c=Object(r.useState)(ut),i=Object(_e.a)(c,2),s=i[0],o=i[1],u=function(e){return!1},l=function(){s&&(a(y.setMasterPassword(s.password)),o((function(){return ut})),a(ve.closeAllDialogs()))};return Object(ue.jsx)("div",{children:Object(ue.jsxs)(Ye.a,{fullScreen:n,open:e.isOpen,onClose:l,"aria-labelledby":"responsive-dialog-title",children:[Object(ue.jsx)(Ke.a,{id:"responsive-dialog-title",children:"Enter Your Master Password"}),Object(ue.jsxs)(Be.a,{children:[Object(ue.jsx)(He.a,{children:"Enter your master password"}),Object(ue.jsxs)(Je.a,{variant:"standard",fullWidth:!0,children:[Object(ue.jsx)(qe.a,{htmlFor:"password",children:"Password"}),Object(ue.jsx)(Qe.a,{id:"password",type:"text",value:s.password,onChange:function(e){u(e.target.value)&&o(Object(v.a)(Object(v.a)({},s),{},Object(j.a)({},e.target.id,e.target.value)))}})]})]}),Object(ue.jsx)(Me.a,{children:Object(ue.jsx)(Ue.a,{onClick:function(){l()},autoFocus:!0,children:"Check"})})]})})},jt=function(){var e=Object(x.c)((function(e){return e.UI.Global}));return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(Ze,{isOpen:e.NewCategory}),Object(ue.jsx)(ot,{isOpen:e.NewEntry}),Object(ue.jsx)(lt,{isOpen:e.MasterPassword})]})},Ot=n(263);function dt(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var bt=function(){var e=Object(x.c)((function(e){return e.Data.SelectedCategory})),t=Object(x.c)((function(t){return t.Data.Data[e]})),n=function(){var e=Object(r.useState)(dt()),t=Object(_e.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){function e(){a(dt())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().height,a=Object.values(t.entries),c={debug:function(e){console.log(e)},info:function(e){console.log(e)},warn:function(e){console.log(e)},error:function(e){console.log(e)}},i=function(){var e=Object(D.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Single Click"),!navigator.clipboard){e.next=4;break}return e.next=4,navigator.clipboard.writeText(t.value);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ue.jsx)("div",{style:{height:n-n/3,width:"100%"},children:Object(ue.jsx)("div",{style:{display:"flex",height:"100%"},children:Object(ue.jsx)("div",{style:{flexGrow:1},children:Object(ue.jsx)(Ot.a,{rows:a,columns:[{field:"user",headerName:"Username",width:500},{field:"pass",headerName:"Password",width:500},{field:"url",headerName:"URL",width:500}],logger:c,onCellClick:i,onCellDoubleClick:function(){console.log("Double Click")}})})})})},gt=function(){return Object(ue.jsxs)(o.a,{sx:{display:"flex"},children:[Object(ue.jsx)(jt,{}),Object(ue.jsx)(u.a,{}),Object(ue.jsx)(xe,{}),Object(ue.jsx)(We,{}),Object(ue.jsxs)(o.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(ue.jsx)(l.a,{}),Object(ue.jsx)(bt,{}),Object(ue.jsx)(Re,{})]})]})},ht=n(486),Et=n(494),pt=n(264),ft=n.n(pt),xt=n(492),_t=c.a.forwardRef((function(e,t){return Object(ue.jsx)(xt.a,Object(v.a)({elevation:6,ref:t,variant:"filled"},e))}));_t.displayName="Alert";var vt=function(e){var t=c.a.useState(!0),n=Object(_e.a)(t,2),a=n[0],r=n[1],i=function(e,t){"clickaway"!==t&&r(!1)},s=Object(ue.jsx)(c.a.Fragment,{children:Object(ue.jsx)(g.a,{size:"small","aria-label":"close",color:"inherit",onClick:i,children:Object(ue.jsx)(ft.a,{fontSize:"small"})})});return Object(ue.jsx)(Et.a,{open:a,TransitionComponent:ht.a,autoHideDuration:e.delay||3e3,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:i,action:s,children:Object(ue.jsx)(_t,{onClose:i,severity:e.status,sx:{width:"100%"},children:e.message})})},St=function(){var e=Object(x.c)((function(e){return e.UI.Snackbar}));return""!==e.message?Object(ue.jsx)(vt,{message:e.message,status:e.status}):Object(ue.jsx)(ue.Fragment,{})},wt=n(436),At=function(){return Object(ue.jsx)(wt.a,{})},mt=n(265),yt=function(){return Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(At,{})})},Ct=function(){return Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsx)(gt,{})})},Tt=function(){var e=Object(x.b)();!function(){var e=Object(x.b)(),t={onSuccess:function(t){return je(t,e)},onFailure:function(t){return Oe(t,e)}};Object(A.useGoogleLogin)(Object.assign({},le,t))}(),Object(mt.a)((function(){e(ve.endAppLoading())}),3e3);var t=Object(x.c)((function(e){return e.UI.Global.AppLoading})),n=Object(ue.jsx)(yt,{});return t||(n=Object(ue.jsx)(Ct,{})),Object(ue.jsxs)("div",{className:"App",children:[Object(ue.jsx)(St,{}),n]})},Rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,517)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(ue.jsx)(c.a.StrictMode,{children:Object(ue.jsx)(x.a,{store:ie,children:Object(ue.jsx)(Tt,{})})}),document.getElementById("root")),Rt()}},[[424,1,2]]]);
//# sourceMappingURL=main.0e7bc066.chunk.js.map