/** Rolling-text label. Trigger by hovering/focusing the parent link or button. */
export default function Roll({ children }) {
  return (
    <span className="roll-wrap">
      <span className="roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
    </span>
  )
}
