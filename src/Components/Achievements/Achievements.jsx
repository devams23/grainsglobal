import React from 'react';
import "./Achievements.css"
const Achievements = () => {
  const achievements = [

    { title: 'Happy Clients', value: 120},
    { title: 'Countries Served', value: 25 },
    { title: 'Awards Won', value: 15 }
  ];
  
  return (
    <div className="achievements-container">
      <h2 className="text-center text-white display-6  fw-bold mb-4">Our Achievements</h2>
      <div className="achievements">
        {achievements.map((achievement, index) => (
          <div className="achievement" key={index}>
            <h3>{achievement.value}+</h3>
            <p className="title">{achievement.title}</p>
            <p className="description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
