import React from "react";

const PHOTO_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/340051bd-563f-4b7f-80d6-023123766025.jpg";
const QR_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/0679bad0-1666-4912-8fc4-535629befa92.png";

const cardBase: React.CSSProperties = {
  width: "559px",
  height: "793px",
  background: "#FDFAF6",
  position: "relative",
  overflow: "hidden",
  flexShrink: 0,
  boxShadow: "0 24px 60px rgba(60,10,10,0.28)",
  display: "flex",
  flexDirection: "column",
};

const brown = "#4A2018";

// ── ЛИЦЕВАЯ СТОРОНА ──────────────────────────────────────────────────────────
const FrontSide = () => (
  <div style={cardBase}>
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      <img
        src={PHOTO_URL}
        alt="Григорий и Ксения"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
      />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "280px",
        background: "linear-gradient(to bottom, transparent, rgba(18,4,4,0.90))",
      }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 48px 44px", textAlign: "center" }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "56px", fontWeight: 300, color: "#FDFAF6",
          margin: 0, lineHeight: 1, letterSpacing: "1px",
        }}>
          Григорий <span style={{ color: "#C9A84C" }}>&</span> Ксения
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "18px auto", width: "140px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,transparent,#C9A84C)" }} />
          <div style={{ width: "7px", height: "7px", background: "#C9A84C", transform: "rotate(45deg)", flexShrink: 0 }} />
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "30px", fontWeight: 300, color: "#FDFAF6", letterSpacing: "6px",
        }}>
          03 · 10 · 2026
        </div>
      </div>
    </div>
  </div>
);

// ── ОБОРОТНАЯ СТОРОНА ────────────────────────────────────────────────────────
const BackSide = () => (
  <div style={{ ...cardBase, background: "#FDFAF6" }}>
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "stretch",
      padding: "56px 64px", gap: "38px",
    }}>

      {/* линия для имени */}
      <div>
        <div style={{ height: "44px" }} />
        <div style={{ width: "100%", height: "1px", background: brown, opacity: 0.3 }} />
      </div>

      {/* разделитель */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ flex: 1, height: "1px", background: brown, opacity: 0.18 }} />
        <div style={{ width: "6px", height: "6px", background: brown, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.35 }} />
        <div style={{ flex: 1, height: "1px", background: brown, opacity: 0.18 }} />
      </div>

      {/* Приглашаем на свадьбу */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "44px", fontWeight: 300, color: brown,
          lineHeight: 1.15, margin: 0,
        }}>
          Приглашаем вас<br />
          <em>на свадьбу</em>
        </h2>
        <p style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "17px", fontStyle: "italic",
          color: brown, opacity: 0.5, margin: "12px 0 0",
        }}>
          03 октября 2026 года
        </p>
      </div>

      {/* разделитель */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ flex: 1, height: "1px", background: brown, opacity: 0.18 }} />
        <div style={{ width: "6px", height: "6px", background: brown, transform: "rotate(45deg)", flexShrink: 0, opacity: 0.35 }} />
        <div style={{ flex: 1, height: "1px", background: brown, opacity: 0.18 }} />
      </div>

      {/* QR */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "4px",
          color: brown, opacity: 0.5,
          textTransform: "uppercase", margin: 0,
        }}>
          все подробности по QR-коду
        </p>
        <div style={{ position: "relative", padding: "10px" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "16px", height: "16px", borderTop: `1.5px solid ${brown}`, borderLeft: `1.5px solid ${brown}`, opacity: 0.4 }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "16px", height: "16px", borderTop: `1.5px solid ${brown}`, borderRight: `1.5px solid ${brown}`, opacity: 0.4 }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "16px", height: "16px", borderBottom: `1.5px solid ${brown}`, borderLeft: `1.5px solid ${brown}`, opacity: 0.4 }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "16px", height: "16px", borderBottom: `1.5px solid ${brown}`, borderRight: `1.5px solid ${brown}`, opacity: 0.4 }} />
          <img src={QR_URL} alt="QR" style={{ width: "150px", height: "150px", display: "block" }} />
        </div>
      </div>
    </div>
  </div>
);

// ── ROOT ─────────────────────────────────────────────────────────────────────
const Index = () => (
  <div style={{
    minHeight: "100vh",
    background: "#E8E2DB",
    padding: "56px 32px 90px",
    fontFamily: "'Montserrat',sans-serif",
  }}>
    <div style={{ textAlign: "center", marginBottom: "44px" }}>
      <p style={{ fontSize: "9px", letterSpacing: "5px", color: "#8B6914", textTransform: "uppercase", margin: "0 0 8px" }}>
        двустороннее приглашение · формат А5 · 148×210 мм
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "26px", fontWeight: 300, color: "#5C1A1A", margin: 0 }}>
        Макет для типографии
      </h1>
    </div>

    <div style={{ display: "flex", gap: "52px", justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
      <div>
        <p style={{ fontSize: "9px", letterSpacing: "3px", color: "#8B6914", textTransform: "uppercase", textAlign: "center", marginBottom: "14px" }}>
          лицевая сторона
        </p>
        <FrontSide />
      </div>
      <div>
        <p style={{ fontSize: "9px", letterSpacing: "3px", color: "#8B6914", textTransform: "uppercase", textAlign: "center", marginBottom: "14px" }}>
          оборотная сторона
        </p>
        <BackSide />
      </div>
    </div>

    <div style={{
      position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)",
      background: "#5C1A1A", color: "#C9A84C",
      fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
      padding: "8px 22px", borderRadius: "20px", whiteSpace: "nowrap",
      boxShadow: "0 4px 20px rgba(92,26,26,0.3)",
    }}>
      148 × 210 мм · 300 dpi · Типография
    </div>
  </div>
);

export default Index;