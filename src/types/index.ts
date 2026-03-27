"use client";

export interface ChatMessage {
  text: string;
  isUser: boolean;
  timestamp?: string;
}