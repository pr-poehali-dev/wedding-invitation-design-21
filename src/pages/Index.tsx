import React from "react";

const PHOTO_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/6e3591f3-bbc2-4c04-a8d7-38b3d742e1ec.jpg";
const QR_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/0679bad0-1666-4912-8fc4-535629befa92.png";

const cardBase: React.CSSProperties = {
  width: "559px",
  height: "793px",
  background: "#FDFAF6",
  position: "relative",
  overflow: "hidden",
  flexShrink: 0,
  boxShadow: "0 24px 60px rgba(60, 10, 10, 0.28)",
  display: "flex",
  flexDirection: "column",
};

const GoldBar = () => (
  <div style={{ height: "6px", background: "linear-gradient(90deg,#7A5C10,#C9A84C,#F0D080,#C9A84C,#7A5C10)", flexShrink: 0 }} />
);

const Diamond = () => (
  <div style={{ width: "8px", height: "8px", background: "#C9A84C", transform: "rotate(45deg)", flexShrink: 0 }} />
);

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,transparent,#C9A84C)" }} />
    <Diamond />
    <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
  </div>
);

// ── ЛИЦЕВАЯ СТОРОНА ──────────────────────────────────────────────────────────
const FrontSide = () => (
  <div style={cardBase}>
    <GoldBar />

    {/* Фото на всю оставшуюся высоту */}
    <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
      <img
        src={PHOTO_URL}
        alt="Григорий и Ксения"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
      />

      {/* тёмный градиент снизу */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "320px",
        background: "linear-gradient(to bottom, transparent, rgba(20,4,4,0.92))",
      }} />

      {/* угловые декоры */}
      <div style={{ position: "absolute", top: 18, left: 18, width: "38px", height: "38px", borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
      <div style={{ position: "absolute", top: 18, right: 18, width: "38px", height: "38px", borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />

      {/* Имена + дата поверх фото */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 48px 38px", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "5px", color: "#C9A84C",
          textTransform: "uppercase", margin: "0 0 14px",
        }}>
          приглашение на свадьбу
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "54px", fontWeight: 300, color: "#FDFAF6",
          margin: 0, lineHeight: 1, letterSpacing: "1px",
        }}>
          Григорий <span style={{ color: "#C9A84C", fontSize: "42px" }}>&</span> Ксения
        </h1>

        {/* разделитель */}
        <div style={{ margin: "18px auto", width: "120px" }}>
          <Divider />
        </div>

        {/* дата */}
        <div style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "30px", fontWeight: 300,
          color: "#FDFAF6", letterSpacing: "5px",
        }}>
          03 · 10 · 2026
        </div>

        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "9px", letterSpacing: "3px",
          color: "#C9A84C", margin: "10px 0 0", textTransform: "uppercase",
        }}>
          суббота · начало в 14:00
        </p>
      </div>
    </div>

    <GoldBar />
  </div>
);

// ── ОБОРОТНАЯ СТОРОНА ────────────────────────────────────────────────────────
const BackSide = () => (
  <div style={cardBase}>
    <GoldBar />

    {/* фоновая геометрия */}
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }} viewBox="0 0 559 793" preserveAspectRatio="none">
      <polygon points="0,0 220,0 0,220" fill="#5C1A1A" />
      <polygon points="559,793 339,793 559,573" fill="#5C1A1A" />
    </svg>

    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "stretch",
      padding: "48px 64px", gap: "36px", position: "relative", zIndex: 1,
    }}>

      {/* 1. Имя гостя — линия */}
      <div>
        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "4px",
          color: "#8B6914", textTransform: "uppercase", margin: "0 0 10px",
        }}>
          дорогой(ая)
        </p>
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg,#5C1A1A 70%,transparent)" }} />
        <div style={{ height: "36px" }} />
        <div style={{ width: "100%", height: "1px", background: "linear-gradient(90deg,#5C1A1A 70%,transparent)" }} />
      </div>

      <Divider />

      {/* 2. Приглашаем на свадьбу */}
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "5px",
          color: "#8B6914", textTransform: "uppercase", margin: "0 0 14px",
        }}>
          Григорий &amp; Ксения
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "46px", fontWeight: 300, color: "#5C1A1A",
          lineHeight: 1.1, margin: 0, letterSpacing: "0.5px",
        }}>
          Приглашают вас<br />
          <em style={{ color: "#8B6914" }}>на свадьбу</em>
        </h2>
        <p style={{
          fontFamily: "'Cormorant Garamond',serif",
          fontSize: "16px", fontStyle: "italic",
          color: "#5C1A1A", opacity: 0.55, margin: "10px 0 0",
        }}>
          03 октября 2026 года
        </p>
      </div>

      <Divider />

      {/* 3. QR-код */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "4px",
          color: "#8B6914", textTransform: "uppercase", margin: 0,
        }}>
          все подробности по QR-коду
        </p>

        {/* QR в золотых уголках */}
        <div style={{ position: "relative", padding: "10px" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "18px", height: "18px", borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "18px", height: "18px", borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, width: "18px", height: "18px", borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "18px", height: "18px", borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C" }} />
          <img src={QR_URL} alt="QR" style={{ width: "140px", height: "140px", display: "block" }} />
        </div>

        <p style={{
          fontFamily: "'Montserrat',sans-serif",
          fontSize: "8px", letterSpacing: "2px",
          color: "#5C1A1A", opacity: 0.45, margin: 0,
        }}>
          wedding-03-10-2026.tilda.ws
        </p>
      </div>
    </div>

    <GoldBar />
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
    {/* заголовок страницы */}
    <div style={{ textAlign: "center", marginBottom: "44px" }}>
      <p style={{ fontSize: "9px", letterSpacing: "5px", color: "#8B6914", textTransform: "uppercase", margin: "0 0 8px" }}>
        двустороннее приглашение · формат А5 · 148×210 мм
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "26px", fontWeight: 300, color: "#5C1A1A", margin: 0 }}>
        Макет для типографии
      </h1>
    </div>

    {/* две карточки */}
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

    {/* нижняя метка */}
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
