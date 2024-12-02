import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Turns space serpated strings into slugs. Used for team names.
export const slugify = (a: string): string => {
  return a.toLowerCase().trim().replace(' ', '-');
};
