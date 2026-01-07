import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,d as c,I as l}from"./intro--bLIp7z5.js";import"./index-CgHwlBRe.js";const d={title:"CookieConsent/Accept On Scroll",component:a,parameters:{controls:{expanded:!0}}},r={args:{...c,onAccept:t=>{alert(`ACCEPTED! By scrolling? ${JSON.stringify(t)}`)},acceptOnScroll:!0,acceptOnScrollPercentage:25,children:"Scroll for 25% and the onAccept will trigger"},render:t=>e.jsxs(e.Fragment,{children:[e.jsx(l,{}),Array.from(Array(25).keys()).map(s=>e.jsx("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum aut distinctio quisquam ab!"},s)),e.jsx(a,{...t})]})};var n,i,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      {Array.from(Array(25).keys()).map(index => <p key={index}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ipsa sequi soluta
          mollitia illum, hic quaerat ipsum sint odit delectus magni neque sunt adipisci culpa harum
          aut distinctio quisquam ab!
        </p>)}

      <CookieConsent {...args} />
    </>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{r as AcceptOnScroll,d as default};
