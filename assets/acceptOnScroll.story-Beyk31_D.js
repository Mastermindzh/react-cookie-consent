import{C as c,d as i,I as l}from"./intro-SPWF0Yn0.js";import"./index-D5jfS-9e.js";const u={title:"CookieConsent/Accept On Scroll",component:c,parameters:{controls:{expanded:!0}}},e={args:{...i,onAccept:t=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(t)}`)},acceptOnScroll:!0,acceptOnScrollPercentage:25,children:"Scroll for 25% and the onAccept will trigger"},render:t=>React.createElement(React.Fragment,null,React.createElement(l,null),Array.from(new Array(25).keys()).map(o=>React.createElement("p",{key:o},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum aut distinctio quisquam ab!")),React.createElement(c,{...t}))};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};export{e as AcceptOnScroll,u as default};
