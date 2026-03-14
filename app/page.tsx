export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "32px" }}>AgroStock</h1>

      <p>Gestão de animais e parcelas</p>

      <div style={{ marginTop: "30px" }}>
        <a href="/animals">🐑 Animais</a>
      </div>

      <div style={{ marginTop: "10px" }}>
        <a href="/parcels">🌱 Parcelas</a>
      </div>
    </main>
  )
}
