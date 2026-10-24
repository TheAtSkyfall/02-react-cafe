import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import type { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  const feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [votes, setVotes] = useState<Votes>(feedback);

  const totalVotes: number = Object.values(votes).reduce(
    (acc, a) => acc + a,
    0,
  );

  const positiveRate: number = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const canReset = totalVotes > 0 ? true : false;

  function handleVote(type: VoteType): void {
    setVotes((currentVotes) => ({
      ...currentVotes,
      [type]: currentVotes[type] + 1,
    }));
  }

  function resetVotes(): void {
    setVotes(feedback);
  }

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onReset={resetVotes}
        onVote={handleVote}
        canReset={canReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          totalVotes={totalVotes}
          positiveRate={positiveRate}
          votes={votes}
        />
      ) : null}
      {totalVotes === 0 ? <Notification /> : null}
    </div>
  );
}
