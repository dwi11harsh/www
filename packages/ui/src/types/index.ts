export type TopbarButtonOptions =
  | "Receiver Data"
  | "Play Log"
  | "Audience Data"
  | "Programming Assist";

export type PlayLogDataType = {
  rank: number;
  title: string;
  mm_song_id: string;
  artists_name: string;
  total_plays: string;
  first_play: string;
  last_play: string;
  total_play_duration_mins: string;
};

export type ReceiverDataType = {
  unit_no: string;
  postcode: string;
  status: boolean;
  last_broadcast: string;
  transmission_strength: 0 | 1 | 2 | 3 | 4 | 5;
  listening_time: string;
};
