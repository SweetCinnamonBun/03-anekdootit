import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Votes = (props) => <p>has {props.votes[props.selected]} votes</p>;

const MostVotedAnecdote = (props) => {
  if (props.votes > 0) {
    return (
      <div>
        <p>{props.anecdotes[props.value]}</p>
        <p>has {props.mostVotes} votes</p>
      </div>
    );
  }

  return <p>Please vote</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const randomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
    console.log(selected);
  };

  const handleClickVote = () => {
    const newPoints = {
      ...points,
    };
    newPoints[selected] += 1;
    setPoints(newPoints);
    setVotes(votes + 1);
  };

  let nums = Object.values(points);
  console.log(nums);
  let mostVotes = nums[0];
  let mostVotesIndex = 0;
  nums.forEach((element) => {
    if (element > mostVotes) {
      mostVotes = element;
      mostVotesIndex = nums.indexOf(element);
    }
  });

  console.log(mostVotesIndex);

  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <Votes votes={points} selected={selected} />
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={randomAnecdote} text="next anecdote" />
      <h1>Anecdote with the most votes</h1>
      <MostVotedAnecdote
        anecdotes={anecdotes}
        value={mostVotesIndex}
        votes={votes}
        points={points}
        selected={selected}
        mostVotes={mostVotes}
      />
    </div>
  );
};

export default App;
