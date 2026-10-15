/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

export const ITEMS_PER_PAGE = [
  { label: '10', value: 10 },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
  { label: '30', value: 30 },
  { label: '40', value: 40 },
  { label: '50', value: 50 },
];

export const COMPITITIONS = [
  { label: 'All', value: 'all' },
  { label: 'Premier League', value: 'eng Premier League' },
  { label: 'La Liga', value: 'es La Liga' },
  { label: 'Serie A', value: 'it Serie A' },
  { label: 'Ligue 1', value: 'fr Ligue 1' },
  { label: 'Bundesliga', value: 'de Bundesliga' },
];

export const PLAYER_POS = {
  FW: 'Forwarder',
  MF: 'Midfielder',
  DF: 'Defender',
  GK: 'Goalkeeper',
} as { [key: string]: string };
