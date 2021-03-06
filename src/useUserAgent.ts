import { UserAgent } from './constants';
import { parse } from './helpers';

export function useUserAgent(phase: string): UserAgent {
  return parse(phase);
}
