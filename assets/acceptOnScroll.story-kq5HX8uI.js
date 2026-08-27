import{a as e,i as t,n,o as r,r as i,t as a}from"./intro-CFbotWtD.js";import{n as o,r as s}from"./rolldown-runtime-DkW27tQK.js";var c=s({AcceptOnScroll:()=>u,default:()=>l}),l,u;function d(){return(d=o((()=>{e(),n(),t(),l={title:`CookieConsent/Accept On Scroll`,component:r,parameters:{controls:{expanded:!0}}},u={args:{...i,onAccept:e=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(e)}`)},acceptOnScroll:!0,acceptOnScrollPercentage:25,children:`Scroll for 25% and the onAccept will trigger`},render:e=>React.createElement(React.Fragment,null,React.createElement(a,null),Array.from(Array(25).keys()).map(e=>React.createElement(`p`,{key:e},`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum aut distinctio quisquam ab!`)),React.createElement(r,e))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultStoryProps,
    onAccept: acceptedByScrolling => {
      alert(\`ACCEPTED! By scrolling? \${JSON.stringify(acceptedByScrolling)}\`);
    },
    acceptOnScroll: true,
    acceptOnScrollPercentage: 25,
    children: "Scroll for 25% and the onAccept will trigger"
  } as CookieConsentProps,
  render: args => <>
      <Intro />
      {Array.from(new Array(25).keys()).map(index => <p key={index}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta
          mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum
          aut distinctio quisquam ab!
        </p>)}

      <CookieConsent {...args} />
    </>
}`,...u.parameters?.docs?.source}}}})))()}export{c as n,d as r,u as t};