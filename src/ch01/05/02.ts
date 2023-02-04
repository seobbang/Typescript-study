interface ComponentProps {
  onSelectItem: (id: number) => void; //void는 return 값이 없거나 undefined일 때
}

function renderSelector(props: ComponentProps) {}

let selectedId: number = 0;
function handleSelectItem(id: number) {
  selectedId = id;
}

renderSelector({ onSelectItem: handleSelectItem });
