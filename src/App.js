import AutoComplete from "./Autocomplete";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      Hello
      <AutoComplete
        data={[
          "Angular",
          "Blitzjs",
          "Gatsby",
          "Reactjs",
          "Vuejs",
          "Svelte",
          "Nextjs",
          "Node",
          "Express",
          "Sails",
          "Loopback",
          "React-router",
          "Redux",
          "Flux",
          "Yarn",
          "Npm",
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands"
        ]}
      />
    </div>
  );
}
