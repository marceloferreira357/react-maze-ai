import Item from "./Item";

function PathItem() {
  return (
    <Item
      customComponent={<div className="w-5 h-5 bg-lavender-blush" />}
      description="Path"
      index={4}
    />
  );
}

export default PathItem;
