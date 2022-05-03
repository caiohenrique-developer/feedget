import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export type FeedbackTYpe = keyof typeof feedbackTypes;

export const WidgetForm = (): JSX.Element => {
    const [feedbackType, setFeedbackType] = useState<FeedbackTYpe | null>(null)
    
    const handleRestartFeedback = () => setFeedbackType(null)
    
  return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeStepChanged={setFeedbackType} />
        ) : (
            <FeedbackContentStep 
                feedbackType={feedbackType}
                onRestartFeedback={handleRestartFeedback}
            />
        )}

        <footer className="text-xs text-neutral-400">
            Feito com 🫀 pela <a className="underline underline-offset-2" href="https://rocektseat.com.br">Rocketseat</a>
        </footer>
      </div>
  );
};