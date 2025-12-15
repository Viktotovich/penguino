export default function ButtonWithCB({ cb }: { cb: () => void }) {
  return <button onClick={cb}>Submit Report</button>;
}
