export default interface Votes {
	good: number;
	neutral: number;
	bad: number;
}
export type VoteTypes = keyof Votes;
