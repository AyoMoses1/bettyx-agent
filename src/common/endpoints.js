const endpoints = {
  login: '/auth',
  signup: '/users/signup',
  projects: '/projects',
  clients: '/clients',
  tasks: '/tasks',
  agentsWithPlayers: '/agent/allAgentsWithPlayers?sort=date',
  agents: '/agent',
  players: '/player',
  agentPlayers: '/player/findPlayersByAgent'
};

export default endpoints;
