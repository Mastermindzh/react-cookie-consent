import{d as s,C as a,I as c}from"./intro-SPWF0Yn0.js";import"./index-D5jfS-9e.js";const m={title:"CookieConsent/Additional Buttons",component:a,parameters:{controls:{expanded:!0}}},t={args:s,render:r=>React.createElement(React.Fragment,null,React.createElement(c,null),React.createElement(a,{...r},React.createElement("button",{style:{color:"gray"}},"I am a custom config button"),React.createElement("span",{style:{fontSize:"10px"}},"This bit of text is smaller :O")))};var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: defaultStoryProps,
  render: args => <>
      <Intro />
      <CookieConsent {...args}>
        <button style={{
        color: "gray"
      }}>I am a custom config button</button>
        <span style={{
        fontSize: "10px"
      }}>This bit of text is smaller :O</span>
      </CookieConsent>
    </>
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as AdditionalButtons,m as default};
