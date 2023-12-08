import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
        // <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  // function Skill({ skill, color, level })
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍🏻"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
