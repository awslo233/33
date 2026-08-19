export interface JournalEntry {
  id: string;
  content: string;
  mood: MoodType;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

export type MoodType = 'happy' | 'calm' | 'anxious' | 'irritated' | 'sad' | 'excited';

export interface MoodConfig {
  label: string;
  emoji: string;
  color: string;
  bgColor: string;
}

export type ViewMode = 'write' | 'history' | 'search';
