function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📃🚀</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? `You got everythinng! Ready to go ✈️`
          : `🎒 You have ${totalItems} items on your list, and you already packed
            ${packedItems} (${packedPercent})%`}
      </em>
    </footer>
  );
}

export default Stats;
