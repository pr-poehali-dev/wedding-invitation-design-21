const PHOTO_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/6e3591f3-bbc2-4c04-a8d7-38b3d742e1ec.jpg";
const QR_URL = "https://cdn.poehali.dev/projects/8ddef25c-3a4a-44cd-b534-c89b41b2688b/bucket/0679bad0-1666-4912-8fc4-535629befa92.png";

const Index = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f0eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* A5 card: 148×210mm → at 96dpi ≈ 559×793px; scale for screen display */}
      <div
        style={{
          width: "559px",
          minHeight: "793px",
          background: "#FDFAF6",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(80, 20, 20, 0.25)",
        }}
      >

        {/* — GOLD TOP BORDER — */}
        <div style={{ height: "6px", background: "linear-gradient(90deg, #8B6914, #C9A84C, #F0D080, #C9A84C, #8B6914)" }} />

        {/* — TOP GEOMETRIC HEADER — */}
        <div style={{ background: "#5C1A1A", padding: "28px 36px 20px", position: "relative" }}>
          {/* diagonal gold lines */}
          <svg style={{ position: "absolute", top: 0, right: 0, width: "160px", height: "100%", opacity: 0.18 }} viewBox="0 0 160 110" preserveAspectRatio="none">
            <line x1="160" y1="0" x2="0" y2="110" stroke="#F0D080" strokeWidth="1" />
            <line x1="160" y1="20" x2="20" y2="110" stroke="#F0D080" strokeWidth="0.8" />
            <line x1="160" y1="40" x2="40" y2="110" stroke="#F0D080" strokeWidth="0.6" />
          </svg>

          {/* small label */}
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "5px",
            color: "#C9A84C",
            textTransform: "uppercase",
            margin: "0 0 10px",
            opacity: 0.9,
          }}>
            вы приглашены
          </p>

          {/* main names */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "48px",
            fontWeight: 300,
            color: "#FDFAF6",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "1px",
          }}>
            Григорий<br />
            <span style={{ color: "#C9A84C" }}>&amp;</span> Ксения
          </h1>

          {/* gold underline */}
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, #C9A84C, #F0D080)", margin: "14px 0 0" }} />
        </div>

        {/* — PHOTO SECTION — */}
        <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
          <img
            src={PHOTO_URL}
            alt="Григорий и Ксения"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          {/* bottom gradient overlay */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to bottom, transparent, #FDFAF6)",
          }} />
          {/* gold geometric corner top-right */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50px",
            height: "50px",
            borderTop: "3px solid #C9A84C",
            borderRight: "3px solid #C9A84C",
          }} />
          <div style={{
            position: "absolute",
            bottom: 12,
            left: 0,
            width: "50px",
            height: "50px",
            borderBottom: "3px solid #C9A84C",
            borderLeft: "3px solid #C9A84C",
          }} />
        </div>

        {/* — DATE BLOCK — */}
        <div style={{ padding: "10px 36px 16px", textAlign: "center" }}>
          {/* decorative divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
            {/* diamond shape */}
            <div style={{
              width: "8px",
              height: "8px",
              background: "#C9A84C",
              transform: "rotate(45deg)",
              flexShrink: 0,
            }} />
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
          </div>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            letterSpacing: "4px",
            color: "#5C1A1A",
            textTransform: "uppercase",
            margin: "0 0 6px",
          }}>
            дата торжества
          </p>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "38px",
            fontWeight: 300,
            color: "#5C1A1A",
            letterSpacing: "3px",
            lineHeight: 1,
          }}>
            03 · 10 · 2026
          </div>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11px",
            letterSpacing: "2px",
            color: "#8B6914",
            margin: "8px 0 0",
            textTransform: "uppercase",
          }}>
            суббота · начало в 14:00
          </p>
        </div>

        {/* — BOTTOM SECTION: info + QR — */}
        <div style={{
          margin: "0 36px 0",
          background: "#5C1A1A",
          padding: "18px 22px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* bg geometry */}
          <svg style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", opacity: 0.08 }} viewBox="0 0 487 110">
            <polygon points="0,0 80,0 0,110" fill="#F0D080" />
            <polygon points="487,110 407,110 487,0" fill="#F0D080" />
          </svg>

          {/* left: details */}
          <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "8px",
              letterSpacing: "3px",
              color: "#C9A84C",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}>
              больше деталей
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "14px",
              color: "#FDFAF6",
              margin: "0 0 6px",
              lineHeight: 1.5,
              fontStyle: "italic",
            }}>
              Отсканируйте QR-код,<br />чтобы узнать программу,<br />место и подтвердить присутствие
            </p>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C", marginTop: "10px" }} />
          </div>

          {/* right: QR */}
          <div style={{
            flexShrink: 0,
            width: "90px",
            height: "90px",
            background: "#FDFAF6",
            padding: "6px",
            position: "relative",
            zIndex: 1,
          }}>
            <img
              src={QR_URL}
              alt="QR-код на сайт свадьбы"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>
        </div>

        {/* — GOLD BOTTOM BORDER — */}
        <div style={{ margin: "0 36px" }}>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #8B6914, #C9A84C, #F0D080, #C9A84C, #8B6914)" }} />
        </div>

        {/* — FOOTER — */}
        <div style={{ padding: "14px 36px 20px", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            fontStyle: "italic",
            color: "#5C1A1A",
            opacity: 0.7,
            margin: 0,
            letterSpacing: "0.5px",
          }}>
            С любовью ждём вас разделить этот день
          </p>
        </div>

        {/* — GOLD BOTTOM FULL BORDER — */}
        <div style={{ height: "6px", background: "linear-gradient(90deg, #8B6914, #C9A84C, #F0D080, #C9A84C, #8B6914)" }} />
      </div>

      {/* Print hint label */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#5C1A1A",
        color: "#C9A84C",
        fontSize: "11px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        padding: "8px 20px",
        borderRadius: "20px",
        whiteSpace: "nowrap",
        fontFamily: "'Montserrat', sans-serif",
        boxShadow: "0 4px 20px rgba(92,26,26,0.3)",
      }}>
        Макет А5 · 148 × 210 мм · Типография
      </div>
    </div>
  );
};

export default Index;
