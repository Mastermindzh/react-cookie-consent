import{a as e,i as t,n,o as r,r as i,t as a}from"./intro-Btr3yj3R.js";import{n as o,r as s}from"./rolldown-runtime-DkW27tQK.js";var c=s({CustomOnAccept:()=>u,default:()=>l}),l,u;function d(){return(d=o((()=>{e(),t(),n(),l={title:`CookieConsent/Custom On Accept`,component:r,parameters:{controls:{expanded:!0}}},u={args:{...i,onAccept:e=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(e)}`)},children:`This website uses cookies to enhance the user experience.`},render:e=>React.createElement(React.Fragment,null,React.createElement(a,null),React.createElement(r,e))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultStoryProps,
    onAccept: acceptedByScrolling => {
      alert(\`ACCEPTED! By scrolling? \${JSON.stringify(acceptedByScrolling)}\`);
    },
    children: "This website uses cookies to enhance the user experience."
  } as CookieConsentProps,
  render: args => <>
      <Intro />
      <CookieConsent {...args} />
    </>
}`,...u.parameters?.docs?.source}}}})))()}export{d as n,c as r,u as t};