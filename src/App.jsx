import React from "react";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro className="data" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/fotor-20240126155148.png" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Junaid ALi Shah</h1>
      <p>
        I'm a passionate frontend developer with a strong background in HTML,
        CSS, JavaScript, Bootstrap, and React. I enjoy creating responsive,
        user-friendly websites and am constantly improving my skills by learning
        new technologies. I'm currently pursuing a BS in Computer Science and
        exploring freelance opportunities to apply my knowledge in real-world
        projects
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="#123456" />
      <Skill skill="JavaScript" emoji="💪" color="orangered" />
      <Skill skill="HTML/CSS" emoji="💪" color="yellow" />
      <Skill skill="Bootstrap" emoji="💪" color="blue" />
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
