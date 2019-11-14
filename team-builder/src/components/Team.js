import React from "react";


const Team = props =>{
    return (
        <div className="team-list">
            {props.teamMember.map(team=>(
                <div className="member" key={team.id}>
                    <h2>{team.name}</h2>
                    <h2>{team.email}</h2>
                    <h2>{team.role}</h2>
                </div>
            ))}
        </div>
    )
}

  export default Team