import "./styles.css";

function App() {
  return (
    <div className="card">
      <Card></Card>
      <div className="data">
        <Intro></Intro>
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div>
      <img className="avatar" src="Pizzas/funghi.jpg" alt="Pizza"></img>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Thien Le</h1>
      <p>I'm a software devloper</p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" emoji="🫸" color="blue"></Skill>
      <Skill skill="HTML + CSS" emoji="✌️" color="yellow"></Skill>
      <Skill skill="Svlete" emoji="🤘" color="red"></Skill>
      <Skill skill="Javascript" emoji="🤘" color="orange"></Skill>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
