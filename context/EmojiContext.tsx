import { ImageSource } from "expo-image";
import { createContext, ReactNode, useState } from "react";

export const EmojiContext = createContext<{
  emojis: ImageSource[];
  addEmoji: (emoji: ImageSource) => void;
}>({
  emojis: [],
  addEmoji: () => {},
});

export function EmojiProvider({ children }: { children: ReactNode }) {
  const [emojis, setEmojis] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);
  const addEmoji = (emoji: ImageSource) => {
    setEmojis(() => {
      const newEmojis = [...emojis];
      newEmojis.splice(-1, 0, emoji);
      return newEmojis;
    });
  };

  return (
    <EmojiContext.Provider value={{ emojis, addEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
}
