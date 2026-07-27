import{d as a,C as r,I as c}from"./intro-ChSLszgV.js";import"./index-BFQ_Q9OP.js";const d={title:"CookieConsent/Custom Styling",component:r,parameters:{controls:{expanded:!0}}},e={args:{...a,style:{background:"red"},buttonStyle:{fontWeight:"bold"},children:"This website uses cookies with custom red styling."},render:s=>React.createElement(React.Fragment,null,React.createElement(c,null),React.createElement(r,{...s}))};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    ...defaultStoryProps,
    style: {
      background: "red"
    },
    buttonStyle: {
      fontWeight: "bold"
    },
    children: "This website uses cookies with custom red styling."
  } as CookieConsentProps,
  render: args => <>
      <Intro />
      <CookieConsent {...args} />
    </>
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{e as CustomStyling,d as default};
