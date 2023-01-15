const baseLabelStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  width: "180px",
  height: "160px",
  position: "relative",
};

export default function Label(porps) {
  return (
    <>
      <div
        style={{
          ...baseLabelStyle,
          ...porps.extraStyles,
        }}
      >
        {porps.children}
      </div>
    </>
  );
}
