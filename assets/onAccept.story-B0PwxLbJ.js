import{d as c,C as s,I as a}from"./intro-ChSLszgV.js";import"./index-BFQ_Q9OP.js";const p={title:"CookieConsent/Custom On Accept",component:s,parameters:{controls:{expanded:!0}}},e={args:{...c,onAccept:t=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(t)}`)},children:"This website uses cookies to enhance the user experience."},render:t=>React.createElement(React.Fragment,null,React.createElement(a,null),React.createElement(s,{...t}))};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};export{e as CustomOnAccept,p as default};
