export { cn } from 'cn';

/**
 * Constants
 */
import { PLAYER_POS } from '@/constants';

export function getPosLabel(position: string): string {
  const [primaryPos] = position.split(',');

  return PLAYER_POS[primaryPos];
}
