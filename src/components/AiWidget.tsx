import { useEffect, useRef } from "react";

const AiWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_01jyn4pza5fqf8yxkvrke7wtp2");
    widget.style.position = "fixed";
    widget.style.bottom = "20px";
    widget.style.right = "20px";
    widget.style.zIndex = "9999";

    if (widgetRef.current) {
      widgetRef.current.appendChild(widget);
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      if (widgetRef.current?.contains(widget)) {
        widgetRef.current.removeChild(widget);
      }
    };
  }, []);

  return (
    <>
      <div ref={widgetRef} style={{ position: "relative" }} />
      {/* Inverted banana crescent overlay */}
      <div
        style={{
          position: "fixed",
          bottom: "27px",
          right: "52px",
          height: "50px",
          width: "255px",
          zIndex: 10000,
          backgroundColor: "white",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          clipPath: `path('M0,0 C10,10 10,24 40,24 L215,24 C245,24 245,10 255,0 L255,50 L0,50 Z')`,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default AiWidget;
