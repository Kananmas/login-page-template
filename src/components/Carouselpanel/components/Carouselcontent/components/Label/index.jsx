const baseLabelStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  width: "180px",
  height: "160px",
  position: "relative",
  boxShadow: "2px 2px grey",
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
