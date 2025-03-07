export interface IPlayer {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  characters?: any[];
  isAuthenticated?: boolean;
  socketId?: string;
  // Add more properties as needed
}

export default IPlayer;
