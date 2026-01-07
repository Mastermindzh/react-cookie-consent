import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as c,d as a,I as i}from"./intro--bLIp7z5.js";import"./index-CgHwlBRe.js";const m={title:"CookieConsent/Custom On Accept",component:c,parameters:{controls:{expanded:!0}}},r={args:{...a,onAccept:s=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(s)}`)},children:"This website uses cookies to enhance the user experience."},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(i,{}),e.jsx(c,{...s})]})};var o,n,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};export{r as CustomOnAccept,m as default};
