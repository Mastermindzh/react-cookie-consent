export interface CookieConsentState {
  visible: boolean;
  style: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  declineButtonStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  overlayStyle: React.CSSProperties;
}

export const defaultState: CookieConsentState = {
  visible: false,
  style: {
    alignItems: "baseline",
    background: "#353535",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    left: "0",
    position: "fixed",
    width: "100%",
    zIndex: "999",
  },
  buttonStyle: {
    background: "#ffd42d",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "black",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px",
  },
  declineButtonStyle: {
    background: "#c12a2a",
    border: "0",
    borderRadius: "0px",
    boxShadow: "none",
    color: "#e5e5e5",
    cursor: "pointer",
    flex: "0 0 auto",
    padding: "5px 10px",
    margin: "15px",
  },
  contentStyle: {
    flex: "1 0 300px",
    margin: "15px",
  },
  overlayStyle: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: "999",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};
