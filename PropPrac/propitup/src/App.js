import PersonCard from "./PersonCard";

function App() {
  return (
    <div>
      <h1>Prop Practice</h1>
      <PersonCard name = "Kirkland" age = { 24 } hairColor="Brown" />
      <PersonCard name = "Jessica" age = { 25 } hairColor="Red" />
      <PersonCard name = "Josh" age = { 26 } hairColor="Black" />
      <PersonCard name = "Russians" age = { 56 } hairColor="Socialism" />

    </div>
  );
}

export default App;
