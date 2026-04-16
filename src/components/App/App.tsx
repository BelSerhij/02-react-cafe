import clsx from "clsx";
import css from "./App.module.css";
import { useState } from "react";
import { type VoteType } from "../../types/votes";
import { type Votes }  from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleVote = (voteType: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [voteType]: prevVotes[voteType] + 1
    }));
  }
  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
    
const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
      <div className={clsx(css.app)}>
          <CafeInfo />
          <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
        {totalVotes > 0 ? (
            <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0} />
          ) : (<Notification />)}
    </div>
  );
}
