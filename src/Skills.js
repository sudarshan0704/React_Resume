import './App.css';


function Skills() {
  return (
    <div className="Skills">
      <h3>Skills</h3>
      <h5>frontend development</h5>
      <ul>
        <li>Proficient in HTML, CSS, JavaScript</li>
        <li>Familiar with modern front-end libraries like React</li>
        
      </ul>
      <progress value={80} max={100}></progress>
      <h5>Back-end development</h5>
      <ul>
        <li>Basic knowledge with server-side languagessuch as node js and PHP</li>
        <li>Database Management using MySql and MongoDB</li>
      </ul>
      <progress value={60} max={100}></progress>
      <h5>Programming Languages</h5>
      <ul>
        <li>comfortable witn Python,C# and .Net Framework ,R</li>
      </ul>
      <progress value={90} max={100}></progress>
    </div>
  );
}

export default Skills;