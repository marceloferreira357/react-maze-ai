import CursorItem from "./CursorItem";
import EndItem from "./EndItem";
import PathItem from "./PathItem";
import PlayerItem from "./PlayerItem";
import StartItem from "./StartItem";

function ItemsPanel() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-lavender-blush/30 rounded-md p-4 shadow-md">
      <div>Select an item</div>
      <div className="grid grid-cols-2 gap-2">
        <CursorItem />
        <PlayerItem />
        <StartItem />
        <EndItem />
        <PathItem />
      </div>
    </div>
  );
}

export default ItemsPanel;
