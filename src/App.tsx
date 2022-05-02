interface ButtonProps {
  title?: string
}

function Button(props: ButtonProps) {
  return (
    <button type="button">
      {props.title ?? 'Padrão'}
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="Enviar" />
      <Button title="BlzBlzBlz" />
      <Button />
    </>
  )
}

export default App
