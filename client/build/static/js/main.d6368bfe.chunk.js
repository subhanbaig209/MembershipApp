(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{125:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),c=r.n(a),s=r(80),o=r.n(s),i=(r(94),r(10)),l=r(11),u=r(13),m=r(12),d=r(52),b=r(9),h=(r(95),r(96),r(18)),j=r(37),p=r(49),f=r(30),O=r(44),x=r(26),v=c.a.createContext(""),g=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchText:""},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsx)(v.Provider,{value:{state:this.state,setSearchText:function(t){console.log("setSearchText - "+t),e.setState({searchText:t})}},children:this.props.children})}}]),r}(a.Component),S=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={searchText:""},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this,t=localStorage.user_email?"logout":"login";return Object(n.jsxs)(p.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(n.jsx)(p.a.Brand,{href:"/",children:"Masjid Membership"}),Object(n.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(j.a,{className:"mr-auto",children:[Object(n.jsx)(O.LinkContainer,{to:"/",children:Object(n.jsx)(j.a.Link,{children:"home"})}),Object(n.jsx)(O.LinkContainer,{to:"/members",children:Object(n.jsx)(j.a.Link,{href:"/members",children:"members"})}),Object(n.jsx)(O.LinkContainer,{to:"/printout",children:Object(n.jsx)(j.a.Link,{href:"/printout",children:"printout"})}),Object(n.jsx)(O.LinkContainer,{to:"/export",children:Object(n.jsx)(j.a.Link,{href:"/export",children:"export"})}),Object(n.jsx)(O.LinkContainer,{to:"/login",children:Object(n.jsx)(j.a.Link,{href:"/login",children:t})})]}),Object(n.jsx)(v.Consumer,{children:function(t){return Object(n.jsxs)(f.a,{inline:!0,children:[Object(n.jsx)(x.a,{type:"text",placeholder:"search",className:"mr-sm-2",onChange:function(t){return e.setState({searchText:t.target.value})},onKeyPress:function(r){13===r.charCode&&(r.preventDefault(),t.setSearchText(e.state.searchText))}}),Object(n.jsx)(h.a,{variant:"outline-success",onClick:function(){t.setSearchText(e.state.searchText)},children:"search"})]})}})]})]})}}]),r}(a.Component),C=r(8),y=r.n(C),w=r(19),k=r(82),M=r(34),L=r(20),T=r.n(L),N=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={stats:{},error:""},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/stats");case 3:t=e.sent,this.setState({members:t.data,error:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0.message}),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=localStorage.user_displayName;return Object(n.jsx)(k.a,{fluid:!0,children:Object(n.jsxs)(M.a,{children:[Object(n.jsxs)("h1",{children:["Welcome to MCE - Muslims Centre of Excellence ",e]}),Object(n.jsx)("p",{}),Object(n.jsx)("br",{}),Object(n.jsxs)("p",{children:["For information about getting access to this application please contact ",Object(n.jsx)("a",{href:"mailto:naeemanaeem@gmail.com",children:"MCE"})]})]})})}}]),r}(a.Component),F=r(86),E=r(85),A=r(84),H=r(83),I=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleEditButtonClick=function(t){e.props.handleMemberEdit(e.props.member)},e.handleRemoveButtonClick=function(t){e.props.handleMemberRemove(e.props.member)},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.props.member.HouseNo+" "+this.props.member.Street,t=this.props.member.Firstname+" "+this.props.member.Lastname;return Object(n.jsxs)("tr",{className:"border-bottom",children:[Object(n.jsx)("td",{children:this.props.member.MemberId}),Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:Object(n.jsxs)(H.a,{size:"sm",children:[Object(n.jsx)(h.a,{variant:"outline-warning",onClick:this.handleEditButtonClick,children:"e"}),Object(n.jsx)(h.a,{variant:"outline-danger",onClick:this.handleRemoveButtonClick,children:"r"})]})})]})}}]),r}(a.Component),B=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleAddButtonClick=function(t){e.props.addMember(e.props.street)},e.handleMemberEdit=function(t){e.props.updateMember(t)},e.handleMemberRemove=function(t){e.props.removeMember(t)},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("tr",{className:"border-bottom border-success font-weight-bold",children:[Object(n.jsx)("td",{colSpan:"3",children:this.props.street.name+"  "}),Object(n.jsx)("td",{children:Object(n.jsx)(h.a,{variant:"outline-warning",onClick:this.handleAddButtonClick,children:"+"})})]}),this.props.street.members.map((function(t){return v.Consumer,Object(n.jsx)(I,{member:t,handleMemberEdit:e.handleMemberEdit,handleMemberRemove:e.handleMemberRemove},t.MemberId)})),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{}),Object(n.jsx)("td",{}),Object(n.jsx)("td",{})]}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{colSpan:"3"})})]})}}]),r}(a.Component),D=r(68),U=r(45),P=r(16),W=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleSave=function(t){e.props.onSave(e.props.member)},e.handleCancel=function(){e.props.onCancel(e.props.member)},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(U.a,Object(D.a)(Object(D.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(n.jsx)(U.a.Header,{children:Object(n.jsx)(U.a.Title,{id:"contained-modal-title-vcenter",children:"Member details"})}),Object(n.jsxs)(U.a.Body,{children:[Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"Firstname",children:"First Name(s)"})}),Object(n.jsx)(x.a,{placeholder:"First name","aria-label":"Firstname","aria-describedby":"firstname",onChange:function(t){return e.props.member.Firstname=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Firstname})]}),Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"Lastname",children:"Last Name"})}),Object(n.jsx)(x.a,{placeholder:"Last name","aria-label":"Lastname","aria-describedby":"lastname",onChange:function(t){return e.props.member.Lastname=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Lastname})]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"HouseNo",children:"House"})}),Object(n.jsx)(x.a,{placeholder:"House number or name","aria-label":"House #","aria-describedby":"house",onChange:function(t){return e.props.member.HouseNo=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.HouseNo})]}),Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"Street",children:"Street"})}),Object(n.jsx)(x.a,{placeholder:"Street name","aria-label":"Street","aria-describedby":"street",onChange:function(t){return e.props.member.Street=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.Street})]}),Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"City",children:"City"})}),Object(n.jsx)(x.a,{placeholder:"City name","aria-label":"City","aria-describedby":"city",onChange:function(t){return e.props.member.City=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.City})]}),Object(n.jsxs)(P.a,{className:"mb-3",children:[Object(n.jsx)(P.a.Prepend,{children:Object(n.jsx)(P.a.Text,{id:"Town",children:"Town"})}),Object(n.jsx)(x.a,{placeholder:"Town name","aria-label":"Town","aria-describedby":"town",onChange:function(t){return e.props.member.City=t.target.value.toLocaleUpperCase()},defaultValue:this.props.member.City})]})]}),Object(n.jsxs)(U.a.Footer,{children:[Object(n.jsx)(h.a,{variant:"secondary",onClick:this.handleCancel,children:"Cancel"}),Object(n.jsx)(h.a,{variant:"primary",onClick:this.handleSave,children:"Save"})]})]}))}}]),r}(a.Component),R=function(e){var t=e.trim().lastIndexOf(" ");if(-1===t)return{minusLastWord:"",lastWord:e.trim()};var r=e.slice(0,t),n=e.slice(t,e.length);return{minusLastWord:r.trim(),lastWord:n.trim()}},V=function(e,t){var r=R(e.toString()),n=R(t.toString()),a=r.lastWord,c=n.lastWord,s=r.minusLastWord,o=n.minusLastWord,i=/[^a-zA-Z]/g,l=/[^0-9]/g,u=a.toString(),m=c.toString(),d=u.replace(i,""),b=m.replace(i,""),h=parseInt(u.replace(l,""),10),j=parseInt(m.replace(l,""),10),p=0;return 0===(p=h===j?0===d.length?0===b.length?0:-1:d.localeCompare(b):h===j?0:h>j?1:-1)&&(p=0===s.length?0===o.length?0:-1:s.localeCompare(o)),p},_=function(e,t){var r=e.sort((function(e,t){return function(e,t){var r=0;return 0===(r=e.Street.localeCompare(t.Street))&&(r=V(e.HouseNo,t.HouseNo)),0===r&&(r=e.Lastname.localeCompare(t.Lastname)),0===r&&(r=e.Firstname.localeCompare(t.Firstname)),r}(e,t)})),n=[];r.forEach((function(e){e.Street=e.Street.toUpperCase();var t=n.find((function(t){return t.name===e.Street}));t||(t={name:e.Street,members:[],count:0},n.push(t)),t.members.push(e),t.count=t.count+1}));var a=1;return n.forEach((function(e){var r=[];e.members.forEach((function(e){var n=Object.assign({},e);n.MemberId=a++,t&&t.length>0?(e.Firstname.includes(t)||e.Lastname.includes(t)||e.Street.includes(t))&&r.push(n):r.push(n)})),e.members=r})),n.filter((function(e){return e.members.length>0}))},z=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={modalShow:!1,tempmember:{Firstname:"FIRSTNAME",Lastname:"LASTNAME",HouseNo:"1",Street:"STREET 1",Town:"LUTON"},isAddNewMember:!1,members:[],error:""},e.setModalShow=function(t){e.setState({modalShow:t})},e.showMemberEditDialog=function(){e.setModalShow(!0)},e.hideMemberEditDialog=function(){e.setModalShow(!1)},e.handleMemberEditCancel=function(t){e.hideMemberEditDialog()},e.handleMemberEditSave=function(t){try{if(e.state.isAddNewMember)console.log("Save new member - ",t),e.saveNewMember(t);else{var r=e.state.members.find((function(t){return t._id===e.state.tempmember._id}));r&&(r.Firstname=t.Firstname,r.Lastname=t.Lastname,r.HouseNo=t.HouseNo,r.Street=t.Street,r.Town=t.Town,console.log("Save update member - ",r),e.saveUpdatedMember(r),e.setState({members:e.state.members}))}e.hideMemberEditDialog()}catch(n){console.error(n)}},e.removeMember=function(t){window.confirm("Are you sure you want to delete ".concat(t.Firstname," ").concat(t.Lastname))&&e.saveDelete(t)},e.handleAddNewMemberButtonClick=function(t){e.addNewMember({name:""})},e.addNewMember=function(t){e.setState({tempmember:{Firstname:"",Lastname:"",HouseNo:"",Street:t.name,Town:"LUTON"},isAddNewMember:!0},e.showMemberEditDialog)},e.updateMember=function(t){console.log("Update member - ",t),e.setState({tempmember:t,isAddNewMember:!1},e.showMemberEditDialog)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/members");case 3:t=e.sent,this.setState({members:t.data,error:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0.message}),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"saveNewMember",value:function(){var e=Object(w.a)(y.a.mark((function e(t){var r,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.Firstname&&t.Firstname.length>0&&t.Lastname&&t.Lastname.length>0&&t.HouseNo&&t.HouseNo.length>0&&t.Street&&t.Street.length>0)){e.next=6;break}return e.next=3,T.a.post("/members",t);case 3:r=e.sent,n=[].concat(Object(F.a)(this.state.members),[r.data]),this.setState({members:n});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveUpdatedMember",value:function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.put("members/"+t._id,t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"saveDelete",value:function(){var e=Object(w.a)(y.a.mark((function e(t){var r,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.delete("members/"+t._id,t);case 3:r=e.sent,-1!==(n=this.state.members.findIndex((function(e){return e._id===r.data._id})))&&(this.state.members.splice(n,1),this.setState({members:this.state.members})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.error.length>0){return Object(n.jsx)(A.a,{variant:"danger",children:this.state.error})}var t=this.state.members.length+1e3,r=_(this.state.members,this.context.state.searchText.toLocaleUpperCase()),a=this.state.tempmember;return this.state.members.length>0?Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(W,{member:a,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(n.jsx)(E.a,{borderless:!0,hover:!0,children:Object(n.jsx)("tbody",{children:r.map((function(r){return Object(n.jsx)(B,{street:r,addMember:e.addNewMember,removeMember:e.removeMember,updateMember:e.updateMember},t++)}))})})]}):Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(W,{member:a,show:this.state.modalShow,onCancel:this.handleMemberEditCancel,onSave:this.handleMemberEditSave}),Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{onClick:this.handleAddNewMemberButtonClick,children:"Add Member"})})]})}}]),r}(a.Component);z.contextType=v;var G=z,q=r(63),J=(r(124),function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={title:"MCE - Membership Roll",date:(new Date).getFullYear()},e.memberToStringArray=function(e){var t=[];return t.push(e.memberId),t.push(e.Firstname,0+e.Lastname),t.push(e.HouseNo+" "+e.Street),t},e.printTitleAndSubTitle=function(t,r){var n=e.state.title.toString(),a=e.state.date.toString(),c=t.getFontSize(),s=t.getLineHeightFactor(),o=20;return t.setFontSize(30),t.text(n,100,o,{align:"center"}),o+=c+s,t.setFontSize(15),t.text(a,100,o,{align:"center"}),t},e.footer=function(e){if(r.currentpage<e.pageCount){r.doc.setFontSize(10);var t="Page "+e.pageCount;r.doc.text(t,e.settings.margin.left,r.doc.internal.pageSize.height-15),r.currentpage=e.pageCount}},e.printStreet=function(t,r,n){t.setFontSize(10);var a=r.name,c=[];return r.members.forEach((function(e){var t=[];t[0]=e.MemberId,t[1]=e.Firstname+" "+e.Lastname,t[2]=e.HouseNo+" "+e.Street,c.push(t)})),n?t.autoTable({startY:60,head:[[{content:a,colSpan:3,styles:{halign:"center",fillColor:[22,160,133]}}]],afterPageContent:e.footer,body:c,theme:"grid",columnStyles:{0:{cellWidth:15},1:{cellWidth:90},2:{cellWidth:80}}}):t.autoTable({head:[[{content:a,colSpan:3,styles:{halign:"center",fillColor:[22,160,133]}}]],afterPageContent:e.footer,body:c,theme:"grid",columnStyles:{0:{cellWidth:15},1:{cellWidth:90},2:{cellWidth:80}}}),t},e.handleButtonClick=function(){var t=Object(w.a)(y.a.mark((function t(n){var a,c,s,o;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.currentpage=0,t.next=4,T.a.get("/members");case 4:a=t.sent,c=a.data,s=_(c,""),r.doc=new q.default,e.printTitleAndSubTitle(r.doc),o=!0,s.forEach((function(t){o?(e.printStreet(r.doc,t,30),o=!1):e.printStreet(r.doc,t)})),r.doc.save("bpjm-members.pdf");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsxs)(M.a,{children:[Object(n.jsxs)(f.a.Group,{controlId:"formTitle",children:[Object(n.jsx)(f.a.Label,{children:"Title"}),Object(n.jsx)(f.a.Control,{placeholder:"Enter title of the report",onChange:function(t){return e.setState({title:t.target.value})},defaultValue:this.state.title})]}),Object(n.jsxs)(f.a.Group,{controlId:"formDate",children:[Object(n.jsx)(f.a.Label,{children:"Date"}),Object(n.jsx)(f.a.Control,{placeholder:"Date",onChange:function(t){return e.setState({date:t.target.value})},defaultValue:this.state.date})]}),Object(n.jsx)(h.a,{variant:"primary",type:"submit",onClick:this.handleButtonClick,children:"Print to PDF"})]})]})}}]),r}(a.Component));J.currentpage=0,J.lineHeight=8,J.leftMargin=20,J.pageHeight=20*J.lineHeight;var Y=J,K=r(67),Z=r(31),Q=r(66),X="677448856451-tf822n4ctpqtrro55q55j400j6iv3gft.apps.googleusercontent.com";var $=function(){var e=Object(a.useState)("Loading..."),t=Object(K.a)(e,2),r=t[0],c=t[1],s=Object(a.useState)(null),o=Object(K.a)(s,2),i=o[0],l=o[1],u=function(){var e=Object(w.a)(y.a.mark((function e(t){var r,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(t.profileObj),c(),r={token:t.tokenId,googleId:t.profileObj.googleId,displayName:t.profileObj.name,firstName:t.profileObj.givenName,lastName:t.profileObj.familyName,image:t.profileObj.image,email:t.profileObj.email},e.next=6,T.a.post("/auth/google",r);case 6:n=e.sent,localStorage.user_displayName=n.data.displayName,localStorage.user_email=n.email,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(null),localStorage.removeItem("user_displayName"),e.next=5,T.a.delete("/auth/logout");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(M.a,{className:"col-lg-4 col-md-4 col-sm-4 justify-content-center",children:[Object(n.jsx)("br",{}),i?Object(n.jsxs)(Z.a,{children:[Object(n.jsxs)(Z.a.Header,{children:["Welcome ",i.name,"!"]}),Object(n.jsx)(Z.a.Body,{children:Object(n.jsx)(Z.a.Title,{children:Object(n.jsx)(Q.GoogleLogout,{clientId:X,onLogoutSuccess:m,onFailure:function(e){console.log("Logout Failure ",e)}})})})]}):Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(Z.a.Header,{children:"Login using your Google account"}),Object(n.jsx)(Z.a.Body,{children:Object(n.jsx)(Z.a.Title,{children:Object(n.jsx)(Q.GoogleLogin,{clientId:X,buttonText:r,onSuccess:u,onFailure:function(e){console.log("Login Failure ",e),c()},onRequest:function(){c("Loading...")},onAutoLoadFinished:function(){c()},isSignedIn:!0})})})]})]})},ee=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).memberToCSV=function(e){return e.MemberId+","+e.Firstname+","+e.Lastname+","+e.HouseNo+","+e.Street},e.streetToCSV=function(t,r){return r.members.forEach((function(r){t+=e.memberToCSV(r)+"\r\n"})),t},e.handleButtonClick=function(){var t=Object(w.a)(y.a.mark((function t(r){var n,a,c,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,T.a.get("/members");case 3:n=t.sent,a=n.data,c=_(a,""),s="ID,Firstname,Lastname,House,Street\r\n",c.forEach((function(t){s=e.streetToCSV(s,t)})),console.log(s),e.saveToFile(s);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(r,[{key:"render",value:function(){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsxs)(M.a,{children:[Object(n.jsx)(h.a,{variant:"primary",type:"submit",onClick:this.handleButtonClick,children:"Export to CSV"}),Object(n.jsx)("br",{}),Object(n.jsx)("pre",{id:"csv"})]})]})}},{key:"saveToFile",value:function(e){var t=new Blob([e],{type:"application/octet-stream"}),r=document.createElement("a"),n=URL.createObjectURL(t);r.href=n,r.download="bpjm-members.csv",document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(n)}),0)}}]),r}(a.Component),te=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(n.jsx)(d.BrowserRouter,{children:Object(n.jsxs)(g,{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(b.g,{children:[Object(n.jsx)(b.d,{exact:!0,path:"/",component:N}),Object(n.jsx)(b.d,{exact:!0,path:"/members",component:G}),Object(n.jsx)(b.d,{exact:!0,path:"/PrintOut",component:Y}),Object(n.jsx)(b.d,{exact:!0,path:"/export",component:ee}),Object(n.jsx)(b.d,{exact:!0,path:"/login",component:$})]})]})})}}]),r}(a.Component),re=function(e){e&&e instanceof Function&&r.e(6).then(r.bind(null,496)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(te,{})}),document.getElementById("root")),re(console.log)},94:function(e,t,r){},96:function(e,t,r){}},[[125,1,3]]]);
//# sourceMappingURL=main.d6368bfe.chunk.js.map