import React, {useState} from "react";

const TeamForm = props => {
    console.log("props" , props);
    const [teamMember,setTeamMember] = useState({
        name: "",
        email:"",
        role:"",
    })
    const handleChanges = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }
    const submitForm = event => {
        event.preventDefault();
        props.addNewTeamMember(teamMember);
        setTeamMember({name:"", email:"", role:""})
    }
    return (
        <form onSubmit={submitForm}>
            <input placeholder="name" id="name" type="text" name="name" onChange={handleChanges} value={teamMember.name}></input>
            <input placeholder="email" id="email" type="text" name="email" onChange={handleChanges} value={teamMember.email}></input>
            <input placeholder="role" id="role" type="text" name="role" onChange={handleChanges} value={teamMember.role}></input>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TeamForm
