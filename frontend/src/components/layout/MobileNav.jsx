export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex justify-around py-3">
      <button className="text-textMuted text-sm">Home</button>
      <button className="text-textMuted text-sm">Add</button>
      <button className="text-textMuted text-sm">Stats</button>
    </div>
  );
}
