import type { VotesType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  onVote: (type: VotesType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={(e) => {
          const textContent = e.currentTarget.textContent
            .toLowerCase()
            .trim() as VotesType;
          onVote(textContent);
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={(e) => {
          const textContent = e.currentTarget.textContent
            .toLowerCase()
            .trim() as VotesType;
          onVote(textContent);
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={(e) => {
          const textContent = e.currentTarget.textContent
            .toLowerCase()
            .trim() as VotesType;
          onVote(textContent);
        }}
      >
        Bad
      </button>
      {canReset ? (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      ) : null}
    </div>
  );
}
