export default function Label(props) {
  let totalClassName = "Label " + props.extraClassNames;
  return (
    <>
      <div className={totalClassName}>{props.children}</div>
    </>
  );
}
